import Image from "next/image";
import loading1 from "@/public/assets/roadmap/image-2.png";
import loading2 from "@/public/assets/roadmap/image-3.png";

import Arrow from "@/components/shared/Svgs/arrow";
import Link from "next/link";

import React from "react";

const Bottom = () => {
  return (
    <div className="flex  w-full flex-col items-center justify-center space-y-4 md:flex-row md:space-x-6 md:space-y-0">
      <button className="inline-flex  items-center justify-center font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:[&amp;>*]:translate-y-0.5 text-sm [&amp;>*]:py-2 [&amp;>*]:px-4  rounded-full h-12 border-none text-gray-300 ring-2 ring-[#fc48f0] ring-offset-dark-900 transition-all duration-300 hover:text-white hover:ring-[#f966fc] w-6/12 md:w-auto">
        <Link
          className="flex w-full h-full items-center transition-transform duration-500 ease-out undefined"
          href=""
        >
          <span className="flex w-full flex-1 items-center justify-center">
            <span className="flex items-center space-x-2.5">
              <div className="flex items-center mt-auto">
                <Image src={loading1} width={48} height={48} alt="" />
                <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">
                  Explore more
                </p>
                <Arrow />
              </div>
            </span>
          </span>
        </Link>
      </button>
      <button className="inline-flex items-center justify-center font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:[&amp;>*]:translate-y-0.5 text-sm [&amp;>*]:py-2 [&amp;>*]:px-4  rounded-full h-12 border-none text-gray-300 ring-2 ring-[#5865F2] ring-offset-dark-900 transition-all duration-300 hover:text-white hover:ring-[#3544EEFF] w-6/12 md:w-auto">
        <Link
          className="flex w-full h-full items-center transition-transform duration-500 ease-out undefined"
          href=""
        >
          <span className="flex w-full flex-1 items-center justify-center">
            <span className="flex items-center space-x-2.5">
              <div className="flex items-center mt-auto">
                <Image src={loading2} width={48} height={48} alt="" />
                <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">
                  Getting started
                </p>
                <Arrow />
              </div>
            </span>
          </span>
        </Link>
      </button>
    </div>
  );
};

export default Bottom;
