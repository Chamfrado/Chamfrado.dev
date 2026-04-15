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
      className="relative flex h-[360px] items-end justify-center md:h-[430px]"
      animate={{
        y: isActive ? -8 : 8,
        scale: isActive ? 1 : 0.9,
        opacity: isActive ? 1 : 0.5,
      }}
      transition={{ type: "spring", stiffness: 120, damping: 18 }}
    >
      <div
        className={[
          "absolute bottom-3 h-8 w-32 rounded-full blur-2xl transition",
          isActive ? "bg-fuchsia-500/45" : "bg-fuchsia-500/12",
        ].join(" ")}
      />

      <motion.img
        src={`/buildings/${section.id}.png`}
        alt={section.title}
        className="relative z-10 max-h-[300px] w-auto select-none object-contain md:max-h-[360px]"
        animate={{
          filter: isActive
            ? "drop-shadow(0 0 20px rgba(168,85,247,0.35))"
            : "drop-shadow(0 0 8px rgba(168,85,247,0.12))",
        }}
      />

      <div className="absolute bottom-0 z-20 translate-y-1/2">
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
        onClick={onEnter}
        className="absolute inset-0 z-30"
        aria-label={`Enter ${section.title}`}
      />
    </motion.div>
  );
}
