import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "TRIO Vending Platform",
    category: "Enterprise · IoT",
    description:
      "Enterprise IoT vending solution deployed in hospitality environments, designed to simplify operations, improve visibility, and support teams at scale.",
    status: "Password Protected Case Study",
    accent: "from-zinc-950 via-zinc-800 to-zinc-600",
    imageTone: "bg-gradient-to-br from-zinc-900 to-zinc-700",
    href: "#",
  },
  {
    title: "TRIO Micromarket Kiosk",
    category: "Retail · Accessibility",
    description:
      "Accessibility-first self-service retail experience crafted for intuitive navigation, inclusive interaction, and confident purchasing.",
    status: "Password Protected Case Study",
    accent: "from-sky-500 via-cyan-400 to-emerald-300",
    imageTone: "bg-gradient-to-br from-sky-100 to-emerald-50",
    href: "#",
  },
  {
    title: "Cake.ly Mobile App",
    category: "Mobile · Product Design",
    description:
      "Mobile ordering platform for bakery businesses, focused on discovery, personalization, and a smooth customer journey.",
    status: "Case Study",
    accent: "from-rose-500 via-pink-400 to-orange-300",
    imageTone: "bg-gradient-to-br from-rose-50 to-orange-50",
    href: "/projects/cakely",
    imageSrc: "/projects/cakely/Cake.ly_hero.png",
  },
  {
    title: "Food.ly Platform",
    category: "Web · Social Impact",
    description:
      "Food donation and distribution platform designed to improve coordination, visibility, and responsiveness across the network.",
    status: "Case Study",
    accent: "from-emerald-500 via-lime-400 to-yellow-300",
    imageTone: "bg-gradient-to-br from-emerald-50 to-lime-50",
    href: "#",
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
            <Link
              key={project.title}
              href={project.href}
              className={`group block cursor-pointer ${
                index === 0 || index === 1 ? "lg:col-span-1" : ""
              }`}
            >
              <article className="relative overflow-hidden rounded-[28px] border border-zinc-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-zinc-300 hover:shadow-[0_24px_60px_-40px_rgba(0,0,0,0.5)]">
                <div className={`relative h-72 overflow-hidden ${project.imageTone}`}>
                  {project.imageSrc ? (
                    <div className="absolute inset-0 bg-white">
                      <Image
                        src={project.imageSrc}
                        alt={`${project.title} preview`}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-contain transition duration-500 group-hover:scale-[1.02]"
                        priority={project.title === "Cake.ly Mobile App"}
                      />
                    </div>
                  ) : (
                    <div className={`absolute inset-x-8 top-8 h-44 rounded-[22px] bg-gradient-to-br ${project.accent} opacity-90`} />
                  )}
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
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
