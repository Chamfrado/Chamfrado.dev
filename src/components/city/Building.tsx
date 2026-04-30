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
      className="group relative flex h-full items-end justify-center overflow-visible"
      animate={{
        y: isActive ? 0 : 6,
        scale: isActive ? 1 : 0.78,
        opacity: isActive ? 1 : 0.36,
      }}
      whileHover={{
        y: isActive ? -3 : 2,
        scale: isActive ? 1.04 : 0.84,
        opacity: isActive ? 1 : 0.55,
      }}
      whileTap={{ scale: isActive ? 0.98 : 0.78 }}
      transition={{ type: "spring", stiffness: 120, damping: 18 }}
    >
      <div
        className={[
          "absolute bottom-0 h-8 w-[68%] rounded-full bg-black/55 blur-2xl transition duration-300 group-hover:w-[76%]",
          isActive ? "opacity-55" : "opacity-32",
        ].join(" ")}
      />

      <div
        className={[
          "absolute bottom-1 h-4 w-[58%] rounded-full blur-xl transition duration-300 group-hover:w-[66%]",
          isActive
            ? "animate-pulse bg-gradient-to-r from-fuchsia-500/40 via-cyan-300/35 to-fuchsia-500/40 group-hover:via-cyan-200/45"
            : "bg-fuchsia-500/10 group-hover:bg-fuchsia-400/18",
        ].join(" ")}
      />

      <motion.img
        src={`/assets/buildings-cutout/${section.id}.webp`}
        alt={section.title}
        className="relative z-10 max-h-full w-auto origin-bottom select-none object-contain mix-blend-screen transition duration-300 group-hover:brightness-110"
        draggable={false}
        animate={{
          y: isActive ? [0, -1.5, 0] : 0,
          filter: isActive
            ? "saturate(1.03) brightness(0.98) drop-shadow(0 0 16px rgba(168,85,247,0.28)) drop-shadow(0 0 8px rgba(34,211,238,0.12))"
            : "saturate(0.72) brightness(0.58) blur(0.25px) drop-shadow(0 0 8px rgba(168,85,247,0.1))",
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
          className="pointer-events-none absolute bottom-[2.6rem] left-1/2 z-20 hidden -translate-x-1/2 rounded-full border border-cyan-300/30 bg-black/45 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-cyan-200 shadow-[0_0_18px_rgba(34,211,238,0.18)] backdrop-blur-xl md:block"
        >
          Click to enter
        </motion.div>
      )}

      {!isActive && (
        <div className="absolute bottom-4 z-20 translate-y-1/2">
          <div className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-zinc-400 backdrop-blur-xl transition duration-300 group-hover:border-cyan-300/40 group-hover:text-cyan-100">
            {section.storeName}
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={onEnter}
        className="absolute inset-0 z-30 cursor-pointer touch-manipulation rounded-[2rem] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
        aria-label={`Enter ${section.title} district`}
      />
    </motion.div>
  );
}
