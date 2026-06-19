"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const stats = [
  { label: "Role", value: "Product Designer" },
  { label: "Timeline", value: "6 months" },
  { label: "Platform", value: "Mobile App" },
  { label: "Outcome", value: "+24% orders" },
];

const overviewImages = [
  "/projects/cakely/01_Project Overview.png",
  "/projects/cakely/02_Project Overview.png",
  "/projects/cakely/03_Project Overview.png",
];

const researchPrimary = "/projects/cakely/04_User Research summary.png";
const journeyMap = "/projects/cakely/08_User Journey map.png";
const personas = [
  "/projects/cakely/06_Persona1.png",
  "/projects/cakely/07_Persona2.png",
];
const wireframes = [
  "/projects/cakely/09_Paper wireframe.png",
  "/projects/cakely/10_Digital wireframe.png",
  "/projects/cakely/11_Digital wireframe.png",
  "/projects/cakely/12_Digital wireframe.png",
];
const usabilityImage = "/projects/cakely/14_usablity study.png";
const finalImages = [
  "/projects/cakely/15_Visual_mockups.png",
  "/projects/cakely/16_Visual_mockups.png",
  "/projects/cakely/17_Visual mockups.png",
];
const accessibilityImage = "/projects/cakely/19_Accessibility_Concideration.png";
const resultsImages = [
  "/projects/cakely/20_Takeaways.png",
  "/projects/cakely/21_Next steps.png",
];

const navItems = [
  { id: "overview", label: "Overview" },
  { id: "research", label: "Research" },
  { id: "wireframes", label: "Wireframes" },
  { id: "testing", label: "Testing" },
  { id: "final-ui", label: "Final UI" },
  { id: "accessibility", label: "Accessibility" },
  { id: "results", label: "Results" },
];

function Artifact({
  src,
  alt,
  onClick,
}: {
  src: string;
  alt: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group block w-full cursor-zoom-in text-left transition duration-300 hover:opacity-95"
    >
      <div className="overflow-hidden rounded-[30px] border border-zinc-200 bg-white shadow-[0_26px_80px_-52px_rgba(0,0,0,0.62)]">
        <Image
          src={src}
          width={3200}
          height={1800}
          className="w-full h-auto"
          alt={alt}
        />
      </div>
    </button>
  );
}

function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mb-8 max-w-3xl">
      <p className="text-xs uppercase tracking-[0.36em] text-zinc-500">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
        {title}
      </h2>
      <p className="mt-3 text-base leading-7 text-zinc-600">{description}</p>
    </div>
  );
}

