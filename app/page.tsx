import About from "@/components/About";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div
      style={{
        backgroundImage: "url(/background.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100vw",
        height: "100vh",
      }}
    >
      <div className="mt-0">
        <Hero />
        <About/>
      </div>
    </div>
  );
}
