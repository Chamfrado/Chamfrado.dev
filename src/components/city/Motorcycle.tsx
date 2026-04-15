import { motion } from "framer-motion";

type MotorcycleProps = {
  activeIndex: number;
};

export default function Motorcycle({ activeIndex }: MotorcycleProps) {
  return (
    <motion.div
      animate={{ x: activeIndex * 2, rotate: activeIndex % 2 === 0 ? -2 : 2 }}
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
      className="pointer-events-none absolute bottom-2 left-1/2 z-20 -translate-x-1/2"
    >
      <div className="relative">
        <motion.div
          animate={{ opacity: [0.35, 0.55, 0.35] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-1/2 top-full h-8 w-24 -translate-x-1/2 rounded-full bg-fuchsia-500/40 blur-2xl"
        />

        <motion.div
          animate={{ y: [0, -1.5, 0] }}
          transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
          className="flex items-end gap-1.5"
        >
          <div className="h-6 w-6 rounded-full border border-fuchsia-300/30 bg-zinc-900 shadow-[0_0_18px_rgba(168,85,247,0.25)]" />
          <div className="mb-2 h-8 w-20 rounded-[1.2rem] border border-fuchsia-300/30 bg-gradient-to-r from-violet-700 to-fuchsia-500 shadow-[0_0_24px_rgba(168,85,247,0.4)]" />
          <div className="h-6 w-6 rounded-full border border-fuchsia-300/30 bg-zinc-900 shadow-[0_0_18px_rgba(168,85,247,0.25)]" />
        </motion.div>
      </div>
    </motion.div>
  );
}
