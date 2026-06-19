
import FeaturedWork from "@/components/FeaturedWork";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ProofStrip from "@/components/ProofStrip";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAFAFA] text-zinc-950">
      <Navbar />
      <Hero />
      <ProofStrip />
      <FeaturedWork />
    </main>
  );
}

