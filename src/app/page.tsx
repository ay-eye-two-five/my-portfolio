// app/page.tsx
import Education from "./components/Education";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-950">
      <Hero />
      <Education />
      <Experience />
      <Projects />
    </main>
  );
}