export default function CakeLyCaseStudyPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState("overview");

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedImage(null);
      }
    };

    const handleScroll = () => {
      const offset = window.scrollY + 220;
      let current = "overview";

      for (const item of navItems) {
        const section = document.getElementById(item.id);
        if (section && section.offsetTop <= offset) {
          current = item.id;
        }
      }

      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className="min-h-screen bg-[#F5F5F2] text-zinc-950">
      <section className="px-6 pb-14 pt-20 sm:px-8 lg:px-10 lg:pb-24 lg:pt-28">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm uppercase tracking-[0.32em] text-zinc-500">
            Case Study
          </p>
          <h1 className="mt-5 max-w-4xl text-5xl font-semibold tracking-tight text-zinc-950 sm:text-6xl lg:text-7xl">
            Cake.ly
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-600 sm:text-xl">
            Designing a mobile ordering experience that helps customers discover,
            personalize, and complete bakery purchases with confidence.
          </p>

          <div className="mt-12 rounded-[32px] border border-zinc-200 bg-white p-6 shadow-[0_32px_90px_-48px_rgba(0,0,0,0.48)] sm:p-8">
            <div className="rounded-[28px] bg-gradient-to-br from-rose-50 via-orange-50 to-white p-6 sm:p-10">
              <div className="grid gap-6 sm:grid-cols-4">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="text-sm text-zinc-500">{stat.label}</p>
                    <p className="mt-2 text-base font-semibold text-zinc-950">
                      {stat.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-8 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="sticky top-4 z-40 lg:hidden">
            <nav className="flex gap-2 overflow-x-auto rounded-full border border-zinc-200 bg-white/90 p-1.5 shadow-sm backdrop-blur-xl">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`whitespace-nowrap rounded-full px-4 py-2 text-sm transition ${
                    activeSection === item.id
                      ? "bg-zinc-950 text-white"
                      : "text-zinc-600 hover:bg-zinc-50 hover:text-zinc-950"
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </section>

      <section className="px-6 py-10 sm:px-8 lg:px-10 lg:py-14">
        <div className="mx-auto max-w-7xl">
          <div className="overflow-hidden rounded-[32px] border border-zinc-200 bg-white shadow-[0_30px_80px_-48px_rgba(0,0,0,0.45)]">
            <Image
              src="/projects/cakely/Cake.ly_hero.png"
              alt="Cake.ly hero visual"
              width={2400}
              height={1400}
              priority
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      <section className="px-6 pb-10 sm:px-8 lg:px-10 lg:pb-14">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-5 md:grid-cols-2">
            <Link
              href="https://bit.ly/44iZR1b"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-[30px] border border-zinc-200 bg-white p-8 shadow-[0_22px_58px_-42px_rgba(0,0,0,0.58)] transition duration-300 hover:-translate-y-1 hover:border-zinc-300 hover:shadow-[0_30px_72px_-44px_rgba(0,0,0,0.62)]"
            >
              <p className="text-sm uppercase tracking-[0.32em] text-zinc-500">
                Try the Product
              </p>
              <h3 className="mt-4 text-2xl font-semibold text-zinc-950">
                Low Fidelity Prototype
              </h3>
              <p className="mt-3 text-base leading-7 text-zinc-600">
                Explore the early flow, navigation, and ordering logic.
              </p>
            </Link>
            <Link
              href="http://bit.ly/4ac0nS6"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-[30px] border border-zinc-200 bg-white p-8 shadow-[0_22px_58px_-42px_rgba(0,0,0,0.58)] transition duration-300 hover:-translate-y-1 hover:border-zinc-300 hover:shadow-[0_30px_72px_-44px_rgba(0,0,0,0.62)]"
            >
              <p className="text-sm uppercase tracking-[0.32em] text-zinc-500">
                Try the Product
              </p>
              <h3 className="mt-4 text-2xl font-semibold text-zinc-950">
                High Fidelity Prototype
              </h3>
              <p className="mt-3 text-base leading-7 text-zinc-600">
                View the final interaction design and product presentation.
              </p>
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 py-10 sm:px-8 lg:px-10 lg:py-14">
        <div className="mx-auto max-w-7xl">
          <div className="lg:grid lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-12">
            <aside className="hidden lg:block">
              <div className="sticky top-24">
                <div className="flex flex-col gap-1.5">
                  {navItems.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className={`group flex items-center gap-3 rounded-2xl px-3 py-2.5 text-sm transition ${
                        activeSection === item.id
                          ? "bg-white text-zinc-950 shadow-sm"
                          : "text-zinc-500 hover:bg-white/60 hover:text-zinc-950"
                      }`}
                    >
                      <span
                        className={`h-2.5 w-2.5 rounded-full transition ${
                          activeSection === item.id
                            ? "bg-zinc-950"
                            : "bg-zinc-300 group-hover:bg-zinc-500"
                        }`}
                      />
                      <span>{item.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </aside>

            <div className="space-y-12">
              <section id="overview" className="scroll-mt-28">
                <div className="rounded-[30px] border border-zinc-200 bg-white p-8 shadow-[0_26px_80px_-52px_rgba(0,0,0,0.52)] sm:p-10">
                  <SectionHeader
                    eyebrow="Overview"
                    title="A clearer path to ordering"
                    description="Cake.ly is designed to help customers discover, customize, and complete bakery purchases with confidence from the first tap to checkout."
                  />
                  <div className="grid gap-5 md:grid-cols-3">
                    {overviewImages.map((image) => (
                      <Artifact
                        key={image}
                        src={image}
                        alt="Project overview artifact"
                        onClick={() => setSelectedImage(image)}
                      />
                    ))}
                  </div>
                </div>
              </section>

              <section id="research" className="scroll-mt-28">
                <div className="rounded-[30px] border border-zinc-200 bg-white p-8 shadow-[0_26px_80px_-52px_rgba(0,0,0,0.52)] sm:p-10">
                  <SectionHeader
                    eyebrow="Research"
                    title="Research & Discovery"
                    description="Understanding customer needs, purchase friction, and the moments that shape trust in a bakery ordering experience."
                  />
                  <div className="grid gap-6 lg:grid-cols-[1.3fr_0.9fr]">
                    <Artifact
                      src={researchPrimary}
                      alt="User research summary"
                      onClick={() => setSelectedImage(researchPrimary)}
                    />
                    <div className="space-y-6">
                      {personas.map((image) => (
                        <Artifact
                          key={image}
                          src={image}
                          alt="Persona artifact"
                          onClick={() => setSelectedImage(image)}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="mt-6">
                    <Artifact
                      src={journeyMap}
                      alt="Customer journey map"
                      onClick={() => setSelectedImage(journeyMap)}
                    />
                  </div>
                </div>
              </section>

              <section id="wireframes" className="scroll-mt-28">
                <div className="rounded-[30px] border border-zinc-200 bg-white p-8 shadow-[0_26px_80px_-52px_rgba(0,0,0,0.52)] sm:p-10">
                  <SectionHeader
                    eyebrow="Wireframes"
                    title="Structure & Flow"
                    description="Mapping the core ordering journey into lightweight screens that clarify decisions without overloading the interface."
                  />
                  <div className="grid gap-6">
                    {wireframes.map((image) => (
                      <Artifact
                        key={image}
                        src={image}
                        alt="Wireframe artifact"
                        onClick={() => setSelectedImage(image)}
                      />
                    ))}
                  </div>
                </div>
              </section>

              <section id="testing" className="scroll-mt-28">
                <div className="rounded-[30px] border border-zinc-200 bg-white p-8 shadow-[0_26px_80px_-52px_rgba(0,0,0,0.52)] sm:p-10">
                  <SectionHeader
                    eyebrow="Testing"
                    title="Validation & Learning"
                    description="Checking where customers hesitated, what language made them pause, and how the experience could feel more confident."
                  />
                  <div className="max-w-5xl">
                    <Artifact
                      src={usabilityImage}
                      alt="Usability test artifact"
                      onClick={() => setSelectedImage(usabilityImage)}
                    />
                  </div>
                </div>
              </section>

              <section id="final-ui" className="scroll-mt-28">
                <div className="rounded-[30px] border border-zinc-200 bg-white p-8 shadow-[0_26px_80px_-52px_rgba(0,0,0,0.52)] sm:p-10">
                  <SectionHeader
                    eyebrow="Final UI"
                    title="Refined Experience"
                    description="Turning the validated flow into a premium, highly legible product surface that balances delight with speed."
                  />
                  <div className="mt-2 grid gap-8 lg:grid-cols-2">
                    {finalImages.map((image) => (
                      <div key={image} className="lg:even:translate-y-10">
                        <Artifact
                          src={image}
                          alt="Final UI artifact"
                          onClick={() => setSelectedImage(image)}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <section id="accessibility" className="scroll-mt-28">
                <div className="rounded-[30px] border border-zinc-200 bg-white p-8 shadow-[0_26px_80px_-52px_rgba(0,0,0,0.52)] sm:p-10">
                  <SectionHeader
                    eyebrow="Accessibility"
                    title="Inclusive by Default"
                    description="Designing clear hierarchy, readable contrast, and interaction patterns that support more users across the full journey."
                  />
                  <div className="max-w-5xl">
                    <Artifact
                      src={accessibilityImage}
                      alt="Accessibility considerations"
                      onClick={() => setSelectedImage(accessibilityImage)}
                    />
                  </div>
                </div>
              </section>

              <section id="results" className="scroll-mt-28">
                <div className="rounded-[30px] border border-zinc-200 bg-white p-8 shadow-[0_26px_80px_-52px_rgba(0,0,0,0.52)] sm:p-10">
                  <SectionHeader
                    eyebrow="Results"
                    title="Impact & Takeaways"
                    description="Improving confidence and clarity in the ordering flow while creating a stronger foundation for future growth."
                  />
                  <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
                    <div className="rounded-[28px] bg-zinc-50 p-7">
                      <p className="text-sm uppercase tracking-[0.32em] text-zinc-500">
                        Outcome
                      </p>
                      <p className="mt-4 text-4xl font-semibold text-zinc-950">+24% orders</p>
                      <p className="mt-4 text-base leading-7 text-zinc-600">
                        The redesigned flow reduced friction for first-time customers and improved confidence during customization and checkout.
                      </p>
                    </div>
                    <div className="space-y-6">
                      {resultsImages.map((image) => (
                        <Artifact
                          key={image}
                          src={image}
                          alt="Results artifact"
                          onClick={() => setSelectedImage(image)}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-h-[90vh] w-full max-w-6xl overflow-hidden rounded-[24px] bg-white p-3">
            <button
              type="button"
              aria-label="Close image preview"
              onClick={() => setSelectedImage(null)}
              className="absolute right-5 top-5 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-zinc-800 shadow-sm transition hover:bg-white"
            >
              ×
            </button>
            <div className="relative max-h-[85vh] overflow-auto">
              <Image
                src={selectedImage}
                alt="Selected project image"
                width={2000}
                height={1400}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
