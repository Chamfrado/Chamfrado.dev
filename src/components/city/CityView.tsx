import { motion, useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { sections } from "../../data/sections";
import Building from "./Building";
import CRTPanel from "./CRTPanel";
import MobileCityControls from "./MobileCityControls";
import Motorcycle, {
  type MotorcycleFacing,
  type MotorcyclePhase,
} from "./Motorcycle";
import StreetHUD from "./StreetHUD";

const CARD_WIDTH_MOBILE = 300;
const CARD_WIDTH_DESKTOP = 360;
const CARD_GAP = 420;
const CITY_ROW_TRANSITION = {
  type: "tween",
  duration: 1.35,
  ease: "easeInOut",
} as const;

const VISUAL_OFFSET: Record<string, number> = {
  career: 0,
  bio: 0,
  projects: 0,
  links: 0,
  contact: 0,
};

function getCardWidth() {
  if (typeof window === "undefined") return CARD_WIDTH_DESKTOP;
  return window.innerWidth < 768 ? CARD_WIDTH_MOBILE : CARD_WIDTH_DESKTOP;
}

function Stars() {
  const dots = Array.from({ length: 60 }, (_, index) => ({
    id: index,
    top: `${(index * 37) % 100}%`,
    left: `${(index * 17) % 100}%`,
    opacity: 0.25 + ((index * 13) % 60) / 100,
  }));

  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      {dots.map((dot) => (
        <div
          key={dot.id}
          className="absolute h-[2px] w-[2px] rounded-full bg-white"
          style={{ top: dot.top, left: dot.left, opacity: dot.opacity }}
        />
      ))}
    </div>
  );
}

function RoadLights() {
  return (
    <div className="pointer-events-none absolute bottom-[calc(8.5vh+env(safe-area-inset-bottom))] left-0 right-0 z-[8] overflow-hidden opacity-80 md:bottom-[6.8vh]">
      {[0, 1, 2, 3, 4, 5].map((index) => (
        <motion.div
          key={index}
          initial={{ x: "-20%" }}
          animate={{ x: "120%" }}
          transition={{
            duration: 2.4 + index * 0.35,
            repeat: Infinity,
            ease: "linear",
            delay: index * 0.28,
          }}
          className="mb-2 h-[2px] w-24 bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent blur-[0.2px]"
        />
      ))}
    </div>
  );
}

function RepeatedSpriteLayer({
  src,
  offset,
  copies,
  className,
  imageClassName,
}: {
  src: string;
  offset: number;
  copies: number;
  className: string;
  imageClassName: string;
}) {
  return (
    <motion.div
      className={["pointer-events-none absolute bottom-0 left-0", className].join(
        " ",
      )}
      animate={{ x: -offset }}
      transition={CITY_ROW_TRANSITION}
      aria-hidden="true"
    >
      <div className="flex h-full items-end">
        {Array.from({ length: copies }, (_, index) => (
          <img
            key={`${src}-${index}`}
            src={src}
            alt=""
            className={imageClassName}
            draggable={false}
          />
        ))}
      </div>
    </motion.div>
  );
}

function SpriteBackdrop({
  skylineOffset,
  cityRowOffset,
  roadOffset,
}: {
  skylineOffset: number;
  cityRowOffset: number;
  roadOffset: number;
}) {
  return (
    <>
      <div className="pointer-events-none absolute inset-x-0 top-0 bottom-[18vh] z-[1] overflow-hidden md:bottom-[16vh]">
        <RepeatedSpriteLayer
          src="/assets/skyline/skyline.png"
          offset={skylineOffset}
          copies={3}
          className="z-[1] h-full min-h-[390px]"
          imageClassName="h-full w-auto max-w-none shrink-0 object-contain object-bottom opacity-90 brightness-[0.86] saturate-[0.98]"
        />

        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-[38vh] bg-[radial-gradient(ellipse_at_48%_55%,rgba(168,85,247,0.2),transparent_56%),radial-gradient(ellipse_at_68%_58%,rgba(34,211,238,0.1),transparent_50%),linear-gradient(to_bottom,transparent_0%,rgba(38,20,74,0.32)_34%,rgba(10,6,24,0.24)_78%,transparent_100%)]" />

        <RepeatedSpriteLayer
          src="/assets/skyline/mid-buildings.png"
          offset={cityRowOffset}
          copies={5}
          className="z-[3] h-[24vh] min-h-[150px]"
          imageClassName="h-full w-auto max-w-none shrink-0 object-contain object-bottom opacity-100 brightness-[0.95] saturate-[1.04]"
        />
      </div>

      <RepeatedSpriteLayer
        src="/assets/road/road-base.png"
        offset={roadOffset}
        copies={4}
        className="z-[3] h-[18vh] min-h-[118px] md:h-[16vh] md:min-h-[120px]"
        imageClassName="h-full w-auto max-w-none shrink-0 object-contain object-bottom opacity-100 brightness-[0.9] saturate-[1.02]"
      />
    </>
  );
}

