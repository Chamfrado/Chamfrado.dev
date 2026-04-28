import { ArrowLeft, ArrowRight } from "lucide-react";
import type { SectionItem } from "../../types/section";

type StreetHUDProps = {
  activeSection: SectionItem;
  activeIndex: number;
  total: number;
  onPrev: () => void;
  onNext: () => void;
};

export default function StreetHUD({
  activeSection,
  activeIndex,
  total,
  onPrev,
  onNext,
}: StreetHUDProps) {
  return (
    <footer className="relative z-20 mt-4 flex flex-col gap-4 pb-6 md:mt-0 md:flex-row md:items-end md:justify-between">
      <div className="rounded-[1.75rem] border border-fuchsia-400/20 bg-black/25 p-4 backdrop-blur-xl md:max-w-[360px]">
        <p className="text-[10px] uppercase tracking-[0.3em] text-cyan-300/70">
          Current stop
        </p>

        <div className="mt-2 flex items-center justify-between gap-4">
          <h2 className="text-xl font-semibold text-white">
            {activeSection.title}
          </h2>

          <span className="rounded-full border border-fuchsia-400/20 bg-fuchsia-500/10 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-fuchsia-200">
            {String(activeIndex + 1).padStart(2, "0")} /{" "}
            {String(total).padStart(2, "0")}
          </span>
        </div>

        <p className="mt-2 text-sm leading-6 text-zinc-400">
          {activeSection.description}
        </p>

        <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/5">
          <div
            className="h-full rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-400 transition-all duration-300"
            style={{ width: `${((activeIndex + 1) / total) * 100}%` }}
          />
        </div>
      </div>

      <div className="hidden items-center gap-3 md:flex">
        <button
          type="button"
          onClick={onPrev}
          className="rounded-2xl border border-fuchsia-400/20 bg-black/25 px-4 py-3 text-sm font-medium text-white backdrop-blur-xl transition hover:border-fuchsia-300/40 hover:bg-fuchsia-500/10"
        >
          <span className="inline-flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Prev
          </span>
        </button>

        <button
          type="button"
          onClick={onNext}
          className="rounded-2xl border border-fuchsia-400/20 bg-black/25 px-4 py-3 text-sm font-medium text-white backdrop-blur-xl transition hover:border-fuchsia-300/40 hover:bg-fuchsia-500/10"
        >
          <span className="inline-flex items-center gap-2">
            Next
            <ArrowRight className="h-4 w-4" />
          </span>
        </button>
      </div>
    </footer>
  );
}
