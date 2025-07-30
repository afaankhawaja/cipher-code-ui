"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useRef } from "react";

const About = () => {
  const aboutRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.fromTo(
      aboutRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 80%",
          scrub: true,
        },
      },
    );
  });
  return (
    <div className="w-screen h-screen bg-black">
      <div
        id="about"
        ref={aboutRef}
        className=" font-bold pt-40 pl-10 text-[64px] text-white"
      >
        About US
      </div>
    </div>
  );
};

export default About;
