import Image from "next/image";
import HomeCard from "@/components/HomeCard/HomeCard";
import Contact from "@/components/Contact/Contact";
import Portfolio from "@/components/Portfolio/Portfolio";
import About from "@/components/About/About";

export default function Home() {
  return (
    <main className="" style={{
      backgroundImage:
        "linear-gradient(80deg, #eef7fb 0 60%,  #C9F6FF 0% 100%)",
      paddingTop: "60px",
      minHeight: "100vh",
      overflow: "hidden",
    }}>
      <HomeCard />
      <Portfolio />
      <About />
      <Contact />
    </main>
  );
}
