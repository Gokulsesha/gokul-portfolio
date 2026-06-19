const items = [
  {
    title: "Google UX Design Professional Certificate",
    tag: "Certification",
  },
  {
    title: "Accessibility & Inclusive Design",
    tag: "Expertise",
  },
  {
    title: "Enterprise Product Design",
    tag: "Expertise",
  },
  {
    title: "Design Systems",
    tag: "Expertise",
  },
  {
    title: "AI-Assisted Design Workflows",
    tag: "Expertise",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="px-6 py-20 sm:px-8 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
            Certifications & Expertise
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
            Areas of strength
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.title}
              className="group rounded-3xl border border-zinc-200 bg-white p-6 transition duration-300 hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-[0_18px_50px_-36px_rgba(0,0,0,0.5)]"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="text-xs uppercase tracking-[0.24em] text-zinc-500">
                  {item.tag}
                </span>
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-zinc-100 text-sm text-zinc-700 transition group-hover:bg-zinc-950 group-hover:text-white">
                  ↗
                </span>
              </div>
              <h3 className="mt-6 text-xl font-semibold leading-7 text-zinc-950">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
