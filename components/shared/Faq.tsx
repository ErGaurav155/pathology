"use client";

import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { PlusIcon } from "@heroicons/react/24/solid";

import { MinusIcon } from "@heroicons/react/24/outline";
import Header from "./Header";

export function Faq() {
  const [open, setOpen] = React.useState(0);
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(0);

  //   const openDrawer = () => setIsDrawerOpen((prev) => !prev);
  const openDrawer = (value: number) =>
    setIsDrawerOpen(open === value ? 0 : value);

  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);

  return (
    <div className="">
      <Header title="Frequently Asked Questions" />
      <div className="">
        <Accordion
          onClick={() => openDrawer(1)}
          open={open === 1}
          className=" static bg-sky-100 hover:bg-sky-100 font-medium mt-10 flex mb-4 rounded-lg px-4"
        >
          <div className="flex-auto">
            <AccordionHeader
              onClick={() => handleOpen(1)}
              className={`border-b-0  transition-colors ${
                open === 1 ? "text-blue-500 hover:!text-blue-700" : ""
              }`}
            >
              What is Material Tailwind?
            </AccordionHeader>

            <AccordionBody className="pt-0 text-base font-normal">
              We&apos;re not always in the position that we want to be at.
              We&apos;re constantly growing. We&apos;re constantly making
              mistakes. We&apos;re constantly trying to express ourselves and
              actualize our dreams.
            </AccordionBody>
          </div>
          <div className="flex-auto w-20 flex mr-3 mt-3 justify-center ">
            {isDrawerOpen !== 1 ? (
              <PlusIcon className="h-8 w-8 stroke-2 text-left" />
            ) : (
              <MinusIcon className="h-8 w-8 stroke-2 text-left" />
            )}
          </div>
        </Accordion>

        <Accordion
          onClick={() => openDrawer(2)}
          open={open === 2}
          className="static bg-sky-100 hover:bg-sky-100  font-medium  flex mb-4 rounded-lg px-4"
        >
          <div className="flex-auto">
            <AccordionHeader
              onClick={() => handleOpen(2)}
              className={`border-b-0 transition-colors ${
                open === 2 ? "text-blue-500 hover:!text-blue-700" : ""
              }`}
            >
              How to use Material Tailwind?
            </AccordionHeader>
            <AccordionBody className="pt-0 text-base font-normal">
              We&apos;re not always in the position that we want to be at.
              We&apos;re constantly growing. We&apos;re constantly making
              mistakes. We&apos;re constantly trying to express ourselves and
              actualize our dreams.
            </AccordionBody>
          </div>
          <div className="flex-auto w-20 flex mr-3 mt-3 justify-center ">
            {isDrawerOpen !== 2 ? (
              <PlusIcon className="h-8 w-8 stroke-2 text-left" />
            ) : (
              <MinusIcon className="h-8 w-8 stroke-2 text-left" />
            )}
          </div>
        </Accordion>
        <Accordion
          onClick={() => openDrawer(3)}
          open={open === 3}
          className="static bg-sky-100 hover:bg-sky-100  font-medium  flex mb-4 rounded-lg px-4 "
        >
          <div className="flex-auto">
            <AccordionHeader
              onClick={() => handleOpen(3)}
              className={`border-b-0 transition-colors ${
                open === 3 ? "text-blue-500 hover:!text-blue-700" : ""
              }`}
            >
              What can I do with Material Tailwind?
            </AccordionHeader>
            <AccordionBody className="pt-0 text-base font-normal ">
              We&apos;re not always in the position that we want to be at.
              We&apos;re constantly growing. We&apos;re constantly making
              mistakes. We&apos;re constantly trying to express ourselves and
              actualize our dreams.
            </AccordionBody>
          </div>
          <div className="flex-auto w-20 flex mr-3 mt-3 justify-center ">
            {isDrawerOpen !== 3 ? (
              <PlusIcon className="h-8 w-8 stroke-2 " />
            ) : (
              <MinusIcon className="h-8 w-8 stroke-2 " />
            )}
          </div>
        </Accordion>
      </div>
    </div>
  );
}
