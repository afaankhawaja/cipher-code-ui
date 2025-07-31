import About from "@/components/About";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Services from "@/components/Services";

export default function Home() {
  return (
    <div
      style={{
        backgroundImage: "url(/background.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        maxWidth: "100dvw",
        maxHeight: "100dvh",
      }}
    >
      <Hero />
      <About />
      <Services />
      <Projects />
    </div>
  );
}
