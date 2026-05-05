import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

export type MotorcyclePhase = "idle" | "accelerate" | "ride" | "brake" | "turn";
export type MotorcycleFacing = "right" | "left";

const ACTIONS: Record<
  MotorcyclePhase,
  { directory: string; frames: number; fps: number; loop: boolean }
> = {
  idle: {
    directory: "/assets/motorcycle/actions/idle",
    frames: 4,
    fps: 6,
    loop: true,
  },
  accelerate: {
    directory: "/assets/motorcycle/actions/accelerate",
    frames: 5,
    fps: 14,
    loop: false,
  },
  ride: {
    directory: "/assets/motorcycle/actions/ride",
    frames: 6,
    fps: 12,
    loop: true,
  },
  brake: {
    directory: "/assets/motorcycle/actions/brake",
    frames: 4,
    fps: 12,
    loop: false,
  },
  turn: {
    directory: "/assets/motorcycle/actions/turn",
    frames: 7,
    fps: 14,
    loop: false,
  },
};

type MotorcycleAction = (typeof ACTIONS)[MotorcyclePhase];
const MOTORCYCLE_ASSET_VERSION = "clean-v4";

function getFrameSource(action: MotorcycleAction, frameIndex: number) {
  return `${action.directory}/${frameIndex}.png?v=${MOTORCYCLE_ASSET_VERSION}`;
}

type MotorcycleProps = {
  activeIndex: number;
  phase: MotorcyclePhase;
  facing: MotorcycleFacing;
  sequenceId: number;
};

function SpriteFrame({
  action,
  shouldReduceMotion,
}: {
  action: MotorcycleAction;
  shouldReduceMotion: boolean;
}) {
  const [frameIndex, setFrameIndex] = useState(0);
  const displayedFrame = shouldReduceMotion ? 0 : frameIndex;

  useEffect(() => {
    Object.values(ACTIONS).forEach((spriteAction) => {
      Array.from({ length: spriteAction.frames }, (_, index) => {
        const image = new Image();
        image.src = getFrameSource(spriteAction, index);
        return image;
      });
    });
  }, []);

  useEffect(() => {
    setFrameIndex(0);
  }, [action.directory]);

  useEffect(() => {
    if (shouldReduceMotion) {
      setFrameIndex(0);
      return undefined;
    }

    const frameDuration = 1000 / action.fps;
    let animationFrameId = 0;
    let startTime: number | null = null;

    const tick = (timestamp: number) => {
      startTime ??= timestamp;

      const elapsed = timestamp - startTime;
      const nextFrame = action.loop
        ? Math.floor(elapsed / frameDuration) % action.frames
        : Math.min(Math.floor(elapsed / frameDuration), action.frames - 1);

      setFrameIndex((currentFrame) =>
        currentFrame === nextFrame ? currentFrame : nextFrame,
      );

      if (action.loop || nextFrame < action.frames - 1) {
        animationFrameId = window.requestAnimationFrame(tick);
      }
    };

    animationFrameId = window.requestAnimationFrame(tick);

    return () => window.cancelAnimationFrame(animationFrameId);
  }, [
    action.directory,
    action.fps,
    action.frames,
    action.loop,
    shouldReduceMotion,
  ]);

  return (
    <div
      aria-hidden="true"
      className="aspect-[280/200] w-full overflow-hidden brightness-[0.96] saturate-[1.04] drop-shadow-[0_0_18px_rgba(168,85,247,0.34)]"
    >
      <img
        src={getFrameSource(action, displayedFrame)}
        alt=""
        className="block h-full w-full select-none object-fill"
        draggable={false}
      />
    </div>
  );
}

export default function Motorcycle({
  activeIndex,
  phase,
  facing,
  sequenceId,
}: MotorcycleProps) {
  const shouldReduceMotion = useReducedMotion() === true;
  const action = shouldReduceMotion ? ACTIONS.idle : ACTIONS[phase];

  return (
    <motion.div
      animate={{ rotate: activeIndex % 2 === 0 ? -2 : 2 }}
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
      className="pointer-events-none absolute bottom-[calc(14vh+env(safe-area-inset-bottom))] left-1/2 z-[12] -translate-x-1/2 md:bottom-[5.4vh]"
    >
      <div className="relative">
        <motion.div
          animate={{ opacity: [0.38, 0.58, 0.38] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-1/2 top-[78%] h-5 w-36 -translate-x-1/2 rounded-full bg-gradient-to-r from-fuchsia-500/30 via-cyan-300/22 to-fuchsia-500/30 blur-xl md:w-44"
        />

        <motion.div
          animate={shouldReduceMotion ? { y: 0 } : { y: [0, -1.25, 0] }}
          transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
          className="relative h-auto w-[154px] max-w-none min-[390px]:w-[168px] md:w-[188px]"
        >
          <div
            key={`${phase}-${facing}-${sequenceId}`}
            className="w-full"
            style={{
              transform: facing === "left" ? "scaleX(-1)" : undefined,
              transformOrigin: "center",
            }}
          >
            <SpriteFrame
              action={action}
              shouldReduceMotion={shouldReduceMotion}
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
