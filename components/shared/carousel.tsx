import * as React from "react";

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
import thumbimg1 from "@/public/assets/Aiimages/aiimages.jpg";
import thumbimg2 from "@/public/assets/Aiimages/aiimages2.jpg";
import thumbimg3 from "@/public/assets/Aiimages/aiimages3.jpg";
import thumbimg5 from "@/public/assets/Aiimages/aiimages4.jpg";
import thumbimg6 from "@/public/assets/Aiimages/aiimages5.png";
import thumbimg7 from "@/public/assets/Aiimages/Aiimages7.jpg";

import poster1 from "@/public/assets/Posters/Poster1.jpg";
import poster2 from "@/public/assets/Posters/Poster2.jpg";
import poster3 from "@/public/assets/Posters/poster3.jpg";
import poster4 from "@/public/assets/Posters/poster4.jpg";
import poster5 from "@/public/assets/Posters/poster4.png";

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
    <Carousel className="w-full  sm:max-w-sm md:max-w-lg ">
      <CarouselContent className="-mt-1  lg:h-[350px]">
        {thumbnail1.map((img, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-video items-center justify-center p-6">
                  <Image
                    src={img}
                    alt={`Image ${index}`}
                    objectFit="cover"
                    layout="responsive"
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

const thumbnail = [img1, img2, img3, img4, img5];

export function CarouselThumbnail() {
  return (
    <Carousel className="w-full  sm:max-w-sm md:max-w-lg ">
      <CarouselContent className="-mt-1  lg:h-[350px]">
        {thumbnail.map((img, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-video items-center justify-center p-6">
                  <Image
                    src={img}
                    alt={`Image ${index}`}
                    objectFit="cover"
                    layout="responsive"
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

const Poster = [poster1, poster2, poster3, poster4, poster5];

export function CarouselPoster() {
  return (
    <Carousel className="w-full  sm:max-w-sm md:max-w-lg ">
      <CarouselContent className="-mt-1  lg:h-[350px]">
        {Poster.map((img, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-video items-center justify-center p-6">
                  <Image
                    src={img}
                    alt={`Image ${index}`}
                    objectFit="cover"
                    layout="responsive"
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
