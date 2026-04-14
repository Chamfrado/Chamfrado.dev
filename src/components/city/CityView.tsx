import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { sections } from "../../data/sections";
import BuildingCard from "./BuildingCard";

const CARD_WIDTH_MOBILE = 320;
const CARD_WIDTH_DESKTOP = 420;
const CARD_GAP = 20;

function getCardWidth() {
  if (typeof window === "undefined") return CARD_WIDTH_DESKTOP;
  return window.innerWidth < 768 ? CARD_WIDTH_MOBILE : CARD_WIDTH_DESKTOP;
}

export default function CityView() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(getCardWidth());

  useEffect(() => {
    const onResize = () => setCardWidth(getCardWidth());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const activeSection = sections[activeIndex];

  const step = cardWidth + CARD_GAP;
  const trackOffset = activeIndex * step;

  const goPrev = () => {
    setActiveIndex((prev) => (prev === 0 ? 0 : prev - 1));
  };

  const goNext = () => {
    setActiveIndex((prev) =>
      prev === sections.length - 1 ? sections.length - 1 : prev + 1,
    );
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#07030E] text-white">
      <div className="relative min-h-screen bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.22),transparent_40%),linear-gradient(to_bottom,#0b0613,#090612_55%,#05030a)]">
        <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:32px_32px]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute inset-x-0 bottom-24 h-px bg-fuchsia-400/15" />

        <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-between px-4 py-6 md:px-8">
          <header className="pt-2">
            <p className="text-[10px] uppercase tracking-[0.45em] text-fuchsia-300/75">
              chamfrado.dev
            </p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
              Purple Night Drive
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-300 md:text-base">
              A mobile-first portfolio inspired by neon cities, retro games, and
              old TV screens.
            </p>
          </header>

          <section className="relative flex-1 py-8 md:py-10">
            <div className="relative z-10 mt-12 overflow-hidden md:mt-20">
              <motion.div
                className="flex items-stretch"
                animate={{
                  x: `calc(50% - ${cardWidth / 2}px - ${trackOffset}px)`,
                }}
                transition={{ type: "spring", stiffness: 90, damping: 20 }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.04}
                onDragEnd={(_, info) => {
                  if (info.offset.x < -50) goNext();
                  if (info.offset.x > 50) goPrev();
                }}
                style={{ gap: `${CARD_GAP}px` }}
              >
                {sections.map((section, index) => (
                  <div
                    key={section.id}
                    style={{
                      width: `${cardWidth}px`,
                      flex: `0 0 ${cardWidth}px`,
                    }}
                  >
                    <BuildingCard
                      section={section}
                      isActive={index === activeIndex}
                      onEnter={() => {}}
                    />
                  </div>
                ))}
              </motion.div>
            </div>

            <div className="pointer-events-none absolute bottom-8 left-1/2 z-20 -translate-x-1/2">
              <div className="relative">
                <div className="absolute left-1/2 top-full h-8 w-24 -translate-x-1/2 rounded-full bg-fuchsia-500/40 blur-2xl" />
                <div className="flex items-end gap-1.5">
                  <div className="h-6 w-6 rounded-full border border-fuchsia-300/30 bg-zinc-900 shadow-[0_0_18px_rgba(168,85,247,0.25)]" />
                  <div className="mb-2 h-8 w-20 rounded-[1.2rem] border border-fuchsia-300/30 bg-gradient-to-r from-violet-700 to-fuchsia-500 shadow-[0_0_24px_rgba(168,85,247,0.4)]" />
                  <div className="h-6 w-6 rounded-full border border-fuchsia-300/30 bg-zinc-900 shadow-[0_0_18px_rgba(168,85,247,0.25)]" />
                </div>
              </div>
            </div>
          </section>

          <footer className="relative z-20 flex flex-col gap-4 pb-2 md:flex-row md:items-end md:justify-between">
            <div className="rounded-[1.75rem] border border-fuchsia-400/20 bg-black/25 p-4 backdrop-blur-xl md:max-w-md">
              <p className="text-[10px] uppercase tracking-[0.3em] text-cyan-300/70">
                Current stop
              </p>
              <h2 className="mt-2 text-xl font-semibold text-white">
                {activeSection.title}
              </h2>
              <p className="mt-2 text-sm leading-6 text-zinc-300">
                {activeSection.description}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={goPrev}
                className="rounded-2xl border border-fuchsia-400/20 bg-black/25 px-4 py-3 text-sm font-medium text-white backdrop-blur-xl transition hover:border-fuchsia-300/40 hover:bg-fuchsia-500/10"
              >
                <span className="inline-flex items-center gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  Prev
                </span>
              </button>

              <button
                type="button"
                onClick={goNext}
                className="rounded-2xl border border-fuchsia-400/20 bg-black/25 px-4 py-3 text-sm font-medium text-white backdrop-blur-xl transition hover:border-fuchsia-300/40 hover:bg-fuchsia-500/10"
              >
                <span className="inline-flex items-center gap-2">
                  Next
                  <ArrowRight className="h-4 w-4" />
                </span>
              </button>
            </div>
          </footer>
        </div>
      </div>
    </main>
  );
}
