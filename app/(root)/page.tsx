import Roadmap from "@/components/JsmComp/Roadmap";
import Services from "@/components/JsmComp/Services";
import { Collection } from "@/components/shared/Collection";
import { Faq } from "@/components/shared/Faq";
import { Footer } from "@/components/shared/Footer";

import Benefits from "@/components/shared/Svgs/Benifits";

import { navLinks } from "@/constants";
import { getAllImages } from "@/lib/actions/image.actions";
import { FingerPrintIcon } from "@heroicons/react/24/solid";
import { FingerprintIcon, SlidersIcon, ThermometerSunIcon } from "lucide-react";
import bg from "@/public/assets/bg.jpg";
import Image from "next/image";
import Collaboration from "@/components/shared/Colaboration";

const Home = async ({ searchParams }: SearchParamProps) => {
  const page = Number(searchParams?.page) || 1;
  const searchQuery = (searchParams?.query as string) || "";

  const images = await getAllImages({ page, searchQuery });
  // const styling = {
  //   backgroundImage: `url('${bg}')`,
  //   width: "100%",
  //   height: "100%",
  // };
  return (
    <div
      className="flex  flex-col gap-20 items-center justify-center"
      // style={styling}
    >
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
      {/* <HeroCopy /> */}
      <div className="mt-[160px] md:mt-[176px] font-inter w-full flex flex-col gap-y-8 md:flex-row justify-center items-center gap-x-[32px] px-[24px] md:px-[50px] lg:px-[80px] xl:px-[112px]  ">
        <div className="flex flex-col justify-start items-center gap-y-4">
          <FingerPrintIcon color="#32517D" className="h-10 w-10" />
          <h2 className="text-center font-medium text-[#32517D] text-lg leading-7 tracking-tight">
            Natural, Human voices
          </h2>
          <p className="text-[#353C4499]/60 text-center font-normal max-w-[384px] text-base leading-6 tracking-tight">
            Listnr lets you create voiceovers with 1000+ different voices in
            over 142 languages.
          </p>
        </div>
        <div className="flex flex-col justify-start items-center gap-y-4">
          <ThermometerSunIcon color="#32517D" className="h-10 w-10" />
          <h2 className="text-center font-medium text-[#32517D] text-lg leading-7 tracking-tight">
            Emotion Fine Tuning
          </h2>
          <p className="text-[#353C4499]/60 text-center font-normal max-w-[384px] text-base leading-6 tracking-tighter">
            Listnr lets you create voiceovers with 1000+ different voices in
            over 142 languages.
          </p>
        </div>
        <div className="flex flex-col justify-start items-center gap-y-4">
          <SlidersIcon color="#32517D" className="h-10 w-10" />
          <h2 className="text-center font-medium text-[#32517D] text-base leading-7 tracking-tight">
            Punctuations and Pauses
          </h2>
          <p className="text-[#353C4499]/60 text-center font-normal max-w-[384px] text-base leading-6 tracking-tighter">
            Listnr lets you create voiceovers with 1000+ different voices in
            over 142 languages.
          </p>
        </div>
      </div>
      <Benefits />

      <Services />
      <Collaboration />
      <Roadmap />
      <Faq />
      <Footer />
    </div>
  );
};

export default Home;
