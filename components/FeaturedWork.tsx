const projects = [
  {
    title: "Enterprise IoT Retail Platform",
    category: "Platform · Enterprise",
    description:
      "Designing a secure operational dashboard for retail teams managing devices, workflows, and analytics at scale.",
    status: "Password Protected",
    accent: "from-zinc-950 via-zinc-800 to-zinc-600",
    imageTone: "bg-gradient-to-br from-zinc-900 to-zinc-700",
  },
  {
    title: "Accessibility-First Retail Experience",
    category: "UX · Accessibility",
    description:
      "Reimagining in-store digital experiences for speed, trust, and inclusive interaction across touchpoints.",
    status: "Password Protected",
    accent: "from-sky-500 via-cyan-400 to-emerald-300",
    imageTone: "bg-gradient-to-br from-sky-100 to-emerald-50",
  },
  {
    title: "Cake.ly Mobile App",
    category: "Mobile · Product Design",
    description:
      "A premium ordering experience focused on discovery, personalization, and seamless checkout journeys.",
    status: "Case Study",
    accent: "from-rose-500 via-pink-400 to-orange-300",
    imageTone: "bg-gradient-to-br from-rose-50 to-orange-50",
  },
  {
    title: "Food.ly Platform",
    category: "Web · SaaS",
    description:
      "Building a scalable food operations platform with thoughtful dashboards, collaboration tools, and insights.",
    status: "Case Study",
    accent: "from-emerald-500 via-lime-400 to-yellow-300",
    imageTone: "bg-gradient-to-br from-emerald-50 to-lime-50",
  },
];

export default function FeaturedWork() {
  return (
    <section id="work" className="px-6 py-20 sm:px-8 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
              Featured Work
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
              Selected product experiences
            </h2>
          </div>
          <a
            href="#contact"
            className="hidden text-sm font-medium text-zinc-600 transition hover:text-zinc-950 sm:inline-flex"
          >
            See all projects →
          </a>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className={`group relative overflow-hidden rounded-[28px] border border-zinc-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-zinc-300 hover:shadow-[0_24px_60px_-40px_rgba(0,0,0,0.5)] ${
                index === 0 || index === 1 ? "lg:col-span-1" : ""
              }`}
            >
              <div className={`relative h-72 overflow-hidden ${project.imageTone}`}>
                <div className={`absolute inset-x-8 top-8 h-44 rounded-[22px] bg-gradient-to-br ${project.accent} opacity-90`} />
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white/80 to-transparent" />
                <div className="absolute right-6 top-6 rounded-full bg-white/80 px-3 py-1 text-xs font-medium text-zinc-700 backdrop-blur">
                  {project.status}
                </div>
              </div>

              <div className="space-y-3 p-7">
                <p className="text-sm text-zinc-500">{project.category}</p>
                <h3 className="text-2xl font-semibold tracking-tight text-zinc-950">
                  {project.title}
                </h3>
                <p className="text-base leading-7 text-zinc-600">
                  {project.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
