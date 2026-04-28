import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { sections } from "../../data/sections";
import Building from "./Building";
import CRTPanel from "./CRTPanel";
import Motorcycle from "./Motorcycle";
import StreetHUD from "./StreetHUD";

const CARD_WIDTH_MOBILE = 320;
const CARD_WIDTH_DESKTOP = 460;
const CARD_GAP = 110;

const VISUAL_OFFSET: Record<string, number> = {
  career: 0,
  bio: 0,
  projects: 0,
  links: -20, // ðŸ‘ˆ THIS is your current issue
  contact: -10,
};

function getCardWidth() {
  if (typeof window === "undefined") return CARD_WIDTH_DESKTOP;
  return window.innerWidth < 768 ? CARD_WIDTH_MOBILE : CARD_WIDTH_DESKTOP;
}

function Stars() {
  const dots = Array.from({ length: 60 }, (_, index) => ({
    id: index,
    top: `${(index * 37) % 100}%`,
    left: `${(index * 17) % 100}%`,
    opacity: 0.25 + ((index * 13) % 60) / 100,
  }));

  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      {dots.map((dot) => (
        <div
          key={dot.id}
          className="absolute h-[2px] w-[2px] rounded-full bg-white"
          style={{ top: dot.top, left: dot.left, opacity: dot.opacity }}
        />
      ))}
    </div>
  );
}

function RoadLights() {
  return (
    <div className="pointer-events-none absolute bottom-20 left-0 right-0 z-10 overflow-hidden">
      {[0, 1, 2, 3, 4, 5].map((index) => (
        <motion.div
          key={index}
          initial={{ x: "-20%" }}
          animate={{ x: "120%" }}
          transition={{
            duration: 2.4 + index * 0.35,
            repeat: Infinity,
            ease: "linear",
            delay: index * 0.28,
          }}
          className="mb-2 h-[2px] w-24 bg-gradient-to-r from-transparent via-cyan-400/80 to-transparent"
        />
      ))}
    </div>
  );
}

function Skyline({ offset }: { offset: number }) {
  const buildings = [100, 150, 120, 180, 110, 210, 140];

  return (
    <motion.div
      className="pointer-events-none absolute inset-x-0 top-20 hidden items-end justify-between opacity-15 md:flex"
      animate={{ x: -offset }}
      transition={{ type: "spring", stiffness: 70, damping: 24 }}
    >
      {buildings.map((height, index) => (
        <div
          key={index}
          className="relative overflow-hidden rounded-t-2xl border border-fuchsia-400/10 bg-gradient-to-t from-black via-zinc-900 to-transparent"
          style={{ width: `${72 + (index % 3) * 22}px`, height: `${height}px` }}
        >
          <div className="absolute inset-0 opacity-20">
            <div className="grid grid-cols-4 gap-[2px] p-1">
              {Array.from({ length: 20 }, (_, windowIndex) => (
                <div
                  key={windowIndex}
                  className="h-[4px] w-full bg-fuchsia-300/40"
                />
              ))}
            </div>
          </div>
        </div>
      ))}
    </motion.div>
  );
}

