import Roadmap from "@/components/JsmComp/Roadmap";
import Services from "@/components/JsmComp/Services";
import { Faq } from "@/components/shared/Faq";
import { Footer } from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import Promo from "@/components/shared/Promotion";

import { TabsDemo } from "@/components/shared/ToolsTab";

import { navLinks } from "@/constants";

import bg from "@/public/assets/bg.jpg";
import Image from "next/image";

const Home = async () => {
  return (
    <div className="wrapper pb-8 lg:pb-10">
      <div className="flex  flex-col gap-20 items-center m-auto justify-center">
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
        <Faq />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
