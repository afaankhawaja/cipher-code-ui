"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  gsap.registerPlugin(ScrollTrigger);
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#proj1",
      scrub: 1,
      end: "bottom 10%",
    },
  });
  useGSAP(() => {
    tl.fromTo(
      "#proj1",
      {
        y: 300,
      },
      {
        y: -500,
        left: 15,
      },
    );
    tl.fromTo(
      "#proj2",
      {
        y: 300,
        right: 15,
      },
      {
        y: -400,
      },
    );
    tl.fromTo(
      "#proj3",
      {
        y: 300,
      },
      {
        y: -170,
        left: 15,
      },
    );
    tl.fromTo(
      "#proj4",
      {
        y: 50,
        right: 15,
      },
      {
        y: -300,
      },
    );
  });

  return (
    <section
      id="projects"
      className="relative h-screen w-full max-w-full bg-black/90 overflow-hidden"
    >
      <h1 className="absolute left-1/2 top-1/2 transform font-bold text-white  -translate-x-1/2 text-5xl">
        Projects
      </h1>
      {[1, 2, 3, 4].map((i) => (
        <Image
          key={i}
          id={`proj${i}`}
          src={`/project${i}.jpg`}
          width={350}
          height={150}
          className="absolute bottom-0 rounded-xl"
          alt={`proj${i}`}
        />
      ))}
    </section>
  );
}
