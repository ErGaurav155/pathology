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
  CarouselChannel,
  CarouselPoster,
  CarouselThumbnail,
} from "@/components/shared/carousel";
import { Button } from "@/components/ui/button";
import { CheckBadgeIcon } from "@heroicons/react/24/outline";

import { ArrowBigRight, RocketIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const HowToUse = async () => {
  return (
    <div className="wrapper pb-8 lg:pb-10">
      <Button className="text-white bg-green-800 hover:bg-[#1c7429] rounded-md self-start w-full  cursor-default  max-h-min  mt-2 overflow-hidden">
        <Link
          href={"/credits"}
          className="flex animate-scroll-left whitespace-nowrap "
        >
          Get
          <span className="text-yellow-500"> &nbsp;250 Free &nbsp;</span>
          Credits For First 100 premium package purchase &nbsp;
          <RocketIcon color="yellow" />
        </Link>
      </Button>

      <div className="flex  flex-col gap-10 items-center m-auto justify-center">
        <section className="bg-[#FCF8F1] bg-opacity-30 pt-4">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
              <div>
                <h1 className="mt-4 text-3xl font-bold text-black lg:mt-8 sm:text-3xl md:text-4xl xl:text-6xl">
                  How To Use Criconai
                </h1>
                <p className="mt-4 text-base text-black lg:mt-8 sm:text-xl">
                  Step-By-Step Procedure For Content Creation
                </p>

                <Link
                  href="/criconai/longvid/idea"
                  className="inline-flex items-center px-6 py-4 mt-2 font-semibold text-white transition-all duration-200 bg-[#73257a] rounded-full lg:mt-3 hover:bg-[#bb76c2]  "
                  role="button"
                >
                  Start for free
                  <ArrowBigRight />
                </Link>
              </div>

              <div className="w-full">
                <Image
                  className="rounded-lg overflow-hidden"
                  src="/assets/Roadmap.webp"
                  height={869}
                  width={1139}
                  alt="carousel"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <div className="flex flex-col gap-5">
          <section className="bg-[#7e7c77] bg-opacity-30  rounded-lg">
            <div className=" mx-auto max-w-7xl ">
              <div className="grid items-center grid-cols-1 gap-8 lg:gap-12 lg:grid-cols-2 p-8">
                <div className="p-3 flex flex-col  gap-2">
                  <h1 className=" text-base text-center text-black md:text-lg">
                    Step 1
                  </h1>

                  <p className="text-base text-black lg:mt-8 sm:text-2xl text-center ">
                    Generate Trending Video Ideas For Your Niche
                  </p>
                  <div className="flex items-center justify-center">
                    <Link
                      href="/criconai/longvid/idea"
                      className="inline-flex items-center justify-center  p-2 mt-2 font-small lg:font-semibold text-white transition-all duration-200 bg-[#3a3ccf] rounded-xl lg:mt-3 hover:bg-[#4c8eeb]  "
                      role="button"
                    >
                      Get Ideas
                    </Link>
                  </div>
                </div>

                <div className="w-full  flex items-center justify-center">
                  <Image
                    className="rounded-lg overflow-hidden"
                    src="/assets/vidTools/VidIdea.jpg"
                    height={300}
                    width={213}
                    alt="carousel"
                    priority
                  />
                </div>
              </div>
            </div>
          </section>
          <section className="bg-[#7e7c77] bg-opacity-30 p-4 rounded-lg">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
              <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
                <div className="p-3 lg:hidden ">
                  <h1 className=" text-base text-center text-black md:text-lg">
                    Step 2
                  </h1>

                  <p className="text-base text-black lg:mt-8 sm:text-2xl text-center ">
                    Generate Video Script For Video Idea
                  </p>
                  <div className="flex items-center justify-center">
                    <Link
                      href="/criconai/longvid/script"
                      className="inline-flex items-center justify-center  p-2 mt-2 font-small lg:font-semibold text-white transition-all duration-200 bg-[#3a3ccf] rounded-xl lg:mt-3 hover:bg-[#4c8eeb]  "
                      role="button"
                    >
                      Get Script
                    </Link>
                  </div>
                </div>
                <div className="w-full  flex items-center justify-center">
                  <Image
                    className="rounded-lg overflow-hidden"
                    src="/assets/vidTools/VidScript.jpg"
                    height={300}
                    width={213}
                    alt="carousel"
                    priority
                  />
                </div>
                <div className="p-3 hidden lg:block ">
                  <h1 className=" text-base text-center text-black md:text-lg">
                    Step 2
                  </h1>

                  <p className="text-base text-black lg:mt-8 sm:text-2xl text-center ">
                    Generate Video Script For Video Idea
                  </p>
                  <div className="flex items-center justify-center">
                    <Link
                      href="/criconai/longvid/script"
                      className="inline-flex items-center justify-center  p-2 mt-2 font-small lg:font-semibold text-white transition-all duration-200 bg-[#3a3ccf] rounded-xl lg:mt-3 hover:bg-[#4c8eeb]  "
                      role="button"
                    >
                      Get Script
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="bg-[#7e7c77] bg-opacity-30  rounded-lg">
            <div className=" mx-auto max-w-7xl ">
              <div className="grid items-center grid-cols-1 gap-8 lg:gap-12 lg:grid-cols-2 p-8">
                <div className="p-3 flex flex-col  gap-2">
                  <h1 className=" text-base text-center text-black md:text-lg">
                    Step 3
                  </h1>

                  <p className="text-base text-black lg:mt-8 sm:text-2xl text-center ">
                    Generate Audio For Provided Script Dialogue
                  </p>
                  <div className="flex items-center justify-center">
                    <Link
                      href="/criconai/longvid/TexttoAudio"
                      className="inline-flex items-center justify-center  p-2 mt-2 font-small lg:font-semibold text-white transition-all duration-200 bg-[#3a3ccf] rounded-xl lg:mt-3 hover:bg-[#4c8eeb]  "
                      role="button"
                    >
                      Get Audio
                    </Link>
                  </div>
                </div>

                <div className="w-full  flex items-center justify-center">
                  <Image
                    className="rounded-lg overflow-hidden"
                    src="/assets/vidTools/VidAudio.jpg"
                    height={300}
                    width={213}
                    alt="carousel"
                    priority
                  />
                </div>
              </div>
            </div>
          </section>
          <section className="bg-[#7e7c77] bg-opacity-30 p-4 rounded-lg">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
              <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
                <div className="p-3 lg:hidden ">
                  <h1 className=" text-base text-center text-black md:text-lg">
                    Step 4
                  </h1>

                  <p className="text-base text-black lg:mt-8 sm:text-2xl text-center ">
                    Generate BackGround Music According Video Tone
                  </p>
                  <div className="flex items-center justify-center">
                    <Link
                      href="/criconai/longvid/backgroundMusicGen"
                      className="inline-flex items-center justify-center  p-2 mt-2 font-small lg:font-semibold text-white transition-all duration-200 bg-[#3a3ccf] rounded-xl lg:mt-3 hover:bg-[#4c8eeb]  "
                      role="button"
                    >
                      Get BackGround Music
                    </Link>
                  </div>
                </div>
                <div className="w-full  flex items-center justify-center">
                  <Image
                    className="rounded-lg overflow-hidden"
                    src="/assets/vidTools/VidMisc.jpg"
                    height={300}
                    width={213}
                    alt="carousel"
                    priority
                  />
                </div>
                <div className="p-3 hidden lg:block ">
                  <h1 className=" text-base text-center text-black md:text-lg">
                    Step 4
                  </h1>

                  <p className="text-base text-black lg:mt-8 sm:text-2xl text-center ">
                    Generate BackGround Music According Video Tone
                  </p>
                  <div className="flex items-center justify-center">
                    <Link
                      href="/criconai/longvid/backgroundMusicGen"
                      className="inline-flex items-center justify-center  p-2 mt-2 font-small lg:font-semibold text-white transition-all duration-200 bg-[#3a3ccf] rounded-xl lg:mt-3 hover:bg-[#4c8eeb]  "
                      role="button"
                    >
                      Get BackGround Music
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="bg-[#7e7c77] bg-opacity-30  rounded-lg">
            <div className=" mx-auto max-w-7xl ">
              <div className="grid items-center grid-cols-1 gap-8 lg:gap-12 lg:grid-cols-2 p-8">
                <div className="p-3 flex flex-col  gap-2">
                  <h1 className=" text-base text-center text-black md:text-lg">
                    Step 5
                  </h1>

                  <p className="text-base text-black lg:mt-8 sm:text-2xl text-center ">
                    Generate Image Prompt/Ai Images For Explanation In video
                  </p>
                  <div className="flex items-center justify-center">
                    <Link
                      href="/criconai/longvid/prompt"
                      className="inline-flex items-center justify-center  p-2 mt-2 font-small lg:font-semibold text-white transition-all duration-200 bg-[#3a3ccf] rounded-xl lg:mt-3 hover:bg-[#4c8eeb]  "
                      role="button"
                    >
                      Get Prompts
                    </Link>
                  </div>
                </div>

                <div className="w-full  flex items-center justify-center">
                  <Image
                    className="rounded-lg overflow-hidden"
                    src="/assets/vidTools/VidPrompt.jpg"
                    height={300}
                    width={213}
                    alt="carousel"
                    priority
                  />
                </div>
              </div>
            </div>
          </section>
          <section className="bg-[#7e7c77] bg-opacity-30 p-4 rounded-lg">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
              <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
                <div className="p-3 lg:hidden ">
                  <h1 className=" text-base text-center text-black md:text-lg">
                    Step 6
                  </h1>

                  <p className="text-base text-black lg:mt-8 sm:text-2xl text-center ">
                    Generate Thumbnail That Best Explain The Video
                  </p>
                  <div className="flex items-center justify-center">
                    <Link
                      href="/criconai/longvid/thumbnail"
                      className="inline-flex items-center justify-center  p-2 mt-2 font-small lg:font-semibold text-white transition-all duration-200 bg-[#3a3ccf] rounded-xl lg:mt-3 hover:bg-[#4c8eeb]  "
                      role="button"
                    >
                      Get Thumbnail
                    </Link>
                  </div>
                </div>
                <div className="w-full  flex items-center justify-center">
                  <Image
                    className="rounded-lg overflow-hidden"
                    src="/assets/vidTools/VidThumb.jpg"
                    height={300}
                    width={213}
                    alt="carousel"
                    priority
                  />
                </div>
                <div className="p-3 hidden lg:block ">
                  <h1 className=" text-base text-center text-black md:text-lg">
                    Step 6
                  </h1>

                  <p className="text-base text-black lg:mt-8 sm:text-2xl text-center ">
                    Generate Thumbnail That Best Explain The Video
                  </p>
                  <div className="flex items-center justify-center">
                    <Link
                      href="/criconai/longvid/thumbnail"
                      className="inline-flex items-center justify-center  p-2 mt-2 font-small lg:font-semibold text-white transition-all duration-200 bg-[#3a3ccf] rounded-xl lg:mt-3 hover:bg-[#4c8eeb]  "
                      role="button"
                    >
                      Get Thumbnail
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="bg-[#7e7c77] bg-opacity-30  rounded-lg">
            <div className=" mx-auto max-w-7xl ">
              <div className="grid items-center grid-cols-1 gap-8 lg:gap-12 lg:grid-cols-2 p-8">
                <div className="p-3 flex flex-col  gap-2">
                  <h1 className=" text-base text-center text-black md:text-lg">
                    Step 7
                  </h1>

                  <p className="text-base text-black lg:mt-8 sm:text-2xl text-center ">
                    Generate Trending Video Title To Attract Audience
                  </p>
                  <div className="flex items-center justify-center">
                    <Link
                      href="/criconai/longvid/title"
                      className="inline-flex items-center justify-center  p-2 mt-2 font-small lg:font-semibold text-white transition-all duration-200 bg-[#3a3ccf] rounded-xl lg:mt-3 hover:bg-[#4c8eeb]  "
                      role="button"
                    >
                      Get Title
                    </Link>
                  </div>
                </div>

                <div className="w-full  flex items-center justify-center">
                  <Image
                    className="rounded-lg overflow-hidden"
                    src="/assets/vidTools/VidTitle.jpg"
                    height={300}
                    width={213}
                    alt="carousel"
                    priority
                  />
                </div>
              </div>
            </div>
          </section>
          <section className="bg-[#7e7c77] bg-opacity-30 p-4 rounded-lg">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
              <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
                <div className="p-3 lg:hidden ">
                  <h1 className=" text-base text-center text-black md:text-lg">
                    Step 8
                  </h1>

                  <p className="text-base text-black lg:mt-8 sm:text-2xl text-center ">
                    Generate Video Desciption For Video
                  </p>
                  <div className="flex items-center justify-center">
                    <Link
                      href="/criconai/longvid/description"
                      className="inline-flex items-center justify-center  p-2 mt-2 font-small lg:font-semibold text-white transition-all duration-200 bg-[#3a3ccf] rounded-xl lg:mt-3 hover:bg-[#4c8eeb]  "
                      role="button"
                    >
                      Get Description
                    </Link>
                  </div>
                </div>
                <div className="w-full  flex items-center justify-center">
                  <Image
                    className="rounded-lg overflow-hidden"
                    src="/assets/vidTools/VidDesc.jpg"
                    height={300}
                    width={213}
                    alt="carousel"
                    priority
                  />
                </div>
                <div className="p-3 hidden lg:block ">
                  <h1 className=" text-base text-center text-black md:text-lg">
                    Step 8
                  </h1>

                  <p className="text-base text-black lg:mt-8 sm:text-2xl text-center ">
                    Generate Video Desciption For Video
                  </p>
                  <div className="flex items-center justify-center">
                    <Link
                      href="/criconai/longvid/description"
                      className="inline-flex items-center justify-center  p-2 mt-2 font-small lg:font-semibold text-white transition-all duration-200 bg-[#3a3ccf] rounded-xl lg:mt-3 hover:bg-[#4c8eeb]  "
                      role="button"
                    >
                      Get Description
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="bg-[#7e7c77] bg-opacity-30  rounded-lg">
            <div className=" mx-auto max-w-7xl ">
              <div className="grid items-center grid-cols-1 gap-8 lg:gap-12 lg:grid-cols-2 p-8">
                <div className="p-3 flex flex-col  gap-2">
                  <h1 className=" text-base text-center text-black md:text-lg">
                    Step 9
                  </h1>

                  <p className="text-base text-black lg:mt-8 sm:text-2xl text-center ">
                    Generate Trending Video Tags To Rank Video
                  </p>
                  <div className="flex items-center justify-center">
                    <Link
                      href="/criconai/longvid/tags"
                      className="inline-flex items-center justify-center  p-2 mt-2 font-small lg:font-semibold text-white transition-all duration-200 bg-[#3a3ccf] rounded-xl lg:mt-3 hover:bg-[#4c8eeb]  "
                      role="button"
                    >
                      Get Tags
                    </Link>
                  </div>
                </div>

                <div className="w-full flex items-center justify-center">
                  <Image
                    className="rounded-lg overflow-hidden"
                    src="/assets/vidTools/VidTags.jpg"
                    height={300}
                    width={213}
                    alt="carousel"
                    priority
                  />
                </div>
              </div>
            </div>
          </section>
          <section className="bg-[#7e7c77] bg-opacity-30 p-4 rounded-lg">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
              <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
                <div className="p-3 lg:hidden ">
                  <h1 className=" text-base text-center text-black md:text-lg">
                    Step 10
                  </h1>

                  <p className="text-base text-black lg:mt-8 sm:text-2xl text-center ">
                    Generate Trending Video Keywords To Rank Video
                  </p>
                  <div className="flex items-center justify-center">
                    <Link
                      href="/criconai/longvid/keyword"
                      className="inline-flex items-center justify-center  p-2 mt-2 font-small lg:font-semibold text-white transition-all duration-200 bg-[#3a3ccf] rounded-xl lg:mt-3 hover:bg-[#4c8eeb]  "
                      role="button"
                    >
                      Get Keywords
                    </Link>
                  </div>
                </div>
                <div className="w-full  flex items-center justify-center">
                  <Image
                    className="rounded-lg overflow-hidden"
                    src="/assets/vidTools/VidKey.jpg"
                    height={300}
                    width={213}
                    alt="carousel"
                    priority
                  />
                </div>
                <div className="p-3 hidden lg:block ">
                  <h1 className=" text-base text-center text-black md:text-lg">
                    Step 10
                  </h1>

                  <p className="text-base text-black lg:mt-8 sm:text-2xl text-center ">
                    Generate Trending Video Keywords To Rank Video
                  </p>
                  <div className="flex items-center justify-center">
                    <Link
                      href="/criconai/longvid/keyword"
                      className="inline-flex items-center justify-center  p-2 mt-2 font-small lg:font-semibold text-white transition-all duration-200 bg-[#3a3ccf] rounded-xl lg:mt-3 hover:bg-[#4c8eeb]  "
                      role="button"
                    >
                      Get Keywords
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="bg-[#7e7c77] bg-opacity-30  rounded-lg">
            <div className=" mx-auto max-w-7xl ">
              <div className="grid items-center grid-cols-1 gap-8 lg:gap-12 lg:grid-cols-2 p-8">
                <div className="p-3 flex flex-col  gap-2">
                  <h1 className=" text-base text-center text-black md:text-lg">
                    Step 11
                  </h1>

                  <p className="text-base text-black lg:mt-8 sm:text-2xl text-center ">
                    Generate Video Disclaimer To Tell Audience
                  </p>
                  <div className="flex items-center justify-center">
                    <Link
                      href="/criconai/longvid/disclamer"
                      className="inline-flex items-center justify-center  p-2 mt-2 font-small lg:font-semibold text-white transition-all duration-200 bg-[#3a3ccf] rounded-xl lg:mt-3 hover:bg-[#4c8eeb]  "
                      role="button"
                    >
                      Get Disclaimer
                    </Link>
                  </div>
                </div>

                <div className="w-full flex items-center justify-center">
                  <Image
                    className="rounded-lg overflow-hidden"
                    src="/assets/vidTools/VidDisc.jpg"
                    height={300}
                    width={213}
                    alt="carousel"
                    priority
                  />
                </div>
              </div>
            </div>
          </section>
          <section className="bg-[#7e7c77] bg-opacity-30 p-4 rounded-lg">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
              <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
                <div className="p-3 lg:hidden ">
                  <h1 className=" text-base text-center text-black md:text-lg">
                    Step 12
                  </h1>

                  <p className="text-base text-black lg:mt-8 sm:text-2xl text-center ">
                    Generate Video Poll Checking What Audience Want
                  </p>
                  <div className="flex items-center justify-center">
                    <Link
                      href="/criconai/longvid/poll"
                      className="inline-flex items-center justify-center  p-2 mt-2 font-small lg:font-semibold text-white transition-all duration-200 bg-[#3a3ccf] rounded-xl lg:mt-3 hover:bg-[#4c8eeb]  "
                      role="button"
                    >
                      Get Poll
                    </Link>
                  </div>
                </div>
                <div className="w-full   flex items-center justify-center">
                  <Image
                    className="rounded-lg overflow-hidden"
                    src="/assets/vidTools/VidPoll.jpg"
                    height={300}
                    width={213}
                    alt="carousel"
                    priority
                  />
                </div>
                <div className="p-3 hidden lg:block ">
                  <h1 className=" text-base text-center text-black md:text-lg">
                    Step 12
                  </h1>

                  <p className="text-base text-black lg:mt-8 sm:text-2xl text-center ">
                    Generate Video Poll Checking What Audience Want
                  </p>
                  <div className="flex items-center justify-center">
                    <Link
                      href="/criconai/longvid/poll"
                      className="inline-flex items-center justify-center  p-2 mt-2 font-small lg:font-semibold text-white transition-all duration-200 bg-[#3a3ccf] rounded-xl lg:mt-3 hover:bg-[#4c8eeb]  "
                      role="button"
                    >
                      Get Poll
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <Faq />
        <Footer />
      </div>
    </div>
  );
};

export default HowToUse;
