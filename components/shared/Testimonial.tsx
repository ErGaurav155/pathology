"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    id: 5,
    name: "Kolis Mullar",
    title: "Modern Service!",
    text: "They provide great service facility consectetur adipisicing elit. Itaque rem, praesentium, iure, ipsum magnam deleniti a vel eos adipisci suscipit fugit placeat.",
    image: "/assets/aboutservice/test-thumb1.jpg",
  },
  {
    id: 6,
    name: "Partho Sarothi",
    title: "Nice Environment!",
    text: "They provide great service facility consectetur adipisicing elit. Itaque rem, praesentium, iure, ipsum magnam deleniti a vel eos adipisci suscipit fugit placeat.",
    image: "/assets/aboutservice/test-thumb4.jpg",
  },
  {
    id: 7,
    name: "Amelia Rohan",
    title: "Highly Professional!",
    text: "The staff is very professional and attentive. My experience was smooth and hassle-free.",
    image: "/assets/aboutservice/test-thumb2.jpg",
  },
  {
    id: 8,
    name: "Michael Smith",
    title: "Quick and Efficient!",
    text: "Got my reports within the promised time. The whole process was seamless and well-organized.",
    image: "/assets/aboutservice/test-thumb3.jpg",
  },
  {
    id: 9,
    name: "Sophia Grace",
    title: "Friendly Staff!",
    text: "The team here is very polite and helpful. They make you feel comfortable during the process.",
    image: "/assets/aboutservice/test-thumb1.jpg",
  },
  {
    id: 10,
    name: "David Johnson",
    title: "Accurate Results!",
    text: "The results were precise and the process was straightforward. Great service overall!",
    image: "/assets/aboutservice/test-thumb4.jpg",
  },
  {
    id: 11,
    name: "Emma Brown",
    title: "Exceptional Care!",
    text: "They ensure you are well taken care of. I was very satisfied with their service.",
    image: "/assets/aboutservice/test-thumb2.jpg",
  },
  {
    id: 12,
    name: "Liam Davis",
    title: "Impressive Facility!",
    text: "The facilities are top-notch with modern equipment. It’s great to see such advancements.",
    image: "/assets/aboutservice/test-thumb3.jpg",
  },
  {
    id: 13,
    name: "Olivia Wilson",
    title: "Reliable Service!",
    text: "A trustworthy team that delivers what they promise. I’m very pleased with the experience.",
    image: "/assets/aboutservice/test-thumb1.jpg",
  },
  {
    id: 14,
    name: "Noah Martinez",
    title: "Affordable and Quality!",
    text: "Excellent service at a reasonable price. I would definitely recommend them to others.",
    image: "/assets/aboutservice/test-thumb4.jpg",
  },
  {
    id: 15,
    name: "Ava Taylor",
    title: "Convenient Process!",
    text: "Booking an appointment was quick and easy. The process was very smooth and efficient.",
    image: "/assets/aboutservice/test-thumb2.jpg",
  },
  {
    id: 16,
    name: "William Moore",
    title: "Timely Delivery!",
    text: "They ensure everything is done on time without compromising on quality. Highly recommended!",
    image: "/assets/aboutservice/test-thumb3.jpg",
  },
];

export function TestimonialSection() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  // Create pairs of testimonials (two per item)
  const testimonialPairs = [];
  for (let i = 0; i < testimonials.length; i += 2) {
    testimonialPairs.push(testimonials.slice(i, i + 2));
  }

  return (
    <section className="w-full py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-gray-800">
            We served over 5000+ Patients
          </h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto my-4"></div>
          <p className="text-lg text-gray-600">
            We are satisfying our customers every day since Last 10+ Years.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <Carousel
          plugins={[plugin.current]}
          className="w-full "
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {testimonialPairs.map((pair, index) => (
              <CarouselItem
                key={index}
                className="flex gap-4 items-start justify-center "
              >
                {/* First Testimonial in Pair */}
                <div className="p-1 flex-auto ">
                  <Card className="border-none py-10">
                    <CardContent className="bg-white flex flex-col items-start justify-center space-x-6 p-6">
                      <div className="flex gap-4 items-center justify-start">
                        <div className="w-20 h-20 rounded-full overflow-hidden">
                          <Image
                            src={pair[0].image}
                            alt={`Testimonial ${pair[0].id}`}
                            width={80}
                            height={80}
                            priority
                          />
                        </div>
                        <div>
                          <h4 className="text-xl font-semibold text-gray-800">
                            {pair[0].title}
                          </h4>
                          <span className="text-sm text-gray-500">
                            {pair[0].name}
                          </span>
                        </div>
                      </div>
                      <p className="mt-4 text-gray-600">{pair[0].text}</p>
                    </CardContent>
                  </Card>
                </div>

                {/* Second Testimonial in Pair */}
                {pair[1] && (
                  <div className="hidden  md:flex  p-1 flex-auto ">
                    <Card className="border-none py-10">
                      <CardContent className="bg-white flex flex-col items-start justify-center space-x-6 p-6  ">
                        <div className="flex gap-4 items-center justify-start">
                          <div className="w-20 h-20 rounded-full overflow-hidden">
                            <Image
                              src={pair[1].image}
                              alt={`Testimonial ${pair[1].id}`}
                              width={80}
                              height={80}
                              priority
                            />
                          </div>
                          <div>
                            <h4 className="text-xl font-semibold text-gray-800">
                              {pair[1].title}
                            </h4>
                            <span className="text-sm text-gray-500">
                              {pair[1].name}
                            </span>
                          </div>
                        </div>
                        <p className="mt-4 text-gray-600">{pair[1].text}</p>
                      </CardContent>
                    </Card>
                  </div>
                )}
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2 text-gray-600" />
          <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2 text-gray-600" />
        </Carousel>
      </div>
    </section>
  );
}

export default TestimonialSection;
