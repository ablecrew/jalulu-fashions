import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import Collections from "@/components/sections/Collections";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">
      <Navbar />
      <Hero />
      <Stats />
      <Collections />
    </main>
  );
}