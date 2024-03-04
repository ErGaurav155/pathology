import { benefits } from "@/constants";

import Arrow from "@/components/shared/Svgs/arrow";
import ClipPath from "@/components/shared/Svgs/Chippath";
import Image from "next/image";

const Benefits = () => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">
      {benefits.map((item) => (
        <div
          className={`block   relative p-0.5   bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]`}
          key={item.id}
        >
          <div className="relative   z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none ">
            <h5 className="h5 text-[#f476ad] mb-5">{item.title}</h5>
            <p className="body-2 mb-6 text-white">{item.text}</p>
            <div className="flex items-center mt-auto">
              <Image
                src={item.iconUrl}
                width={48}
                height={48}
                alt={item.title}
              />
              <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">
                Explore more
              </p>
              <Arrow />
            </div>
          </div>

          <div
            className="absolute inset-0.5 bg-n-8"
            style={{ clipPath: "url(#benefits)" }}
          >
            <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
              {item.imageUrl && (
                <Image
                  src={item.imageUrl}
                  width={380}
                  height={362}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              )}
            </div>
          </div>

          <ClipPath />
        </div>
      ))}
    </div>
  );
};

export default Benefits;