function SceneGrade() {
  return (
    <>
      <div className="pointer-events-none absolute inset-0 z-[4] bg-[radial-gradient(circle_at_32%_24%,rgba(168,85,247,0.1),transparent_34%),radial-gradient(circle_at_72%_18%,rgba(34,211,238,0.08),transparent_32%),linear-gradient(to_bottom,rgba(4,2,9,0)_0%,rgba(4,2,9,0.04)_62%,rgba(3,1,7,0.24)_100%)]" />
      <div className="pointer-events-none absolute inset-0 z-[5] bg-[radial-gradient(ellipse_at_center,transparent_58%,rgba(3,1,8,0.22)_86%,rgba(0,0,0,0.62)_100%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-[52vh] z-[6] h-28 bg-gradient-to-b from-transparent via-[#2a1654]/16 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-[17.8vh] z-[7] h-px bg-gradient-to-r from-transparent via-fuchsia-300/22 to-transparent md:bottom-[15.8vh]" />
    </>
  );
}

export default function CityView() {
  const shouldReduceMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(getCardWidth());
  const [motorcyclePhase, setMotorcyclePhase] =
    useState<MotorcyclePhase>("idle");
  const [motorcycleFacing, setMotorcycleFacing] =
    useState<MotorcycleFacing>("right");
  const [motorcycleSequenceId, setMotorcycleSequenceId] = useState(0);
  const [selectedSectionId, setSelectedSectionId] = useState<string | null>(
    null,
  );
  const phaseTimeoutsRef = useRef<number[]>([]);

  const clearPhaseTimeouts = useCallback(() => {
    phaseTimeoutsRef.current.forEach((timeoutId) =>
      window.clearTimeout(timeoutId),
    );
    phaseTimeoutsRef.current = [];
  }, []);

  useEffect(() => {
    const onResize = () => setCardWidth(getCardWidth());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => clearPhaseTimeouts, [clearPhaseTimeouts]);

  const activeSection = useMemo(() => sections[activeIndex], [activeIndex]);

  const selectedSection = useMemo(
    () => sections.find((section) => section.id === selectedSectionId) ?? null,
    [selectedSectionId],
  );

  const step = cardWidth + CARD_GAP;
  const visualOffset = VISUAL_OFFSET[sections[activeIndex].id] ?? 0;
  const trackOffset = activeIndex * step + visualOffset;
  const skyOffset = trackOffset * 0.03;
  const skylineOffset = trackOffset * 0.03;
  const cityRowOffset = trackOffset;
  const roadOffset = trackOffset * 0.28;

  const travelTo = useCallback(
    (nextIndex: number) => {
      const boundedIndex = Math.min(
        Math.max(nextIndex, 0),
        sections.length - 1,
      );

      if (boundedIndex === activeIndex) return;

      const nextFacing: MotorcycleFacing =
        boundedIndex > activeIndex ? "right" : "left";
      const isChangingDirection = nextFacing !== motorcycleFacing;

      clearPhaseTimeouts();
      setMotorcycleSequenceId((currentSequence) => currentSequence + 1);

      if (shouldReduceMotion) {
        setMotorcycleFacing(nextFacing);
        setMotorcyclePhase("idle");
        setActiveIndex(boundedIndex);
        return;
      }

      if (isChangingDirection) {
        setMotorcyclePhase("turn");

        phaseTimeoutsRef.current = [
          window.setTimeout(() => {
            setMotorcycleFacing(nextFacing);
            setMotorcyclePhase("accelerate");
            setActiveIndex(boundedIndex);
          }, 540),
          window.setTimeout(() => setMotorcyclePhase("ride"), 980),
          window.setTimeout(() => setMotorcyclePhase("brake"), 1600),
          window.setTimeout(() => setMotorcyclePhase("idle"), 1940),
        ];

        return;
      }

      setMotorcyclePhase("accelerate");
      setActiveIndex(boundedIndex);

      phaseTimeoutsRef.current = [
        window.setTimeout(() => setMotorcyclePhase("ride"), 420),
        window.setTimeout(() => setMotorcyclePhase("brake"), 1420),
        window.setTimeout(() => setMotorcyclePhase("idle"), 1740),
      ];
    },
    [
      activeIndex,
      clearPhaseTimeouts,
      motorcycleFacing,
      shouldReduceMotion,
    ],
  );

  const goPrev = () => travelTo(activeIndex - 1);

  const goNext = () => travelTo(activeIndex + 1);

  return (
    <main className="fixed inset-0 h-dvh overflow-hidden bg-[#07030E] text-white">
      <div className="relative h-dvh overflow-hidden bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.22),transparent_40%),linear-gradient(to_bottom,#0b0613,#090612_55%,#05030a)]">
        <motion.div
          className="absolute inset-0"
          animate={{ x: -skyOffset }}
          transition={{ type: "spring", stiffness: 70, damping: 24 }}
        >
          <Stars />
        </motion.div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(168,85,247,0.25),transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_10%,rgba(34,211,238,0.15),transparent_40%)]" />
        <SpriteBackdrop
          skylineOffset={skylineOffset}
          cityRowOffset={cityRowOffset}
          roadOffset={roadOffset}
        />
        <SceneGrade />

        <div className="pointer-events-none absolute left-0 right-0 top-0 z-[15] mx-auto max-w-7xl px-4 pt-4 md:px-8 md:pt-6">
          <header>
            <p className="text-[10px] uppercase tracking-[0.45em] text-fuchsia-300/75">
              chamfrado.dev
            </p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
              Chamfrado.dev
            </h1>
            <p className="mt-3 max-w-[22rem] text-sm leading-6 text-zinc-300 md:max-w-2xl md:text-base">
              A neon city portfolio for software development, interactive web
              work, and practical product experiments.
            </p>
          </header>
        </div>

        <section className="pointer-events-none absolute inset-x-0 top-0 bottom-[18vh] z-[9] overflow-hidden md:bottom-[16vh]">
          <div className="pointer-events-auto absolute inset-x-0 bottom-0 h-[25vh] min-h-[165px] overflow-visible">
            <div className="relative h-full overflow-visible">
              <motion.div
                className="flex h-full items-end"
                animate={{
                  x: `calc(50% - ${cardWidth / 2}px - ${cityRowOffset}px)`,
                }}
                transition={CITY_ROW_TRANSITION}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.04}
                onDragEnd={(_, info) => {
                  if (info.offset.x < -50) travelTo(activeIndex + 1);
                  if (info.offset.x > 50) travelTo(activeIndex - 1);
                }}
                style={{ gap: `${CARD_GAP}px` }}
              >
                {sections.map((section, index) => (
                  <div
                    key={section.id}
                    className="flex items-end justify-center"
                    style={{
                      width: `${cardWidth}px`,
                      flex: `0 0 ${cardWidth}px`,
                    }}
                  >
                    <Building
                      section={section}
                      isActive={index === activeIndex}
                      onEnter={() => setSelectedSectionId(section.id)}
                    />
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        <div className="pointer-events-auto absolute bottom-4 left-0 right-0 z-20 mx-auto max-w-7xl px-8">
          <StreetHUD
            activeSection={activeSection}
            activeIndex={activeIndex}
            total={sections.length}
            onPrev={goPrev}
            onNext={goNext}
          />
        </div>

        <RoadLights />
        <Motorcycle
          activeIndex={activeIndex}
          facing={motorcycleFacing}
          phase={motorcyclePhase}
          sequenceId={motorcycleSequenceId}
        />

        <MobileCityControls
          activeSection={activeSection}
          activeIndex={activeIndex}
          total={sections.length}
          onPrev={goPrev}
          onNext={goNext}
          onEnter={() => setSelectedSectionId(activeSection.id)}
        />

        <CRTPanel
          open={!!selectedSection}
          section={selectedSection}
          onClose={() => setSelectedSectionId(null)}
        />
      </div>
    </main>
  );
}
