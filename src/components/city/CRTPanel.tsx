import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import type { SectionItem } from "../../types/section";
import SectionContent from "./SectionContent";

type CRTPanelProps = {
  open: boolean;
  section: SectionItem | null;
  onClose: () => void;
};

export default function CRTPanel({ open, section, onClose }: CRTPanelProps) {
  return (
    <AnimatePresence>
      {open && section ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-end justify-center bg-black/75 p-3 backdrop-blur-md md:items-center md:p-6"
        >
          <motion.div
            initial={{ y: 28, opacity: 0, scale: 0.97 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 16, opacity: 0, scale: 0.98 }}
            transition={{ type: "spring", stiffness: 220, damping: 24 }}
            className="relative w-full max-w-5xl overflow-hidden rounded-[2rem] border border-fuchsia-400/30 bg-zinc-950 shadow-[0_0_40px_rgba(168,85,247,0.35)]"
          >
            <motion.div
              animate={{ opacity: [0.98, 1, 0.97, 1] }}
              transition={{ duration: 0.22, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 pointer-events-none"
            />
            <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_2px)] bg-[length:100%_4px] opacity-20" />
            <div className="absolute inset-0 pointer-events-none mix-blend-overlay bg-fuchsia-500/5" />
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_45%,rgba(0,0,0,0.32)_100%)]" />

            <div className="relative flex items-center justify-between gap-4 border-b border-fuchsia-400/20 bg-zinc-900/80 px-4 py-3 md:px-6 md:py-4">
              <div>
                <p className="text-[10px] uppercase tracking-[0.35em] text-fuchsia-300/75">
                  Old TV Output
                </p>
                <h2 className="mt-1 text-xl font-semibold text-white md:text-3xl">
                  {section.title}
                </h2>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="rounded-xl border border-white/10 bg-white/5 p-2 text-zinc-300 transition hover:bg-white/10 hover:text-white"
                aria-label="Close section"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="relative grid gap-6 px-4 py-5 md:grid-cols-[1.15fr_0.85fr] md:px-6 md:py-6">
              <div className="rounded-[1.5rem] border border-fuchsia-400/20 bg-black/40 p-4 shadow-inner shadow-fuchsia-500/10 md:p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-cyan-300/80">
                  Broadcast
                </p>

                <h3 className="mt-3 text-2xl font-semibold text-white md:text-4xl">
                  {section.subtitle}
                </h3>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-300 md:text-base">
                  {section.description}
                </p>

                <div className="mt-6">
                  <SectionContent section={section} />
                </div>
              </div>

              <div className="rounded-[1.5rem] border border-cyan-400/20 bg-gradient-to-b from-fuchsia-500/10 to-cyan-400/5 p-4 md:p-5">
                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/25 p-4 text-zinc-200">
                  <section.icon className="h-5 w-5 text-fuchsia-300" />
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.25em] text-cyan-300/80">
                      Store
                    </p>
                    <p className="mt-1 text-sm font-medium text-white">
                      {section.storeName}
                    </p>
                  </div>
                </div>

                <div className="mt-4 space-y-3">
                  <div className="rounded-2xl border border-white/10 bg-black/25 p-4 text-sm text-zinc-200">
                    Use this right column for quick links, badges, mini stats,
                    or featured actions.
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-black/25 p-4 text-sm text-zinc-200">
                    On mobile this panel stacks under the main content, so it
                    still feels like part of the TV UI.
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-black/25 p-4 text-sm text-zinc-200">
                    Later, each section can have its own custom right-side
                    widgets instead of generic blocks.
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
