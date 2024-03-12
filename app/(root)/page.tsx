import Roadmap from "@/components/JsmComp/Roadmap";
import Services from "@/components/JsmComp/Services";
import { Faq } from "@/components/shared/Faq";
import { Footer } from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import Promo from "@/components/shared/Promotion";
import Heading from "@/components/shared/Svgs/HEading";

import { TabsDemo } from "@/components/shared/ToolsTab";
import {
  CarouselAiimages,
  CarouselPoster,
  CarouselThumbnail,
} from "@/components/shared/carousel";

import { ArrowBigRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Home = async () => {
  return (
    <div className="wrapper pb-8 lg:pb-10">
      <div className="flex  flex-col gap-10 items-center m-auto justify-center">
        <section className="bg-[#FCF8F1] bg-opacity-30 pt-4">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
              <div>
                <h1 className="mt-4 text-3xl font-bold text-black lg:mt-8 sm:text-5xl xl:text-6xl">
                  10X Booost Your Youtube Growth
                </h1>
                <p className="mt-4 text-base text-black lg:mt-8 sm:text-xl">
                  Cricon AI Platform for Content Creation
                </p>

                <Link
                  href="/autogen/longvid/idea"
                  className="inline-flex items-center px-6 py-4 mt-2 font-semibold text-black transition-all duration-200 bg-yellow-300 rounded-full lg:mt-3 hover:bg-yellow-400 focus:bg-yellow-400"
                  role="button"
                >
                  Start for free
                  <ArrowBigRight />
                </Link>
              </div>

              <div className="w-full">
                <Image
                  src="/assets/MyHero.png"
                  layout="responsive"
                  height={869}
                  width={1139}
                  objectFit="cover"
                  alt="carousel"
                  priority
                />
              </div>
            </div>
          </div>
        </section>
        {/* <Image
        alt="blue_background"
        loading="lazy"
        width="2220"
        height="2401"
        decoding="async"
        data-nimg="1"
        className="absolute w-[140vw] max-w-[250vw] overflow-x-hidden top-[-450px] overflow-visible h-fit object-cover"
        src={bg}
      ></Image> */}
        <TabsDemo />
        {/* <Benefits /> */}
        <Promo />
        <Services />
        <Roadmap />
        <div className="w-full flex flex-col gap-2 items-center justify-center ">
          <Heading title="Cricon Ai Generated Thumbnails" />
          <CarouselThumbnail />
        </div>
        <div className="w-full flex flex-col gap-2 items-center justify-center ">
          <Heading title="Cricon Ai Generated Aiimages" />
          <CarouselAiimages />
        </div>
        <div className="w-full flex flex-col gap-2 items-center justify-center ">
          <Heading title="Cricon Ai Generated Poster" />
          <CarouselPoster />
        </div>

        <Faq />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
