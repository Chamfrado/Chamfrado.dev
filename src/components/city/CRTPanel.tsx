import {
  AnimatePresence,
  motion,
  useReducedMotion,
  type Variants,
} from "framer-motion";
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
  const shouldReduceMotion = useReducedMotion();

  const panelVariants: Variants = shouldReduceMotion
    ? {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { duration: 0.18, ease: "easeOut" },
        },
        closed: {
          opacity: 0,
          transition: { duration: 0.18, ease: "easeOut" },
        },
      }
    : {
        hidden: { opacity: 0.85, scaleX: 0.86, scaleY: 0.015 },
        visible: {
          opacity: 1,
          scaleX: 1,
          scaleY: 1,
          transition: {
            duration: 0.55,
            ease: [0.16, 1, 0.3, 1],
            opacity: { duration: 0.18 },
          },
        },
        closed: {
          opacity: 0.92,
          scaleX: 0.92,
          scaleY: 0.015,
          transition: {
            duration: 0.45,
            ease: [0.7, 0, 0.84, 0],
            opacity: { duration: 0.22 },
          },
        },
      };

  const contentVariants: Variants = shouldReduceMotion
    ? {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { duration: 0.16, ease: "easeOut" },
        },
        closed: {
          opacity: 0,
          transition: { duration: 0.16, ease: "easeOut" },
        },
      }
    : {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { delay: 0.24, duration: 0.22, ease: "easeOut" },
        },
        closed: {
          opacity: 0,
          transition: { duration: 0.08, ease: "easeOut" },
        },
      };

  const beamVariants: Variants = shouldReduceMotion
    ? {
        hidden: { opacity: 0 },
        visible: { opacity: 0 },
        closed: { opacity: 0 },
      }
    : {
        hidden: { opacity: 1, scaleX: 0.72 },
        visible: {
          opacity: [1, 0.9, 0],
          scaleX: [0.72, 1.08, 1.18],
          transition: {
            duration: 0.45,
            ease: "easeOut",
            times: [0, 0.38, 1],
          },
        },
        closed: {
          opacity: [0, 1, 0.2],
          scaleX: [1.1, 0.86, 0.55],
          transition: {
            duration: 0.35,
            ease: "easeOut",
            times: [0, 0.35, 1],
          },
        },
      };

  return (
    <AnimatePresence>
      {open && section ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18, ease: "easeOut" }}
          className="fixed inset-0 z-50 flex items-stretch justify-center bg-black/75 p-0 backdrop-blur-md md:items-center md:p-6"
        >
          <motion.div
            variants={panelVariants}
            initial="hidden"
            animate="visible"
            exit="closed"
            style={{ transformOrigin: "50% 50%" }}
            className="relative flex h-full w-full max-w-5xl flex-col overflow-hidden border border-fuchsia-400/30 bg-zinc-950 shadow-[0_0_40px_rgba(168,85,247,0.35)] md:h-auto md:max-h-[90vh] md:rounded-[2rem]"
          >
            <motion.div
              variants={beamVariants}
              initial="hidden"
              animate="visible"
              exit="closed"
              className="pointer-events-none absolute left-1/2 top-1/2 z-30 h-[3px] w-[92%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-100 shadow-[0_0_10px_rgba(255,255,255,0.95),0_0_28px_rgba(34,211,238,0.85),0_0_64px_rgba(217,70,239,0.55)]"
            />
            {!shouldReduceMotion ? (
              <motion.div
                animate={{ opacity: [0.1, 0.2, 0.08, 0.18] }}
                transition={{
                  duration: 0.22,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="pointer-events-none absolute inset-0 z-20 bg-white/5 mix-blend-overlay"
              />
            ) : null}
            <motion.div
              initial={{ opacity: shouldReduceMotion ? 0.14 : 0.6 }}
              animate={{ opacity: shouldReduceMotion ? 0.14 : 0.2 }}
              exit={{ opacity: shouldReduceMotion ? 0.14 : 0.5 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.32 }}
              className="pointer-events-none absolute inset-0 z-20 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_2px)] bg-[length:100%_4px]"
            />
            <div className="pointer-events-none absolute inset-0 z-20 bg-fuchsia-500/5 mix-blend-overlay" />
            <div className="pointer-events-none absolute inset-0 z-20 bg-[radial-gradient(circle_at_center,transparent_45%,rgba(0,0,0,0.32)_100%)]" />

            <motion.div
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              exit="closed"
              className="relative z-10 flex min-h-0 flex-1 flex-col"
            >
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
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
