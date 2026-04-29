import { motion } from "framer-motion";

type MotorcycleProps = {
  activeIndex: number;
};

export default function Motorcycle({ activeIndex }: MotorcycleProps) {
  return (
    <motion.div
      animate={{ rotate: activeIndex % 2 === 0 ? -2 : 2 }}
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
      className="pointer-events-none absolute bottom-[calc(6.55rem+env(safe-area-inset-bottom))] left-1/2 z-[12] -translate-x-1/2 md:-bottom-2 md:z-[9]"
    >
      <div className="relative">
        <motion.div
          animate={{ opacity: [0.35, 0.55, 0.35] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-1/2 top-[78%] h-10 w-44 -translate-x-1/2 rounded-full bg-fuchsia-500/35 blur-2xl md:w-56"
        />

        <motion.div
          animate={{ y: [0, -1.5, 0] }}
          transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
          className="relative"
        >
          <img
            src="/assets/motorcycle/motorcycle-cutout.png"
            alt=""
            className="h-auto w-[172px] max-w-none select-none object-contain drop-shadow-[0_0_24px_rgba(168,85,247,0.36)] min-[390px]:w-[198px] md:w-[260px]"
            aria-hidden="true"
            draggable={false}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
