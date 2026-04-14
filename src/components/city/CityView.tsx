import { sections } from "../../data/sections";

export default function CityView() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#07030E] text-white">
      <div className="relative min-h-screen bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.22),transparent_40%),linear-gradient(to_bottom,#0b0613,#090612_55%,#05030a)]">
        <div className="mx-auto flex min-h-screen max-w-7xl flex-col justify-between px-4 py-6 md:px-8">
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

          <section className="grid gap-4 py-8 md:grid-cols-2 xl:grid-cols-3">
            {sections.map((section) => (
              <div
                key={section.id}
                className="rounded-[1.75rem] border border-fuchsia-400/20 bg-black/25 p-5 backdrop-blur-xl"
              >
                <p className="text-[10px] uppercase tracking-[0.35em] text-fuchsia-300/75">
                  {section.storeName}
                </p>
                <h2 className="mt-3 text-xl font-semibold text-white">
                  {section.title}
                </h2>
                <p className="mt-2 text-sm leading-6 text-zinc-300">
                  {section.description}
                </p>
              </div>
            ))}
          </section>

          <footer className="pb-2 text-xs uppercase tracking-[0.3em] text-cyan-300/70">
            City prototype — phase 1
          </footer>
        </div>
      </div>
    </main>
  );
}
