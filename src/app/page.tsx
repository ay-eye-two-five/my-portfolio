// app/page.tsx
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-950 flex flex-col">
      <Hero/>
    </main>
}