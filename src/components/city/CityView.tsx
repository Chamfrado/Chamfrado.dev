import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { sections } from "../../data/sections";
import BuildingCard from "./BuildingCard";
import Motorcycle from "./Motorcycle";
import StreetHUD from "./StreetHUD";

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
        <div className="absolute inset-x-0 bottom-28 h-[2px] bg-gradient-to-r from-transparent via-fuchsia-400/40 to-transparent" />

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
            <div className="pointer-events-none absolute inset-x-0 top-10 hidden items-end justify-between opacity-35 md:flex">
              {[100, 150, 120, 180, 110, 210, 140].map((height, index) => (
                <div
                  key={index}
                  className="rounded-t-2xl border border-fuchsia-400/10 bg-white/5"
                  style={{
                    width: `${72 + (index % 3) * 22}px`,
                    height: `${height}px`,
                  }}
                />
              ))}
            </div>

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
      </div>
    </main>
  );
}
