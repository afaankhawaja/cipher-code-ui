"use client";
import React, { useRef } from "react";
import WebDevelopement from "./WebDevelopement";
import UIUXDevelopment from "./UIUXDevelopment";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import AppDevelopment from "./AppDevelopment";

const Services = () => {
  const containerRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    if (containerRef.current) {
      // @ts-expect-error children
      const childs = gsap.utils.toArray(containerRef?.current?.children);
      gsap.to(childs, {
        xPercent: -100 * (childs.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          snap: 1 / (childs.length - 1),
        },
      });
    }
  });

  return (
    <section className="min-h-full">
      <h1
        id="title"
        className="text-[64px] text-center text-black left-[50%] mb-2"
      >
        Services
      </h1>
      <div
        id="container"
        className="flex w-screen h-screen overflow-x-hidden"
        ref={containerRef}
      >
        <WebDevelopement />
        <UIUXDevelopment />
        <AppDevelopment />
      </div>
    </section>
  );
};

export default Services;
