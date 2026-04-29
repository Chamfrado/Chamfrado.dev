import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import type { SectionId, SectionItem } from "../../types/section";
import SectionContent from "./SectionContent";

type CRTPanelProps = {
  open: boolean;
  section: SectionItem | null;
  onClose: () => void;
};

const sidePanels: Record<SectionId, { title: string; body: string }[]> = {
  career: [
    {
      title: "Core stack",
      body: "React, TypeScript, Tailwind CSS, Java, Spring Boot, REST APIs, and SQL.",
    },
    {
      title: "Delivery angle",
      body: "Practical product work with clean UI behavior, clear component structure, and decisions visitors can inspect.",
    },
    {
      title: "Best fit",
      body: "Interactive sites, dashboards, internal tools, prototypes, and learning-focused products.",
    },
  ],
  bio: [
    {
      title: "Portfolio idea",
      body: "Chamfrado.dev presents the work as a place to explore instead of a static document.",
    },
    {
      title: "Visual language",
      body: "Neon city streets, CRT screens, game UI rhythms, and readable interaction patterns.",
    },
    {
      title: "Operating mode",
      body: "Build fast, keep the structure understandable, and make the interface carry the story.",
    },
  ],
  projects: [
    {
      title: "Featured builds",
      body: "Chamfrado.dev, PlantaHUB, and Shelfy show portfolio UI work, full-stack delivery, and desktop app development.",
    },
    {
      title: "Project proof",
      body: "Each card includes real status, stack, repository access, and live or download links when available.",
    },
    {
      title: "Project lens",
      body: "The section favors concrete outcomes over speculative entries, so visitors can inspect actual work.",
    },
  ],
  links: [
    {
      title: "Primary routes",
      body: "GitHub for source code, LinkedIn for professional context, and chamfrado.dev as the main base.",
    },
    {
      title: "Visitor goal",
      body: "Keep important destinations close without pulling people away from the city experience too early.",
    },
    {
      title: "Expansion",
      body: "Live apps, writing, videos, talks, and teaching resources can be added as the portfolio grows.",
    },
  ],
  contact: [
    {
      title: "Fastest channel",
      body: "Email at prog.lohran@gmail.com works best when the message includes the goal, rough deadline, and current state.",
    },
    {
      title: "WhatsApp",
      body: "+55 (35) 9 9202-5205 is available for direct project conversations and quick follow-up.",
    },
    {
      title: "Good requests",
      body: "Freelance builds, product prototypes, React UI work, backend help, and technical learning material.",
    },
  ],
};

export default function CRTPanel({ open, section, onClose }: CRTPanelProps) {
  return (
    <AnimatePresence>
      {open && section ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-stretch justify-center bg-black/75 p-0 backdrop-blur-md md:items-center md:p-6"
        >
          <motion.div
            initial={{ y: 28, opacity: 0, scale: 0.97 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 16, opacity: 0, scale: 0.98 }}
            transition={{ type: "spring", stiffness: 220, damping: 24 }}
            className="relative flex h-full w-full max-w-5xl flex-col overflow-hidden border border-fuchsia-400/30 bg-zinc-950 shadow-[0_0_40px_rgba(168,85,247,0.35)] md:h-auto md:max-h-[90vh] md:rounded-[2rem]"
          >
            <motion.div
              animate={{ opacity: [0.98, 1, 0.97, 1] }}
              transition={{ duration: 0.22, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 pointer-events-none"
            />
            <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_2px)] bg-[length:100%_4px] opacity-20" />
            <div className="absolute inset-0 pointer-events-none mix-blend-overlay bg-fuchsia-500/5" />
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_45%,rgba(0,0,0,0.32)_100%)]" />

            <div className="relative flex shrink-0 items-center justify-between gap-4 border-b border-fuchsia-400/20 bg-zinc-900/80 px-4 py-3 md:px-6 md:py-4">
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

            <div className="relative grid min-h-0 flex-1 gap-6 overflow-y-auto px-4 py-5 md:grid-cols-[1.15fr_0.85fr] md:px-6 md:py-6">
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
                  {sidePanels[section.id].map((item) => (
                    <div
                      key={item.title}
                      className="rounded-2xl border border-white/10 bg-black/25 p-4 text-sm text-zinc-200"
                    >
                      <p className="text-[10px] uppercase tracking-[0.25em] text-cyan-300/80">
                        {item.title}
                      </p>
                      <p className="mt-2 leading-6 text-zinc-300">
                        {item.body}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
