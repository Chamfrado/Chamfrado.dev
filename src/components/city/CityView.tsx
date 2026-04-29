import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { sections } from "../../data/sections";
import Building from "./Building";
import CRTPanel from "./CRTPanel";
import MobileCityControls from "./MobileCityControls";
import Motorcycle from "./Motorcycle";
import StreetHUD from "./StreetHUD";

const CARD_WIDTH_MOBILE = 340;
const CARD_WIDTH_DESKTOP = 520;
const CARD_GAP = 160;

const VISUAL_OFFSET: Record<string, number> = {
  career: 0,
  bio: 0,
  projects: 0,
  links: 0,
  contact: 0,
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
    <div className="pointer-events-none absolute bottom-[calc(8rem+env(safe-area-inset-bottom))] left-0 right-0 z-10 overflow-hidden md:bottom-20">
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

function SpriteBackdrop({
  skylineOffset,
  roadOffset,
}: {
  skylineOffset: number;
  roadOffset: number;
}) {
  return (
    <>
      <motion.img
        src="/assets/skyline/skyline.png"
        alt=""
        className="pointer-events-none absolute left-0 top-10 z-[1] h-[30vh] min-h-[180px] w-[220%] max-w-none object-cover object-bottom opacity-35 md:top-8 md:h-[36vh]"
        animate={{ x: -skylineOffset }}
        transition={{ type: "spring", stiffness: 70, damping: 24 }}
        aria-hidden="true"
      />

      <motion.img
        src="/assets/skyline/mid-buildings.png"
        alt=""
        className="pointer-events-none absolute bottom-[calc(11rem+env(safe-area-inset-bottom))] left-0 z-[2] h-[20vh] min-h-[125px] w-[220%] max-w-none object-cover object-bottom opacity-35 md:bottom-36 md:h-[24vh]"
        animate={{ x: -skylineOffset * 1.35 }}
        transition={{ type: "spring", stiffness: 70, damping: 24 }}
        aria-hidden="true"
      />

      <motion.img
        src="/assets/road/road-base.png"
        alt=""
        className="pointer-events-none absolute bottom-[calc(5.75rem+env(safe-area-inset-bottom))] left-0 z-[3] h-[22vh] min-h-[150px] w-[240%] max-w-none object-cover object-center opacity-95 md:bottom-0 md:h-[27vh]"
        animate={{ x: -roadOffset }}
        transition={{ type: "spring", stiffness: 70, damping: 24 }}
        aria-hidden="true"
      />
    </>
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
  const roadOffset = trackOffset * 0.4;

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
        <SpriteBackdrop
          skylineOffset={skylineOffset}
          roadOffset={roadOffset}
        />

        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute inset-x-0 bottom-24 h-px bg-fuchsia-400/15" />
        <div className="absolute bottom-24 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-fuchsia-400 to-transparent animate-pulse" />
        <div className="absolute inset-x-0 bottom-28 h-[2px] bg-gradient-to-r from-transparent via-fuchsia-400/40 to-transparent" />

        <div className="relative mx-auto flex h-screen min-h-0 max-w-7xl flex-col justify-between px-4 pb-[calc(8rem+env(safe-area-inset-bottom))] pt-4 md:px-8 md:py-4">
          <header className="pt-2">
            <p className="text-[10px] uppercase tracking-[0.45em] text-fuchsia-300/75">
              chamfrado.dev
            </p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
              Chamfrado.dev
            </h1>
            <p className="mt-3 max-w-[22rem] text-sm leading-6 text-zinc-300 md:max-w-2xl md:text-base">
              A neon city portfolio for software development, interactive web
              work, and practical product experiments.
            </p>
          </header>

          <section className="relative min-h-0 flex-1 py-4 md:py-6">
            <div className="relative z-10 mt-2 overflow-x-hidden overflow-y-visible md:mt-4">
              <motion.div
                className="flex items-end"
                animate={{
                  x: `calc(50% - ${cardWidth / 2}px - ${trackOffset}px)`,
                }}
                transition={{ type: "spring", stiffness: 70, damping: 22 }}
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

          </section>

          <StreetHUD
            activeSection={activeSection}
            activeIndex={activeIndex}
            total={sections.length}
            onPrev={goPrev}
            onNext={goNext}
          />
        </div>

        <RoadLights />
        <Motorcycle activeIndex={activeIndex} />

        <MobileCityControls
          activeSection={activeSection}
          activeIndex={activeIndex}
          total={sections.length}
          onPrev={goPrev}
          onNext={goNext}
          onEnter={() => setSelectedSectionId(activeSection.id)}
        />

        <CRTPanel
          open={!!selectedSection}
          section={selectedSection}
          onClose={() => setSelectedSectionId(null)}
        />
      </div>
    </main>
  );
}
