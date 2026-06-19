const metrics = [
  { value: "9+", label: "Years" },
  { value: "UX", label: "Enterprise" },
  { value: "A11Y", label: "Accessibility" },
  { value: "DS", label: "Design Systems" },
  { value: "AI", label: "Workflows" },
];

export default function ProofStrip() {
  return (
    <section className="border-y border-zinc-200 bg-white/70 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-6 py-10 sm:px-8 lg:px-10">
        <div className="grid grid-cols-2 gap-6 text-center sm:grid-cols-5">
          {metrics.map((metric) => (
            <div key={metric.label}>
              <div className="text-3xl font-semibold tracking-tight text-zinc-950">
                {metric.value}
              </div>
              <div className="mt-1 text-sm text-zinc-500">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
