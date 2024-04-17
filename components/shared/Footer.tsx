"use client";

import { Typography } from "@material-tailwind/react";
import {
  FacebookIcon,
  GithubIcon,
  Instagram,
  InstagramIcon,
  TwitterIcon,
  YoutubeIcon,
} from "lucide-react";
import Image from "next/image";

const LINKS = [
  {
    title: "Product",
    items: ["Overview", "Features", "Solutions", "Tutorials"],
  },
  {
    title: "Company",
    items: ["About us", "Careers", "Press", "News"],
  },
  {
    title: "Resource",
    items: ["Blog", "Newsletter", "Events", "Help center"],
  },
];

const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <footer className=" w-full">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-gray-50 text-center md:justify-between">
        <div className="flex flex-row flex-wrap items-center justify-center  gap-2 md:py-2 text-3xl font-extrabold text-[#7e3caa]">
          <Image
            src="/assets/images/logo-icon.svg"
            alt="brand"
            className="h-8 w-8"
            width={32}
            height={32}
          />
          CriconAi
        </div>
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              About Us
            </Typography>
          </li>

          <li>
            <Typography
              as="a"
              href="/privacy-policy"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Privacy Policy
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="/TermsandCondition"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Terms & Conditions
            </Typography>
          </li>
        </ul>
      </div>

      <div className="mt-3 flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
        <Typography
          variant="small"
          className="mb-4 text-center font-normal text-blue-gray-900 md:mb-0"
        >
          &copy; {currentYear} <a href="https://Cricon.com">Cricon Ai</a>. All
          Rights Reserved.
        </Typography>
        <div className="flex gap-4 text-blue-gray-900 sm:justify-center">
          <Typography as="a" href="#">
            <FacebookIcon className="h-5 w-5" />
          </Typography>
          <Typography as="a" href="#">
            <InstagramIcon className="h-5 w-5" />
          </Typography>
          <Typography as="a" href="#">
            <TwitterIcon className="h-5 w-5" />
          </Typography>
          <Typography as="a" href="#">
            <GithubIcon className="h-5 w-5" />
          </Typography>
          <Typography as="a" href="#">
            <YoutubeIcon className="h-5 w-5" />
          </Typography>
        </div>
      </div>
    </footer>
  );
}
