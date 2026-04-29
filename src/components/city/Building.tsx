import { motion } from "framer-motion";
import type { SectionItem } from "../../types/section";

type BuildingProps = {
  section: SectionItem;
  isActive: boolean;
  onEnter: () => void;
};

export default function Building({
  section,
  isActive,
  onEnter,
}: BuildingProps) {
  return (
    <motion.div
      className="group relative flex h-[400px] items-end justify-center md:h-[500px]"
      animate={{
        y: isActive ? -8 : 8,
        scale: isActive ? 1 : 0.78,
        opacity: isActive ? 1 : 0.18,
      }}
      whileHover={{
        y: isActive ? -12 : 2,
        scale: isActive ? 1.03 : 0.84,
        opacity: isActive ? 1 : 0.34,
      }}
      whileTap={{ scale: isActive ? 0.98 : 0.8 }}
      transition={{ type: "spring", stiffness: 120, damping: 18 }}
    >
      <div
        className={[
          "absolute bottom-3 h-8 w-32 rounded-full blur-2xl transition duration-300 group-hover:w-40",
          isActive
            ? "bg-fuchsia-500/55 animate-pulse group-hover:bg-cyan-400/45"
            : "bg-fuchsia-500/8 group-hover:bg-fuchsia-500/22",
        ].join(" ")}
      />

      <motion.img
        src={`/buildings/${section.id}.png`}
        alt={section.title}
        className="relative z-10 max-h-[300px] w-auto select-none object-contain transition duration-300 group-hover:brightness-110 md:max-h-[360px]"
        animate={{
          y: isActive ? [0, -3, 0] : 0,
          filter: isActive
            ? "drop-shadow(0 0 24px rgba(168,85,247,0.45))"
            : "drop-shadow(0 0 8px rgba(168,85,247,0.08))",
        }}
        transition={{
          y: {
            duration: 2.4,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
      />

      {isActive && (
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: [0.55, 1, 0.55], y: 0 }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute bottom-12 left-1/2 z-20 hidden -translate-x-1/2 rounded-full border border-cyan-300/30 bg-black/45 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-cyan-200 shadow-[0_0_18px_rgba(34,211,238,0.18)] backdrop-blur-xl md:block"
        >
          Enter district
        </motion.div>
      )}

      <div className="absolute bottom-2 z-20 translate-y-1/2">
        <div
          className={[
            "rounded-full border px-3 py-1 text-[10px] uppercase tracking-[0.25em] backdrop-blur-xl transition duration-300 group-hover:border-cyan-300/40 group-hover:text-cyan-100",
            isActive
              ? "border-fuchsia-300/40 bg-fuchsia-500/20 text-fuchsia-200 shadow-[0_0_20px_rgba(168,85,247,0.45)]"
              : "border-white/10 bg-black/30 text-zinc-400",
          ].join(" ")}
        >
          {section.storeName}
        </div>
      </div>

      <button
        type="button"
        onClick={onEnter}
        className="absolute inset-0 z-30 cursor-pointer touch-manipulation rounded-[2rem] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
        aria-label={`Enter ${section.title} district`}
      />
    </motion.div>
  );
}
