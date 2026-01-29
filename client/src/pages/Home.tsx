import Skills from "@/sections/Skills";
import WorkEducationEnhanced from "@/sections/WorkEducationEnhanced";
import Footer from "@/sections/Footer";
import Navbar from "@/sections/Navbar";
import Hero from "@/sections/Hero";

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(900px_circle_at_50%_-10%,rgba(255,255,255,0.07),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(700px_circle_at_20%_40%,rgba(56,189,248,0.08),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(700px_circle_at_80%_60%,rgba(16,185,129,0.06),transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0),rgba(0,0,0,0.35))]" />
      </div>
      <Navbar />
      <main className="pt-24 md:pt-28">
        <Hero />
        <WorkEducationEnhanced />
        <Skills />
      </main>
      <Footer />
    </div>
  );
}
