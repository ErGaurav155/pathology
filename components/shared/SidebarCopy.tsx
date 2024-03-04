"use client";

import React from "react";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Button } from "../ui/button";
import Link from "next/link";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

import {
  ChevronRightIcon,
  ChevronDownIcon,
  HomeIcon,
  UserIcon,
  CurrencyRupeeIcon,
  DevicePhoneMobileIcon,
  TvIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

export function SidebarWithLogo() {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value: number) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <Card className="hidden h-screen bg-gray-50  text-gray-600 lg:flex  w-full max-w-[18rem] p-4 shadow-xl font-sans  shadow-blue-100 ">
      <div className="mb-2 flex items-center gap-4 p-4">
        <Image
          src="/assets/images/logo-icon.svg"
          alt="brand"
          className="h-8 w-8"
          width={32}
          height={32}
        />
        <Typography
          className="font-normal hover:font-medium"
          variant="h5"
          color="blue-gray"
        >
          AutoZen
        </Typography>
      </div>

      <List className="flex flex-col justify-between h-full ">
        <div>
          <Link href="/">
            <ListItem className="font-medium hover:bg-sky-100 focus:bg-sky-100 text-sm">
              <ListItemPrefix>
                <HomeIcon className="h-5 w-5" />
              </ListItemPrefix>
              Home
            </ListItem>
          </Link>
          <Accordion
            open={open === 1}
            icon={
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`mx-auto h-4 w-4 transition-transform  ${
                  open === 1 ? "rotate-180" : ""
                }`}
              />
            }
          >
            <ListItem className="p-0 " selected={open === 1}>
              <AccordionHeader
                onClick={() => handleOpen(1)}
                className="border-b-0 p-3 focus:bg-sky-100 hover:bg-sky-100 "
              >
                <ListItemPrefix>
                  <TvIcon className="h-5 w-5" />
                </ListItemPrefix>
                <Typography
                  color="blue-gray"
                  className="mr-auto text-sm font-medium"
                >
                  Long Videos
                </Typography>
              </AccordionHeader>
            </ListItem>
            <AccordionBody className="py-1 ">
              <List className="p-0">
                <Link href="/transformations/add/restore">
                  <ListItem className="focus:bg-sky-100 hover:bg-sky-100 font-medium text-sm">
                    <ListItemPrefix>
                      <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    Idea Generator
                  </ListItem>
                </Link>
                <Link href="/transformations/add/fill">
                  <ListItem className="focus:bg-sky-100 hover:bg-sky-100 font-medium text-sm">
                    <ListItemPrefix>
                      <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    Title Generator
                  </ListItem>
                </Link>
                <Link href="/transformations/add/remove">
                  <ListItem className="focus:bg-sky-100 hover:bg-sky-100 font-medium text-sm">
                    <ListItemPrefix>
                      <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    Desc Generator
                  </ListItem>
                </Link>
              </List>
            </AccordionBody>
          </Accordion>
          <Accordion
            open={open === 2}
            icon={
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`mx-auto h-4 w-4 transition-transform ${
                  open === 2 ? "rotate-180" : ""
                }`}
              />
            }
          >
            <ListItem className="p-0" selected={open === 2}>
              <AccordionHeader
                onClick={() => handleOpen(2)}
                className="border-b-0 p-3 focus:bg-sky-100 hover:bg-sky-100 "
              >
                <ListItemPrefix>
                  <DevicePhoneMobileIcon className="h-5 w-5" />
                </ListItemPrefix>
                <Typography
                  color="blue-gray"
                  className="mr-auto font-medium text-sm"
                >
                  Short Videos
                </Typography>
              </AccordionHeader>
            </ListItem>
            <AccordionBody className="py-1">
              <List className="p-0">
                <Link href="/transformations/add/recolor">
                  <ListItem className="focus:bg-sky-100 hover:bg-sky-100 font-medium text-sm">
                    <ListItemPrefix>
                      <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    Idea Generator
                  </ListItem>
                </Link>
                <Link href="/transformations/add/removeBackground">
                  <ListItem className="focus:bg-sky-100 hover:bg-sky-100 font-medium text-sm ">
                    <ListItemPrefix>
                      <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    Title Generator
                  </ListItem>
                </Link>
                <Link href="/ai">
                  <ListItem className="focus:bg-sky-100 hover:bg-sky-100 font-medium text-sm ">
                    <ListItemPrefix>
                      <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    prompt Generator
                  </ListItem>
                </Link>
              </List>
            </AccordionBody>
          </Accordion>
        </div>
        <SignedIn>
          <div>
            <hr className="my-2 border-blue-gray-50" />

            <Link href="/profile">
              <ListItem className="focus:bg-sky-100 hover:bg-sky-100 font-medium text-sm">
                <ListItemPrefix>
                  <UserIcon className="h-5 w-5" />
                </ListItemPrefix>
                Profile
                <ListItemSuffix>
                  <Chip
                    value="14"
                    size="sm"
                    variant="ghost"
                    color="blue-gray"
                    className="rounded-full"
                  />
                </ListItemSuffix>
              </ListItem>
            </Link>
            <Link href="/credits">
              <ListItem className="focus:bg-sky-100 hover:bg-sky-100 font-medium text-sm">
                <ListItemPrefix>
                  <CurrencyRupeeIcon className="h-5 w-5" />
                </ListItemPrefix>
                Buy Credits
              </ListItem>
            </Link>
            <ListItem className="focus:bg-sky-100 hover:bg-sky-100 font-medium ">
              <ListItemPrefix>
                <UserButton afterSignOutUrl="/" showName />
              </ListItemPrefix>
            </ListItem>
          </div>
        </SignedIn>
        <SignedOut>
          <Button asChild className="mb-10 button bg-purple-gradient bg-cover">
            <Link href="/sign-in">Login</Link>
          </Button>
        </SignedOut>
      </List>
    </Card>
  );
}
