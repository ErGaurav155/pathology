"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import img1 from "@/public/assets/Thumbnail/Thumbnail1.jpg";
import img2 from "@/public/assets/Thumbnail/Thumbnail2.jpg";
import img3 from "@/public/assets/Thumbnail/Thumbnail3.jpg";
import img4 from "@/public/assets/Thumbnail/Thumbnail4.png";
import img5 from "@/public/assets/Thumbnail/Thumbnail5.jpg";
import img6 from "@/public/assets/Thumbnail/thumbnail6.png";
import img7 from "@/public/assets/Thumbnail/thumbnail7.png";
import img8 from "@/public/assets/Thumbnail/thumbnail8.jpeg";

import thumbimg1 from "@/public/assets/Aiimages/Aiimages1.png";
import thumbimg2 from "@/public/assets/Aiimages/Aiimages2.png";
import thumbimg3 from "@/public/assets/Aiimages/Aiimages3.png";
import thumbimg5 from "@/public/assets/Aiimages/Aiimages4.png";
import thumbimg6 from "@/public/assets/Aiimages/Aiimages5.png";
import thumbimg7 from "@/public/assets/Aiimages/Aiimages6.jpg";

import poster1 from "@/public/assets/Posters/poster5.jpg";
import poster2 from "@/public/assets/Posters/Poster2.jpg";
import poster3 from "@/public/assets/Posters/poster3.jpg";
import poster4 from "@/public/assets/Posters/poster4.jpg";
import poster5 from "@/public/assets/Posters/poster4.png";
import poster6 from "@/public/assets/Posters/poster7.jpg";

import channel1 from "@/public/assets/channle/channel1.jpg";
import channel2 from "@/public/assets/channle/channel2.jpg";
import channel3 from "@/public/assets/channle/channel3.jpg";
import channel4 from "@/public/assets/channle/channel4.jpg";
import channel5 from "@/public/assets/channle/channel5.jpg";
import channel6 from "@/public/assets/channle/channel6.jpg";

import Image from "next/image";

const thumbnail1 = [
  thumbimg1,
  thumbimg2,
  thumbimg3,
  thumbimg5,
  thumbimg6,
  thumbimg7,
];
export function CarouselAiimages() {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 2500,
        }),
      ]}
      className="w-full  sm:max-w-sm md:max-w-lg "
    >
      <CarouselContent className="-mt-1 ">
        {thumbnail1.map((img, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-video items-center justify-center p-6 ">
                  <Image
                    src={img}
                    alt={`Image ${index}`}
                    sizes="100vw"
                    // Make the image display full width
                    style={{
                      width: "100%",
                      height: "auto",
                    }}
                    priority
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-0 md:-left-8 " />
      <CarouselNext className="right-0 md:-right-8" />
    </Carousel>
  );
}

const thumbnail = [img1, img6, img7, img8, img2, img3, img4, img5];

export function CarouselThumbnail() {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
      className="w-full  sm:max-w-sm md:max-w-lg "
    >
      <CarouselContent className="-mt-1 ">
        {thumbnail.map((img, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-video items-center justify-center p-6">
                  <Image
                    src={img}
                    alt={`Image ${index}`}
                    sizes="100vw"
                    // Make the image display full width
                    style={{
                      width: "100%",
                      height: "auto",
                    }}
                    priority
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-0 md:-left-8 " />
      <CarouselNext className="right-0 md:-right-8" />
    </Carousel>
  );
}

const Poster = [poster1, poster2, poster3, poster4, poster5, poster6];

export function CarouselPoster() {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 1500,
        }),
      ]}
      className="w-full  sm:max-w-sm md:max-w-lg "
    >
      <CarouselContent className="-mt-1 ">
        {Poster.map((img, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-video items-center justify-center p-6">
                  <Image
                    src={img}
                    alt={`Image ${index}`}
                    sizes="100vw"
                    // Make the image display full width
                    style={{
                      width: "100%",
                      height: "auto",
                    }}
                    priority
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-0 md:-left-8 " />
      <CarouselNext className="right-0 md:-right-8" />
    </Carousel>
  );
}
const channel = [channel1, channel2, channel3, channel4, channel5, channel6];

export function CarouselChannel() {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
      className="w-full  sm:max-w-sm md:max-w-lg "
    >
      <CarouselContent className="-mt-1 rounded-lg">
        {channel.map((img, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-video items-center justify-center p-6">
                  <Image
                    src={img}
                    alt={`Image ${index}`}
                    sizes="100vw"
                    // Make the image display full width
                    style={{
                      width: "100%",
                      height: "auto",
                    }}
                    priority
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-0 md:-left-8 " />
      <CarouselNext className="right-0 md:-right-8" />
    </Carousel>
  );
}
