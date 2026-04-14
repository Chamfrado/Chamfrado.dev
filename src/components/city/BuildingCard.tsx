import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import type { SectionItem } from "../../types/section";

type BuildingCardProps = {
  section: SectionItem;
  isActive: boolean;
  onEnter?: () => void;
};

export default function BuildingCard({
  section,
  isActive,
  onEnter,
}: BuildingCardProps) {
  const Icon = section.icon;

  return (
    <motion.article
      animate={{
        y: isActive ? -10 : 6,
        scale: isActive ? 1 : 0.94,
        opacity: isActive ? 1 : 0.42,
      }}
      transition={{ type: "spring", stiffness: 180, damping: 20 }}
      className="group relative h-full"
    >
      <div
        className={[
          "relative overflow-hidden rounded-[2rem] border p-5 backdrop-blur-xl transition duration-300 md:p-6",
          isActive
            ? "border-fuchsia-300/40 bg-black/40 shadow-[0_0_40px_rgba(168,85,247,0.25)]"
            : "border-fuchsia-400/10 bg-black/10",
        ].join(" ")}
      >
        <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-fuchsia-300/70 to-transparent" />
        <div
          className={[
            "absolute -right-10 -top-10 h-28 w-28 rounded-full blur-3xl transition duration-300",
            isActive ? "bg-fuchsia-500/25" : "bg-fuchsia-500/10",
          ].join(" ")}
        />

        <div className="relative">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-[10px] uppercase tracking-[0.35em] text-fuchsia-300/75">
                {section.storeName}
              </p>
              <h2 className="mt-3 text-xl font-semibold text-white md:text-2xl">
                {section.title}
              </h2>
            </div>

            <div
              className={[
                "rounded-2xl border p-3 text-fuchsia-300 transition duration-300",
                isActive
                  ? "border-fuchsia-300/30 bg-fuchsia-400/10 text-fuchsia-200"
                  : "border-white/10 bg-white/5",
              ].join(" ")}
            >
              <Icon className="h-5 w-5 md:h-6 md:w-6" />
            </div>
          </div>

          <div className="mt-6 rounded-[1.5rem] border border-white/10 bg-black/30 p-4">
            <p className="text-sm text-fuchsia-200/90">{section.subtitle}</p>

            <p className="mt-3 text-sm leading-6 text-zinc-300">
              {section.description}
            </p>
          </div>

          <div className="mt-6 flex items-center justify-between gap-3">
            <span className="text-[10px] uppercase tracking-[0.3em] text-cyan-300/70">
              {isActive ? "Current stop" : "City stop"}
            </span>

            <button
              type="button"
              onClick={onEnter}
              className={[
                "inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[10px] uppercase tracking-[0.25em] transition",
                isActive
                  ? "border-fuchsia-300/30 bg-fuchsia-500/10 text-fuchsia-200 hover:bg-fuchsia-500/20"
                  : "border-fuchsia-400/10 bg-transparent text-zinc-500",
              ].join(" ")}
            >
              Enter
              <ChevronRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
