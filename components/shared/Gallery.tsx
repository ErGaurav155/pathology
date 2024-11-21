"use client";

import React from "react";
import imagelink1 from "@/public/service/bg-1.jpg";
import imagelink2 from "@/public/service/bg-1.jpg";
import imagelink3 from "@/public/service/bg-1.jpg";
import imagelink4 from "@/public/service/bg-1.jpg";
import imagelink5 from "@/public/service/bg-1.jpg";
import imagelink6 from "@/public/service/bg-1.jpg";
import Image from "next/image";

export function FeaturedImageGallery() {
  const data = [
    {
      imgelink: imagelink1,
    },
    {
      imgelink: imagelink2,
    },
    {
      imgelink: imagelink3,
    },
    {
      imgelink: imagelink4,
    },
    {
      imgelink: imagelink5,
    },
  ];

  const [active, setActive] = React.useState(imagelink6);

  return (
    <div className="grid wrapper gap-4">
      <div>
        <Image
          src={active}
          className="h-auto w-full max-w-full rounded-lg object-cover object-center md:h-[480px]"
          alt="gallery-image"
          height={800}
          width={999}
          priority
        />
      </div>
      <div className="grid h-auto grid-cols-5 gap-1 sm:gap-2 md:gap-4">
        {data.map(({ imgelink }, index) => (
          <div key={index}>
            <Image
              onClick={() => setActive(imgelink)}
              src={imgelink}
              className="h-auto max-w-full cursor-pointer rounded-lg object-cover object-center"
              alt="gallery-image"
              height={800}
              width={999}
              priority
            />
          </div>
        ))}
      </div>
    </div>
  );
}
