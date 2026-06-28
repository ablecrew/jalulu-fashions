import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import Collections from "@/components/sections/Collections";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Luxury Statistics */}
      <Stats />

      {/* Signature Collections */}
      <Collections />

      {/* Premium Footer */}
      <Footer />
    </main>
  );
}