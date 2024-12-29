"use client";
import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";

// Sample slides data
const slides = [
  {
    imageUrl: "assets/img/slider2.jpg",
    title: "We Provide Medical Services That You Can Trust!",
    subtitle: "Blood Test At Home With Easy Home Blood Sample Collection",
    buttons: [
      { text: "Get Appointment", href: "/Appointment", primary: true },
      { text: "Services", href: "/PathTest", primary: false },
    ],
  },
  {
    imageUrl: "assets/img/slider.jpg",
    title: "Your Most Trusted Health Partner!",
    subtitle: "Get Accurate & Reliable Reports With Trend Analysis",
    buttons: [
      { text: "Get Appointment", href: "/Appointment", primary: true },
      { text: "About Us", href: "/Doctors", primary: false },
    ],
  },
  {
    imageUrl: "assets/img/slider3.jpg",
    title: "Special Packages For Senior Citizens",
    subtitle: "Step Into Festivities With Wellness By Your Side",
    buttons: [
      { text: "Get Appointment", href: "/Appointment", primary: true },
      { text: "Contact Now", href: "/contactus", primary: false },
    ],
  },
];

export const HeroSlider = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const handleSelect = useCallback(() => {
    if (emblaApi) {
      setActiveIndex(emblaApi.selectedScrollSnap());
    }
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const interval = setInterval(scrollNext, 5000);
    emblaApi.on("select", handleSelect);
    return () => clearInterval(interval);
  }, [emblaApi, scrollNext, handleSelect]);

  return (
    <section className=" overflow-x-auto  no-scrollbar  w-full">
      <div ref={emblaRef} className="w-full ">
        <div className="flex ">
          {slides.map((slide, index) => {
            const isActive = index === activeIndex;

            return (
              <div key={index} className="w-full md:h-screen  flex-shrink-0">
                <div
                  className="flex  items-start md:h-[80%] justify-start bg-cover bg-center bg-opacity-10 md:bg-opacity-95"
                  style={{ backgroundImage: `url(${slide.imageUrl})` }}
                >
                  <motion.div
                    className="flex flex-col items-start justify-center gap-3 mt-5  lg:w-5/6 h-full   p-3 pr-20
                    pl-3   "
                    initial={{ opacity: 0 }}
                    animate={isActive ? { opacity: 1 } : {}}
                    transition={{ duration: 0.5 }}
                  >
                    {/* Title Animation (slightly from down to up) */}
                    <motion.h1
                      className="text-xl sm:text-3xl md:text-4xl  lg:text-5xl font-bold text-black leading-tight"
                      initial={{ opacity: 0, y: 50 }}
                      animate={isActive ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.8, delay: 0.2 }}
                    >
                      {slide.title.split(" ").map((word, i) =>
                        word === "Medical" ||
                        word === "Trust!" ||
                        word === "Health" ||
                        word === "Senior" ? (
                          <span key={i} className="text-blue-600 ">
                            {word} <br />
                          </span>
                        ) : (
                          <span key={i}>{word} </span>
                        )
                      )}
                    </motion.h1>

                    {/* Subtitle Animation (same as h1) */}
                    <motion.p
                      className="text-gray-700 mt-6 text-base sm:text-lg lg:text-xl"
                      initial={{ opacity: 0, y: 30 }}
                      animate={isActive ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.8, delay: 0.4 }}
                    >
                      {slide.subtitle}
                    </motion.p>

                    {/* Buttons Animation (from top to bottom) */}
                    <motion.div
                      className="flex flex-col sm:flex-row mt-3  gap-2 min-w-max flex-nowrap"
                      initial={{ opacity: 0, y: -30 }}
                      animate={isActive ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.8, delay: 0.6 }}
                    >
                      {slide.buttons.map((button, btnIndex) => (
                        <a
                          key={btnIndex}
                          href={button.href}
                          className={`py-2 px-6 rounded  text-center font-medium transition ${
                            button.primary
                              ? "bg-blue-600 text-white hover:bg-gray-800"
                              : "bg-gray-800 text-white hover:bg-blue-600"
                          }`}
                        >
                          {button.text}
                        </a>
                      ))}
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
