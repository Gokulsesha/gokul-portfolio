const experiences = [
  {
    company: "Applied Materials",
    role: "Associate Technical Lead",
    period: "2025 – Present",
  },
  {
    company: "Salem Technologies",
    role: "Senior UI/UX Designer",
    period: "2021 – 2025",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="px-6 py-20 sm:px-8 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
            Experience
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
            Career highlights
          </h2>
        </div>

        <div className="rounded-[28px] border border-zinc-200 bg-white">
          {experiences.map((item, index) => (
            <div key={item.company}>
              <div className="grid gap-6 px-8 py-8 sm:grid-cols-[180px_1fr] sm:px-10 sm:py-10">
                <div className="text-sm text-zinc-500">{item.period}</div>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-zinc-950">
                      {item.company}
                    </h3>
                    <p className="mt-1 text-base text-zinc-600">{item.role}</p>
                  </div>
                  {index === 0 && (
                    <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-600">
                      Current
                    </span>
                  )}
                </div>
              </div>
              {index < experiences.length - 1 && (
                <div className="h-px w-full bg-zinc-200" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
