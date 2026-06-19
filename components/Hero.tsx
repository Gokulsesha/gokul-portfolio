import Link from "next/link";

const focusAreas = [
  "Enterprise UX",
  "Design Systems",
  "AI Workflows",
  "IoT Products",
];

const highlights = [
  { value: "9+", label: "years" },
  { value: "12", label: "products shaped" },
  { value: "28%", label: "avg. uplift" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(17,17,17,0.04),transparent_30%)]" />

      <div className="relative mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-32">
        <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="mb-6 text-sm font-medium uppercase tracking-[0.32em] text-zinc-500">
              Associate Technical Lead · Product Designer
            </p>

            <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-zinc-950 sm:text-6xl lg:text-7xl">
              Designing thoughtful products for people and systems.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600 sm:text-xl">
              I create intuitive experiences for enterprise software, connected
              devices, and AI-assisted workflows that help teams move faster
              with confidence.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#work"
                className="inline-flex items-center justify-center rounded-full bg-zinc-950 px-6 py-3 text-sm font-medium text-white transition hover:bg-zinc-800"
              >
                View Work
              </Link>
              <Link
                href="#resume"
                className="inline-flex items-center justify-center rounded-full border border-zinc-300 px-6 py-3 text-sm font-medium text-zinc-900 transition hover:border-zinc-400 hover:bg-zinc-50"
              >
                Resume
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {focusAreas.map((area) => (
                <span
                  key={area}
                  className="rounded-full border border-zinc-200 bg-white px-3 py-1.5 text-sm text-zinc-600"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-zinc-100 to-zinc-50 blur-2xl" />
            <div className="relative overflow-hidden rounded-[32px] border border-zinc-200 bg-white shadow-[0_25px_80px_-40px_rgba(0,0,0,0.45)]">
              <div className="border-b border-zinc-200 bg-zinc-50 px-6 py-4">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </div>
              </div>

              <div className="space-y-8 p-8">
                <div>
                  <p className="text-sm text-zinc-500">Selected impact</p>
                  <div className="mt-3 grid grid-cols-3 gap-3">
                    {highlights.map((item) => (
                      <div key={item.label} className="rounded-2xl bg-zinc-50 p-3">
                        <div className="text-2xl font-semibold text-zinc-950">
                          {item.value}
                        </div>
                        <div className="text-xs text-zinc-500">{item.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl bg-zinc-950 p-6 text-white">
                  <p className="text-sm text-zinc-300">Currently focused on</p>
                  <p className="mt-2 text-2xl font-semibold">
                    Human-centered design for complex products
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