export default function CityView() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(getCardWidth());
  const [selectedSectionId, setSelectedSectionId] = useState<string | null>(
    null,
  );

  useEffect(() => {
    const onResize = () => setCardWidth(getCardWidth());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const activeSection = useMemo(() => sections[activeIndex], [activeIndex]);

  const selectedSection = useMemo(
    () => sections.find((section) => section.id === selectedSectionId) ?? null,
    [selectedSectionId],
  );

  const step = cardWidth + CARD_GAP;
  const visualOffset = VISUAL_OFFSET[sections[activeIndex].id] ?? 0;
  const trackOffset = activeIndex * step + visualOffset;
  const skyOffset = trackOffset * 0.03;
  const skylineOffset = trackOffset * 0.12;

  const goPrev = () => {
    setActiveIndex((prev) => (prev === 0 ? 0 : prev - 1));
  };

  const goNext = () => {
    setActiveIndex((prev) =>
      prev === sections.length - 1 ? sections.length - 1 : prev + 1,
    );
  };

  return (
    <main className="h-screen overflow-hidden bg-[#07030E] text-white">
      <div className="relative h-screen overflow-hidden bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.22),transparent_40%),linear-gradient(to_bottom,#0b0613,#090612_55%,#05030a)]">
        <motion.div
          className="absolute inset-0"
          animate={{ x: -skyOffset }}
          transition={{ type: "spring", stiffness: 70, damping: 24 }}
        >
          <Stars />
        </motion.div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(168,85,247,0.25),transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_10%,rgba(34,211,238,0.15),transparent_40%)]" />

        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute inset-x-0 bottom-24 h-px bg-fuchsia-400/15" />
        <div className="absolute bottom-24 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-fuchsia-400 to-transparent animate-pulse" />
        <div className="absolute inset-x-0 bottom-28 h-[2px] bg-gradient-to-r from-transparent via-fuchsia-400/40 to-transparent" />

        <div className="relative mx-auto flex h-screen max-w-7xl flex-col justify-between px-4 pb-[calc(8rem+env(safe-area-inset-bottom))] pt-4 md:px-8 md:py-4">
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

          <section className="relative flex-1 py-4 md:py-6">
            <Skyline offset={skylineOffset} />

            <div className="relative z-10 mt-2 overflow-x-hidden overflow-y-visible md:mt-4">
              <motion.div
                className="flex items-end"
                animate={{
                  x: `calc(50% - ${cardWidth / 2}px - ${trackOffset * 0.9}px + 10px)`,
                }}
                transition={{ type: "spring", stiffness: 70, damping: 22 }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.04}
                onDragEnd={(_, info) => {
                  if (info.offset.x < -50) goNext();
                  if (info.offset.x > 50) goPrev();
                }}
                style={{ gap: "80px" }}
              >
                {sections.map((section, index) => (
                  <div
                    key={section.id}
                    className="flex items-end justify-center"
                    style={{
                      width: `${cardWidth}px`,
                      flex: `0 0 ${cardWidth}px`,
                    }}
                  >
                    <Building
                      section={section}
                      isActive={index === activeIndex}
                      onEnter={() => setSelectedSectionId(section.id)}
                    />
                  </div>
                ))}
              </motion.div>
            </div>

            <RoadLights />
            <Motorcycle activeIndex={activeIndex} />
          </section>

          <StreetHUD
            activeSection={activeSection}
            activeIndex={activeIndex}
            total={sections.length}
            onPrev={goPrev}
            onNext={goNext}
          />
        </div>

        <div className="fixed inset-x-0 bottom-0 z-40 px-4 pb-[calc(0.75rem+env(safe-area-inset-bottom))] pt-3 md:hidden">
          <div className="mx-auto grid max-w-md grid-cols-[3.25rem_1fr_3.25rem] items-center gap-3 rounded-[1.5rem] border border-fuchsia-400/25 bg-black/70 p-3 shadow-[0_0_28px_rgba(168,85,247,0.25)] backdrop-blur-xl">
            <button
              type="button"
              onClick={goPrev}
              disabled={activeIndex === 0}
              className="flex h-12 w-12 items-center justify-center rounded-2xl border border-fuchsia-400/20 bg-white/5 text-white transition hover:border-fuchsia-300/40 hover:bg-fuchsia-500/10 disabled:cursor-not-allowed disabled:opacity-35"
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
                  {String(sections.length).padStart(2, "0")}
                </span>
              </div>

              <button
                type="button"
                onClick={() => setSelectedSectionId(activeSection.id)}
                className="mt-2 w-full rounded-2xl border border-cyan-300/30 bg-cyan-300/10 px-4 py-3 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-100 shadow-[0_0_20px_rgba(34,211,238,0.18)] transition hover:border-cyan-200/50 hover:bg-cyan-300/15"
              >
                Enter
              </button>
            </div>

            <button
              type="button"
              onClick={goNext}
              disabled={activeIndex === sections.length - 1}
              className="flex h-12 w-12 items-center justify-center rounded-2xl border border-fuchsia-400/20 bg-white/5 text-white transition hover:border-fuchsia-300/40 hover:bg-fuchsia-500/10 disabled:cursor-not-allowed disabled:opacity-35"
              aria-label="Next stop"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <CRTPanel
          open={!!selectedSection}
          section={selectedSection}
          onClose={() => setSelectedSectionId(null)}
        />
      </div>
    </main>
  );
}
