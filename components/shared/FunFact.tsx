"use client";

import { useState, useEffect, useRef } from "react";
import {
  CalculatorIcon,
  FaceSmileIcon,
  HomeIcon,
  UserIcon,
} from "@heroicons/react/24/solid";

const AnimatedCounter = ({
  target,
  isVisible,
}: {
  target: number;
  isVisible: boolean;
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // Animation duration in milliseconds
    const increment = target / (duration / 10); // Increment per interval

    const interval = setInterval(() => {
      setCount((prev) => {
        const nextValue = prev + increment;
        if (nextValue >= target) {
          clearInterval(interval);
          return target;
        }
        return nextValue;
      });
    }, 10);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [isVisible, target]);

  return (
    <span className="counter text-white font-semibold text-3xl">
      {Math.floor(count)}
    </span>
  );
};

const FunFacts = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const currentRef = sectionRef.current; // Create a local copy of the ref
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the component is in view
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef); // Use the local copy in cleanup
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="w-full rounded-sm bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: "url('/assets/img/fun-bg.jpg')" }}
    >
      <div className="py-28 rounded-sm bg-blue-700 bg-opacity-80 mx-auto">
        <div className="flex w-full m-auto flex-wrap p-5 items-center justify-center gap-8">
          {/* Single Fun Fact */}
          <div className="flex flex-0 items-center justify-center text-center">
            <div className="flex items-center justify-center w-24 h-24 mx-auto border border-blue-300 rounded-full hover:bg-white text-white bg-blue-700 hover:text-blue-700 transition-all">
              <HomeIcon className="h-10 w-10" />
            </div>
            <div className="flex gap-2 flex-col pl-5">
              <AnimatedCounter target={2468} isVisible={isVisible} />
              <p className="text-white text-base text-center">
                Tests & profile
              </p>
            </div>
          </div>

          {/* Single Fun Fact */}
          <div className="flex flex-0 items-center justify-center text-center">
            <div className="flex items-center justify-center w-24 h-24 mx-auto border border-blue-300 rounded-full hover:bg-white text-white bg-blue-700 hover:text-blue-700 transition-all">
              <UserIcon className="h-10 w-10" />
            </div>
            <div className="flex gap-2 flex-col pl-5">
              <AnimatedCounter target={5} isVisible={isVisible} />
              <p className="text-white text-base text-center">
                Specialist Doctors
              </p>
            </div>
          </div>

          {/* Single Fun Fact */}
          <div className="flex flex-0 items-center justify-center text-center">
            <div className="flex items-center justify-center w-24 h-24 mx-auto border border-blue-300 rounded-full hover:bg-white text-white bg-blue-700 hover:text-blue-700 transition-all">
              <FaceSmileIcon className="h-10 w-10" />
            </div>
            <div className="flex  gap-2 flex-col pl-5">
              <AnimatedCounter target={3452} isVisible={isVisible} />
              <p className="text-white text-base text-center">Happy Patients</p>
            </div>
          </div>

          {/* Single Fun Fact */}
          <div className="flex flex-0 items-center justify-center text-center">
            <div className="flex flex-0 items-center justify-center w-24 h-24 mx-auto border border-blue-300 rounded-full hover:bg-white text-white bg-blue-700 hover:text-blue-700 transition-all">
              <CalculatorIcon className="h-10 w-10" />
            </div>
            <div className="flex flex-0 gap-2 flex-col pl-5">
              <AnimatedCounter target={10} isVisible={isVisible} />
              <p className="text-white text-base text-center">
                Years of Experience
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FunFacts;
