// app/page.tsx
import Education from "./components/Education";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-950">
      <div id="home">
        <Hero />
      </div>
      <Education />
      <div id="experience" className="scroll-mt-24">
        <Experience />
      </div>
      <div id="projects" className="scroll-mt-24">
        <Projects />
      </div>
    </main>
  );
}