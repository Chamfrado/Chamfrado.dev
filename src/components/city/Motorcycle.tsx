import { motion } from "framer-motion";

type MotorcycleProps = {
  activeIndex: number;
};

export default function Motorcycle({ activeIndex }: MotorcycleProps) {
  return (
    <motion.div
      animate={{ rotate: activeIndex % 2 === 0 ? -2 : 2 }}
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
      className="pointer-events-none absolute bottom-[calc(12vh+env(safe-area-inset-bottom))] left-1/2 z-[12] -translate-x-1/2 md:bottom-[8.5vh]"
    >
      <div className="relative">
        <motion.div
          animate={{ opacity: [0.38, 0.58, 0.38] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-1/2 top-[76%] h-5 w-28 -translate-x-1/2 rounded-full bg-gradient-to-r from-fuchsia-500/30 via-cyan-300/22 to-fuchsia-500/30 blur-xl md:w-36"
        />

        <motion.div
          animate={{ y: [0, -1.5, 0] }}
          transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
          className="relative"
        >
          <img
            src="/assets/motorcycle/motorcycle-goal-clean.png"
            alt=""
            className="h-auto w-[116px] max-w-none select-none object-contain brightness-[0.95] saturate-[1.02] drop-shadow-[0_0_18px_rgba(168,85,247,0.34)] min-[390px]:w-[128px] md:w-[150px]"
            aria-hidden="true"
            draggable={false}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
