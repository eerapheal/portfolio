import Image from "next/image";
import HomeCard from "@/components/HomeCard/HomeCard";
import Contact from "@/components/Contact/Contact";
import Portfolio from "@/components/Portfolio/Portfolio";
import About from "@/components/About/About";

export default function Home() {
  return (
    <main className="">
      <HomeCard />
      <Portfolio />
      <About />
      <Contact />
    </main>
  );
}
