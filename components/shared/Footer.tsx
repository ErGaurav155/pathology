"use client";

import { Typography } from "@material-tailwind/react";
import {
  Clock,
  FacebookIcon,
  InstagramIcon,
  LocateIcon,
  MapPin,
  Phone,
  TwitterIcon,
  YoutubeIcon,
} from "lucide-react";
import Image from "next/image";
import InfoComp from "./Info";
import Link from "next/link";

const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <footer className=" w-full max-w-7xl    ">
      <InfoComp />
      <div className=" mt-10     rounded-t-lg flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-gray-900 text-center md:justify-between text-white p-4 md:p-10">
        <Image
          src="/assets/img/file.png"
          alt="logo"
          width={200}
          height={200}
          className=" rounded bg-white"
        />
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <Link
              href="/PathTest"
              color="white"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              href="/contactUs"
              color="white"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Contact Us
            </Link>
          </li>

          <li>
            <Link
              href="/privacy-policy"
              color="white"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link
              href="/TermsandCondition"
              color="white"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Terms & Conditions
            </Link>
          </li>
        </ul>
      </div>

      <div className=" flex w-full flex-col items-center justify-center p-4  md:p-10 md:flex-row md:justify-between bg-gray-900 text-white">
        <Typography
          variant="small"
          className="mb-4 text-center font-normal  md:mb-0"
        >
          &copy; {currentYear}{" "}
          <a href="https://criconai.com">Shrinivas Pathology Lab</a>. All Rights
          Reserved.
        </Typography>
        <div className="flex gap-4  sm:justify-center">
          <Typography
            as="a"
            target="_blank"
            href="https://www.facebook.com/CriconAi/"
          >
            <FacebookIcon className="h-5 w-5" />
          </Typography>
          <Typography
            as="a"
            target="_blank"
            href="https://www.instagram.com/criconai/"
          >
            <InstagramIcon className="h-5 w-5" />
          </Typography>
          <Typography
            as="a"
            target="_blank"
            href="https://twitter.com/CriconAi"
          >
            <TwitterIcon className="h-5 w-5" />
          </Typography>
          <Typography
            as="a"
            target="_blank"
            href="https://www.youtube.com/channel/UC6UCOXsY_Y4Rm7IW34_v9Lg"
          >
            <YoutubeIcon className="h-5 w-5" />
          </Typography>
        </div>
      </div>
    </footer>
  );
}
