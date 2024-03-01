import Image from "next/image";
import Hero from './lib/files/components/home/hero/hero'
import Projects from './lib/files/components/home/projects/projects'

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Projects />
    </main>

  );
}
