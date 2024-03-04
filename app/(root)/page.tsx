import Roadmap from "@/components/JsmComp/Roadmap";
import Services from "@/components/JsmComp/Services";
import { Collection } from "@/components/shared/Collection";
import { Faq } from "@/components/shared/Faq";
import { Footer } from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import Promo from "@/components/shared/Promotion";

import Benefits from "@/components/shared/Svgs/Benifits";

import { navLinks } from "@/constants";
import { getAllImages } from "@/lib/actions/image.actions";

import bg from "@/public/assets/bg.jpg";
import Image from "next/image";

const Home = async ({ searchParams }: SearchParamProps) => {
  const page = Number(searchParams?.page) || 1;
  const searchQuery = (searchParams?.query as string) || "";

  const images = await getAllImages({ page, searchQuery });

  return (
    <div className="flex  flex-col gap-20 items-center justify-center">
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

      <Benefits />
      <Promo />
      <Services />
      <Roadmap />
      <Faq />
      <Footer />
    </div>
  );
};

export default Home;
