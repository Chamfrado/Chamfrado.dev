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
      transition={{ type: "spring", stiffness: 120, damping: 18 }}
    >
      <div
        className={[
          "absolute bottom-3 h-8 w-32 rounded-full blur-2xl transition",
          isActive ? "bg-fuchsia-500/55 animate-pulse" : "bg-fuchsia-500/8",
        ].join(" ")}
      />

      <motion.img
        src={`/buildings/${section.id}.png`}
        alt={section.title}
        className="relative z-10 max-h-[300px] w-auto select-none object-contain md:max-h-[360px]"
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
          Click to enter
        </motion.div>
      )}

      <div className="absolute bottom-2 z-20 translate-y-1/2">
        <div
          className={[
            "rounded-full border px-3 py-1 text-[10px] uppercase tracking-[0.25em] backdrop-blur-xl transition",
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
        className="absolute inset-0 z-30 rounded-[2rem] focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-300"
        aria-label={`Enter ${section.title}`}
      />
    </motion.div>
  );
}
