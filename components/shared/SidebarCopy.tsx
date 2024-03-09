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
    <Card className="hidden min-h-screen h-screen bg-gray-50  text-gray-600 lg:flex  w-full max-w-[18rem] p-4 shadow-xl font-sans overflow-y-auto no-scrollbar  shadow-blue-100 ">
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
          CriCo/CriCon
        </Typography>
      </div>

      <List className="flex flex-col justify-between h-full ">
        <div>
          <Link href="/">
            <ListItem className="font-medium hover:bg-sky-100 focus:bg-sky-100 active:bg-sky-100 text-sm">
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
                className="border-b-0 p-3 focus:bg-sky-100 hover:bg-sky-100 active:bg-sky-100 "
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
              <List className="pl-4 ">
                <Link href="/autogen/longvid/idea">
                  <ListItem className="focus:bg-sky-100 p-2 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm">
                    <ListItemPrefix>
                      <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    Idea Generator
                  </ListItem>
                </Link>
                <Link href="/autogen/longvid/title">
                  <ListItem className="focus:bg-sky-100 p-2 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm">
                    <ListItemPrefix>
                      <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    Title
                  </ListItem>
                </Link>
                <Link href="/autogen/longvid/description">
                  <ListItem className="focus:bg-sky-100 p-2 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm">
                    <ListItemPrefix>
                      <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    Desc
                  </ListItem>
                </Link>
                <Link href="/autogen/longvid/tags">
                  <ListItem className="focus:bg-sky-100 p-2 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm">
                    <ListItemPrefix>
                      <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    Tags
                  </ListItem>
                </Link>
                <Link href="/autogen/longvid/script">
                  <ListItem className="focus:bg-sky-100 p-2 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm">
                    <ListItemPrefix>
                      <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    Script
                  </ListItem>
                </Link>
                <Link href="/autogen/longvid/thumbnail">
                  <ListItem className="focus:bg-sky-100 p-2 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm">
                    <ListItemPrefix>
                      <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    Thumbnail
                  </ListItem>
                </Link>
                <Link href="/autogen/longvid/aiimages">
                  <ListItem className="focus:bg-sky-100 p-2 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm">
                    <ListItemPrefix>
                      <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    AiImages
                  </ListItem>
                </Link>
                <Link href="/autogen/longvid/translate">
                  <ListItem className="focus:bg-sky-100 p-2 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm">
                    <ListItemPrefix>
                      <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    script translator
                  </ListItem>
                </Link>
                <Link href="/autogen/longvid/disclamer">
                  <ListItem className="focus:bg-sky-100 p-2 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm">
                    <ListItemPrefix>
                      <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    Disclamer
                  </ListItem>
                </Link>
                <Link href="/autogen/longvid/email">
                  <ListItem className="focus:bg-sky-100 p-2 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm">
                    <ListItemPrefix>
                      <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    Email
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
                className="border-b-0 p-3 focus:bg-sky-100 active:bg-sky-100 hover:bg-sky-100 "
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
              <List className="pl-4">
                <Link href="/autogen/shortvid/idea">
                  <ListItem className="focus:bg-sky-100 p-2 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm">
                    <ListItemPrefix>
                      <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    Video Idea
                  </ListItem>
                </Link>
                <Link href="/autogen/shortvid/title">
                  <ListItem className="focus:bg-sky-100 p-2 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm ">
                    <ListItemPrefix>
                      <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    Title
                  </ListItem>
                </Link>
                <Link href="/autogen/shortvid/description">
                  <ListItem className="focus:bg-sky-100 p-2 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm ">
                    <ListItemPrefix>
                      <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    Description
                  </ListItem>
                </Link>
                <Link href="/autogen/shortvid/tags">
                  <ListItem className="focus:bg-sky-100 p-2 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm">
                    <ListItemPrefix>
                      <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    Tags
                  </ListItem>
                </Link>
                <Link href="/autogen/shortvid/script">
                  <ListItem className="focus:bg-sky-100 p-2 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm">
                    <ListItemPrefix>
                      <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    Script
                  </ListItem>
                </Link>
                <Link href="/autogen/shortvid/thumbnail">
                  <ListItem className="focus:bg-sky-100 p-2 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm">
                    <ListItemPrefix>
                      <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    Thumbnail
                  </ListItem>
                </Link>
                <Link href="/autogen/shortvid/aiimages">
                  <ListItem className="focus:bg-sky-100 p-2 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm">
                    <ListItemPrefix>
                      <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    AiImages
                  </ListItem>
                </Link>
                <Link href="/autogen/shortvid/translate">
                  <ListItem className="focus:bg-sky-100 p-2 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm">
                    <ListItemPrefix>
                      <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    script translator
                  </ListItem>
                </Link>
                <Link href="/autogen/shortvid/slogan">
                  <ListItem className="focus:bg-sky-100 p-2 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm">
                    <ListItemPrefix>
                      <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    Slogan
                  </ListItem>
                </Link>
                <Link href="/autogen/shortvid/facts">
                  <ListItem className="focus:bg-sky-100 p-2 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm">
                    <ListItemPrefix>
                      <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    Facts
                  </ListItem>
                </Link>
                <Link href="/autogen/shortvid/quote">
                  <ListItem className="focus:bg-sky-100 p-2 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm">
                    <ListItemPrefix>
                      <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    Quote
                  </ListItem>
                </Link>
                <Link href="/autogen/shortvid/riddle">
                  <ListItem className="focus:bg-sky-100 p-2 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm">
                    <ListItemPrefix>
                      <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    Riddle
                  </ListItem>
                </Link>
              </List>
            </AccordionBody>
          </Accordion>
          <Accordion
            open={open === 3}
            icon={
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`mx-auto h-4 w-4 transition-transform ${
                  open === 3 ? "rotate-180" : ""
                }`}
              />
            }
          >
            <ListItem className="p-0" selected={open === 3}>
              <AccordionHeader
                onClick={() => handleOpen(3)}
                className="border-b-0 p-3 focus:bg-sky-100  active:bg-sky-100 hover:bg-sky-100 "
              >
                <ListItemPrefix>
                  <DevicePhoneMobileIcon className="h-5 w-5" />
                </ListItemPrefix>
                <Typography
                  color="blue-gray"
                  className="mr-auto font-medium text-sm"
                >
                  Content Writer
                </Typography>
              </AccordionHeader>
            </ListItem>
            <AccordionBody className="py-1">
              <List className="pl-4">
                <Link href="/autogen/contentwriter/idea">
                  <ListItem className="focus:bg-sky-100 p-2 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm">
                    <ListItemPrefix>
                      <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    Idea
                  </ListItem>
                </Link>
                <Link href="/autogen/contentwriter/outline">
                  <ListItem className="focus:bg-sky-100 p-2 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm ">
                    <ListItemPrefix>
                      <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    Outline
                  </ListItem>
                </Link>
                <Link href="/autogen/contentwriter/article">
                  <ListItem className="focus:bg-sky-100 p-2 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm ">
                    <ListItemPrefix>
                      <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    Article
                  </ListItem>
                </Link>
                <Link href="/autogen/contentwriter/blog">
                  <ListItem className="focus:bg-sky-100 p-2 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm">
                    <ListItemPrefix>
                      <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    Blog
                  </ListItem>
                </Link>
                <Link href="/autogen/contentwriter/book">
                  <ListItem className="focus:bg-sky-100 p-2 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm">
                    <ListItemPrefix>
                      <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    Book
                  </ListItem>
                </Link>
                <Link href="/autogen/contentwriter/title">
                  <ListItem className="focus:bg-sky-100 p-2 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm">
                    <ListItemPrefix>
                      <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    Title
                  </ListItem>
                </Link>
                <Link href="/autogen/contentwriter/images">
                  <ListItem className="focus:bg-sky-100 p-2 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm">
                    <ListItemPrefix>
                      <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    AiImages
                  </ListItem>
                </Link>
                <Link href="/autogen/contentwriter/summary">
                  <ListItem className="focus:bg-sky-100 p-2 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm">
                    <ListItemPrefix>
                      <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    Summary
                  </ListItem>
                </Link>
                <Link href="/autogen/contentwriter/expander">
                  <ListItem className="focus:bg-sky-100 p-2 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm">
                    <ListItemPrefix>
                      <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    Expander
                  </ListItem>
                </Link>
                <Link href="/autogen/contentwriter/slogan">
                  <ListItem className="focus:bg-sky-100 p-2 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm">
                    <ListItemPrefix>
                      <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    Slogan
                  </ListItem>
                </Link>
                <Link href="/autogen/contentwriter/translation">
                  <ListItem className="focus:bg-sky-100 p-2 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm">
                    <ListItemPrefix>
                      <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    Translation
                  </ListItem>
                </Link>
                <Link href="/autogen/contentwriter/coverimage">
                  <ListItem className="focus:bg-sky-100 p-2 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm">
                    <ListItemPrefix>
                      <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    Book CoverImage
                  </ListItem>
                </Link>
                <Link href="/autogen/contentwriter/email">
                  <ListItem className="focus:bg-sky-100 p-2 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm">
                    <ListItemPrefix>
                      <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    Email
                  </ListItem>
                </Link>
                <Link href="/autogen/contentwriter/tag">
                  <ListItem className="focus:bg-sky-100 p-2 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm">
                    <ListItemPrefix>
                      <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    Tag
                  </ListItem>
                </Link>
              </List>
            </AccordionBody>
          </Accordion>
          <Accordion
            open={open === 4}
            icon={
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`mx-auto h-4 w-4 transition-transform ${
                  open === 4 ? "rotate-180" : ""
                }`}
              />
            }
          >
            <ListItem className="p-0" selected={open === 4}>
              <AccordionHeader
                onClick={() => handleOpen(4)}
                className="border-b-0 p-3 focus:bg-sky-100 active:bg-sky-100 hover:bg-sky-100 "
              >
                <ListItemPrefix>
                  <DevicePhoneMobileIcon className="h-5 w-5" />
                </ListItemPrefix>
                <Typography
                  color="blue-gray"
                  className="mr-auto font-medium text-sm"
                >
                  Social Media
                </Typography>
              </AccordionHeader>
            </ListItem>
            <AccordionBody className="py-1">
              <List className="pl-4">
                <Link href="/autogen/socialmedia/idea">
                  <ListItem className="focus:bg-sky-100 p-2 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm">
                    <ListItemPrefix>
                      <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    Idea
                  </ListItem>
                </Link>
                <Link href="/autogen/socialmedia/images">
                  <ListItem className="focus:bg-sky-100 p-2 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm ">
                    <ListItemPrefix>
                      <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    Images
                  </ListItem>
                </Link>
                <Link href="/autogen/socialmedia/bio">
                  <ListItem className="focus:bg-sky-100 p-2 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm ">
                    <ListItemPrefix>
                      <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    Bio
                  </ListItem>
                </Link>
                <Link href="/autogen/socialmedia/caption">
                  <ListItem className="focus:bg-sky-100 p-2 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm">
                    <ListItemPrefix>
                      <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    Caption
                  </ListItem>
                </Link>
                <Link href="/autogen/socialmedia/tag">
                  <ListItem className="focus:bg-sky-100 p-2 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm">
                    <ListItemPrefix>
                      <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    Tags
                  </ListItem>
                </Link>
                <Link href="/autogen/socialmedia/description">
                  <ListItem className="focus:bg-sky-100 p-2 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm">
                    <ListItemPrefix>
                      <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    Description
                  </ListItem>
                </Link>
                <Link href="/autogen/socialmedia/comment">
                  <ListItem className="focus:bg-sky-100 p-2 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm">
                    <ListItemPrefix>
                      <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    Comment
                  </ListItem>
                </Link>
                <Link href="/autogen/socialmedia/tweet">
                  <ListItem className="focus:bg-sky-100 p-2 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm">
                    <ListItemPrefix>
                      <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    Tweet
                  </ListItem>
                </Link>
                <Link href="/autogen/socialmedia/avatar">
                  <ListItem className="focus:bg-sky-100 p-2 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm">
                    <ListItemPrefix>
                      <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    Avatar
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
              <ListItem className="focus:bg-sky-100 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm">
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
              <ListItem className="focus:bg-sky-100 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm">
                <ListItemPrefix>
                  <CurrencyRupeeIcon className="h-5 w-5" />
                </ListItemPrefix>
                Buy Credits
              </ListItem>
            </Link>
            <ListItem className="focus:bg-sky-100 hover:bg-sky-100 active:bg-sky-100 font-medium ">
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