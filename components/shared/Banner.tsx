"use client";
import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { DevicePhoneMobileIcon } from "@heroicons/react/24/outline";
import { Mail, Phone } from "lucide-react";
import StickyWhatsAppButton from "./WhatsApp";

export function Banner() {
  return (
    <Navbar className="mx-auto wrapper2 py-0  rounded-none static">
      <div className="flex items-center justify-between w-full text-blue-gray-900">
        <ul className=" flex w-3/6 flex-row flex-wrap gap-2 md:gap-4 lg:gap-8 lg:mb-0 lg:mt-0  items-center justify-start ">
          <li>
            <a
              href="/Testimonials"
              className="flex items-center hover:text-indigo-500 transition-colors font-thin  text-xs md:font-light md:text-base"
            >
              Testamonials
            </a>
          </li>
          <li>
            <a
              href="/faq"
              className="flex items-center hover:text-indigo-500 transition-colors font-thin  text-xs md:font-light md:text-base"
            >
              FAQ
            </a>
          </li>
          <li>
            <a
              href="/Appointment"
              className="flex items-center hover:text-indigo-500 transition-colors font-thin  text-xs md:font-light md:text-base"
            >
              Home Collection
            </a>
          </li>
          <li>
            <a
              href="/Gallery"
              className="flex items-center hover:text-indigo-500 transition-colors font-thin  text-xs md:font-light md:text-base"
            >
              Gallery
            </a>
          </li>
        </ul>

        <div className="flex w-3/6 flex-col gap-2 sm:flex-row  items-center md:gap-4">
          <div className="flex  items-center gap-2">
            <StickyWhatsAppButton />
          </div>
          <div className="flex   items-center gap-2">
            <div className="flex sm:flex-col  lg:flex-row items-center gap-2">
              <Phone color="#181c9a" strokeWidth={3} size={15} />
              <a
                href="tel:+919324350209"
                className="#2e32b1 hover:text-indigo-900 font-thin  text-xs  md:font-light md:text-sm"
              >
                9324350209
              </a>
            </div>
          </div>
          <div className="flex sm:flex-col lg:flex-row items-center gap-2">
            <Mail color="#181c9a" strokeWidth={3} size={15} />

            <a
              href="mailto:info@mywebsite.com"
              className="#2e32b1 hover:text-indigo-900 font-thin  text-xs md:font-light md:text-sm"
            >
              info@mywebsite.com
            </a>
          </div>
        </div>
      </div>
    </Navbar>
  );
}
