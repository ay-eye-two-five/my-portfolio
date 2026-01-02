// app/page.tsx
import Education from "./components/Education";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-950">
      <Hero />
      <Education />
    </main>
  );
}