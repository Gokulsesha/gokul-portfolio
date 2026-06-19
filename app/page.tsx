export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">
      <section className="max-w-7xl mx-auto px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-6">
              Associate Technical Lead · Product Designer
            </p>

            <h1 className="text-7xl lg:text-8xl font-bold leading-none mb-8">
              Designing
              <br />
              enterprise
              <br />
              experiences.
            </h1>

            <p className="text-xl text-gray-600 max-w-xl mb-10 leading-relaxed">
              I help teams transform complex workflows into intuitive digital
              products through UX strategy, accessibility, design systems and
              AI-assisted design processes.
            </p>

            <div className="flex gap-4">
              <button className="px-6 py-3 bg-black text-white rounded-full">
                View Work
              </button>

              <button className="px-6 py-3 border border-black rounded-full">
                Resume
              </button>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="w-[420px] h-[520px] rounded-3xl bg-gray-100 border border-gray-200 flex items-center justify-center">
              <span className="text-gray-400">
                Portrait Coming Soon
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}