"use client";
import React, { useLayoutEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Hero = () => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(SplitText);
  const companyRef = useRef(null);

  useLayoutEffect(() => {
    const split = SplitText.create(companyRef.current, { type: "chars" });

    const tl = gsap.timeline();
    tl.from(split.chars, {
      y: 50,
      autoAlpha: 0,
      stagger: 0.05,
      duration: 0.6,
      delay: 1.2,
      color: "green",
      ease: "back.out(1.7)",
    });

    return () => {
      split.revert();
    };
  }, []);

  useGSAP(() => {
    const timeline = gsap.timeline();

    timeline.to("#headings", { y: 200, duration: 1, ease: "bounce" });
    timeline.to("#h1", { fontSize: 50, fontWeight: "bold" });
    timeline.to("#h2", {
      fontSize: 30,
      color: "#a5a5a5",
      fontWeight: "bold",
      marginTop: "15px",
    });
    timeline.to("#h3", {
      fontSize: 22,
      fontWeight: "bold",
      color: "#ADADAD",
      marginTop: "10px",
    });
    timeline.to("#downArrow", { scaleY: 2 });
    timeline.fromTo(
      "#downArrow",
      { y: 0 },
      { y: 50, yoyo: true, duration: 0.4 },
    );

    gsap.to("#downArrow", {
      scrollTrigger: {
        trigger: "#downArrow",
        start: "top 60%",
        end: "+=500px",
        scrub: true,
      },
      rotate: 220,
      y: 340,
      x: -200,
      ease: "none",
    });
  });

  return (
    <div className=" text-white h-screen">
      <div className="flex w-[100%] h-[100%]">
        <div
          id="headings"
          className=" text-white flex flex-col px-20 w-[60%] h-full"
        >
          <h1 id="h1" className="text-[20px] flex gap-x-2">
            Welcome to{" "}
            <div id="companyName" ref={companyRef}>
              Cipher Code
            </div>
          </h1>
          <h2 id="h2" className="text-[20px] tracking-tighter leading-8">
            We specialize in creating high-performance <br /> websites and apps
            that drive results.
          </h2>
          <h3 id="h3" className="text-[30px]">
            Building Digital Experiences.
          </h3>
          <button
            type="button"
            className="py-2.5 px-5 w-fit mt-[10px] mb-2 text-sm font-semibold text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-black focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Learn more
          </button>
        </div>
        <div className="w-[40%] -ml-20 mt-4 my-auto h-full flex justify-start items-start">
          <DotLottieReact
            src="https://lottie.host/967b3d38-2e78-49e6-ba4c-ac344868c0d7/rPY5naeqis.lottie"
            loop
            autoplay
          />
        </div>
      </div>

      <div className="flex absolute top-[50%] left-[40%] translate-y-[-50%] translate-x-[-50%] items-center justify-center mt-52">
        <svg
          id="downArrow"
          className="rotate-180 w-20 h-[200px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path
            d="m19.707 9.293-7-7a1 1 0 0 0-1.414 0l-7 7A1 1 0 0 0 5 11h3v10a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V11h3a1 1 0 0 0 .707-1.707z"
            style={{ fill: "#d9dedb" }}
            data-name="Down"
          />
        </svg>
      </div>
    </div>
  );
};

export default Hero;
