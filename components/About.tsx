"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Milestone } from "lucide-react";
import React, { useRef } from "react";

const About = () => {
  const aboutRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  const textTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".text1",
      scrub: 1,
      end: "bottom 40%",
    },
  });

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
      }
    );
    textTimeline.fromTo(
      ".text1",
      { opacity: 0, x: -100 },
      { opacity: 1, x: 0, duration: 1 }
    );
    textTimeline.fromTo(
      ".text2",
      { opacity: 0, x: -100 },
      { opacity: 1, x: 0, duration: 1 }
    );
    textTimeline.fromTo(
      ".text3",
      { opacity: 0, x: -100 },
      { opacity: 1, x: 0, duration: 0.2 }
    );
    textTimeline.fromTo(
      ".text4",
      { opacity: 0, x: -100 },
      { opacity: 1, x: 0, duration: 0.2 }
    );
    textTimeline.fromTo(
      ".text5",
      { opacity: 0, x: -100 },
      { opacity: 1, x: 0, duration: 0.2 }
    );
    textTimeline.fromTo(
      ".text6",
      { opacity: 0, x: -100 },
      { opacity: 1, x: 0, duration: 0.2 }
    );
    textTimeline.fromTo(
      ".text7",
      { opacity: 0, x: -100 },
      { opacity: 1, x: 0, duration: 0.2 }
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
      <ul className="text-white text-[20px] font-semibold leading-8 pl-10 pt-16 italic">
        {" "}
        {[
          `We deliver exceptional user experiences for web and mobile applications .`,
          `Our expert UI/UX design seamlessly integrates
          with`,
          `full-stack development for both web and mobile platforms, creating`,
          `powerful and intuitive digital solutions.`,
          `With a focus on innovation and quality,`,
          `we bring your ideas to life`,
          `Let’s build something amazing together!`,
        ].map((ct, i) => {
          return (
            <li key={i} className="flex items-center gap-2 mt-4">
              <Milestone /> <span className={`text${i}`}>{ct}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default About;
