export default function App() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.22),transparent_40%),linear-gradient(to_bottom,#0b0613,#090612_55%,#05030a)] text-white">
      <section className="mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 py-16">
        <p className="text-xs uppercase tracking-[0.35em] text-fuchsia-300/80">
          Neon City Portfolio
        </p>

        <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
          Purple Night Drive
        </h1>

        <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-300 md:text-base">
          A mobile-first portfolio inspired by 2000s videogames, neon city
          streets, storefront navigation, and old TV screens.
        </p>

        <div className="mt-8">
          <button className="rounded-2xl border border-fuchsia-400/40 bg-white/5 px-5 py-3 text-sm font-medium text-white shadow-[0_0_22px_rgba(168,85,247,0.24)] backdrop-blur-md transition hover:bg-fuchsia-400/10">
            Start Building
          </button>
        </div>
      </section>
    </main>
  );
}
