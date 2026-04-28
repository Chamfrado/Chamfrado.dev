import { ArrowLeft, ArrowRight } from "lucide-react";
import type { SectionItem } from "../../types/section";

type MobileCityControlsProps = {
  activeSection: SectionItem;
  activeIndex: number;
  total: number;
  onPrev: () => void;
  onNext: () => void;
  onEnter: () => void;
};

export default function MobileCityControls({
  activeSection,
  activeIndex,
  total,
  onPrev,
  onNext,
  onEnter,
}: MobileCityControlsProps) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 px-4 pb-[calc(0.75rem+env(safe-area-inset-bottom))] pt-3 md:hidden">
      <div className="mx-auto grid max-w-md grid-cols-[3.25rem_1fr_3.25rem] items-center gap-3 rounded-[1.5rem] border border-fuchsia-400/25 bg-black/70 p-3 shadow-[0_0_28px_rgba(168,85,247,0.25)] backdrop-blur-xl">
        <button
          type="button"
          onClick={onPrev}
          disabled={activeIndex === 0}
          className="flex h-12 w-12 items-center justify-center rounded-2xl border border-fuchsia-400/20 bg-white/5 text-white transition hover:border-fuchsia-300/40 hover:bg-fuchsia-500/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-300 disabled:cursor-not-allowed disabled:opacity-35"
          aria-label="Previous stop"
        >
          <ArrowLeft className="h-5 w-5" />
        </button>

        <div className="min-w-0 text-center">
          <div className="flex min-w-0 items-center justify-center gap-2">
            <p className="truncate text-[10px] uppercase tracking-[0.24em] text-cyan-300/80">
              {activeSection.title}
            </p>
            <span className="shrink-0 rounded-full border border-fuchsia-400/20 bg-fuchsia-500/10 px-2 py-0.5 text-[10px] uppercase tracking-[0.18em] text-fuchsia-200">
              {String(activeIndex + 1).padStart(2, "0")} /{" "}
              {String(total).padStart(2, "0")}
            </span>
          </div>

          <button
            type="button"
            onClick={onEnter}
            className="mt-2 w-full rounded-2xl border border-cyan-300/30 bg-cyan-300/10 px-4 py-3 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-100 shadow-[0_0_20px_rgba(34,211,238,0.18)] transition hover:border-cyan-200/50 hover:bg-cyan-300/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-300"
          >
            Enter
          </button>
        </div>

        <button
          type="button"
          onClick={onNext}
          disabled={activeIndex === total - 1}
          className="flex h-12 w-12 items-center justify-center rounded-2xl border border-fuchsia-400/20 bg-white/5 text-white transition hover:border-fuchsia-300/40 hover:bg-fuchsia-500/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-300 disabled:cursor-not-allowed disabled:opacity-35"
          aria-label="Next stop"
        >
          <ArrowRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
