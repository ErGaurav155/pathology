"use client";

import curve from "@/public/assets/hero/curve.png";
import heroBackground from "@/public/assets/hero/hero-background.jpg";
import robot from "@/public/assets/hero/robot.jpg";

import Button from "@/components/JsmComp/Button";
import Section from "@/components/JsmComp/Section";
import {
  BackgroundCircles,
  BottomLine,
  Gradient,
} from "@/components/JsmComp/Hero";

import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";
import Generating from "@/components/JsmComp/Generating";
import Notification from "@/components/JsmComp/Notification";
import homeSmile from "@/public/assets/home-smile.svg";
import file02 from "@/public/assets/file-02.svg";
import searchMd from "@/public/assets/search-md.svg";
import plusSquare from "@/public/assets/plus-square.svg";

import Image from "next/image";

const heroIcons = [homeSmile, file02, searchMd, plusSquare];
const Hero = () => {
  const parallaxRef = useRef(null);

  return (
    <div className="absolute top-0 right-0  ">
      <div className="container relative" ref={parallaxRef}>
        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
            <div className="relative bg-n-8 rounded-[1rem]">
              <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />

              <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                <Image
                  src={robot}
                  className="w-full scale-[1.7] translate-y-[8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[23%]"
                  width={130}
                  height={40}
                  alt="AI"
                />

                <Generating className="absolute left-4 right-4 bottom-5 md:left-1/2 md:right-auto md:bottom-8 md:w-[31rem] md:-translate-x-1/2" />

                <ScrollParallax isAbsolutelyPositioned>
                  <ul className="hidden absolute -left-[5.5rem] bottom-[7.5rem] px-1 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex">
                    {heroIcons.map((icon, index) => (
                      <li className="p-5" key={index}>
                        <Image src={icon} width={14} height={15} alt={icon} />
                      </li>
                    ))}
                  </ul>
                </ScrollParallax>

                <ScrollParallax isAbsolutelyPositioned>
                  <Notification
                    className="hidden absolute -right-[5.5rem] bottom-[11rem] w-[18rem] xl:flex"
                    title="Code generation"
                  />
                </ScrollParallax>
              </div>
            </div>

            <Gradient />
          </div>
          <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
            <Image
              src={heroBackground}
              className="w-full"
              width={150}
              height={100}
              alt="hero"
            />
          </div>

          <BackgroundCircles />
        </div>
      </div>

      <BottomLine />
    </div>
  );
};

export default Hero;
