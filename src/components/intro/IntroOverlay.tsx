import { motion } from "framer-motion";

type IntroOverlayProps = {
  onFinish: () => void;
};

export default function IntroOverlay({ onFinish }: IntroOverlayProps) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.55, ease: "easeInOut" }}
      className="fixed inset-0 z-[80] overflow-hidden bg-[#07030e]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(168,85,247,0.22),transparent_45%),linear-gradient(to_bottom,#05020a,#090414_55%,#020106)]" />

      <video
        className="relative z-10 h-full w-full object-cover"
        src="/assets/intro/intro.mp4"
        poster="/assets/intro/intro-poster.png"
        autoPlay
        muted
        playsInline
        onEnded={onFinish}
      />

      <div className="pointer-events-none absolute inset-0 z-20 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_2px)] bg-[length:100%_4px] opacity-20" />
      <div className="pointer-events-none absolute inset-0 z-20 bg-[radial-gradient(circle_at_center,transparent_45%,rgba(0,0,0,0.4)_100%)]" />

      <button
        type="button"
        onClick={onFinish}
        className="absolute bottom-[calc(1rem+env(safe-area-inset-bottom))] right-4 z-30 rounded-2xl border border-cyan-300/30 bg-black/60 px-4 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-100 shadow-[0_0_22px_rgba(34,211,238,0.18)] backdrop-blur-xl transition hover:border-cyan-200/50 hover:bg-cyan-300/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-300 md:bottom-6 md:right-6"
        aria-label="Skip intro"
      >
        Skip intro
      </button>
    </motion.div>
  );
}
