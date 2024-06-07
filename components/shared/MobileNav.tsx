"use client";

import React, { useEffect, useState } from "react";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Button } from "../ui/button";
import {
  IconButton,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Accordion,
  AccordionHeader,
  AccordionBody,
  Drawer,
  Card,
} from "@material-tailwind/react";
import {
  HomeIcon,
  UserIcon,
  CurrencyRupeeIcon,
  DevicePhoneMobileIcon,
  TvIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronRightIcon,
  ChevronDownIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import {
  InstagramIcon,
  MenuSquareIcon,
  SquarePenIcon,
  YoutubeIcon,
} from "lucide-react";

export function MobileNav() {
  const [open, setOpen] = useState(0);

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [shouldOpenDrawer, setShouldOpenDrawer] = useState(true);
  const handleOpen = (value: number) => {
    setOpen(open === value ? 0 : value);
  };

  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (shouldOpenDrawer) {
        openDrawer();
        handleOpen(1);
        setShouldOpenDrawer(false);
      }
    }, 1000);

    return () => clearTimeout(timer);
  });
  return (
    <header className="header absolute z-50 top-0 left-0 bg-gray-50  text-gray-600 font-serif ">
      <IconButton variant="text" size="lg" onClick={openDrawer}>
        {isDrawerOpen ? (
          <XMarkIcon color="#32517D" className="h-8 w-8 stroke-2" />
        ) : (
          <MenuSquareIcon color="#32517D" className="h-7 w-7 stroke-2" />
        )}
      </IconButton>
      <Link
        href="/"
        className="flex items-center gap-2 md:py-2 font-sans text-3xl font-extrabold text-[#7e3caa]"
      >
        <Image
          src="/assets/images/logo.png"
          alt="logo"
          width={200}
          height={200}
        />
      </Link>
      <SignedIn>
        <UserButton afterSignOutUrl="/" />
      </SignedIn>
      <SignedOut>
        <Button asChild className="ml-2 button bg-purple-gradient bg-cover">
          <Link href="/sign-in">Login</Link>
        </Button>
      </SignedOut>

      <Drawer
        open={isDrawerOpen}
        onClose={closeDrawer}
        placement="left"
        className=""
      >
        <Card
          color="white"
          shadow={true}
          className="h-[100vh] min-h-screen max-w-[20rem] shadow-xl overflow-y-auto no-scrollbar  shadow-blue-100  w-full p-4"
        >
          <div className="mb-2 flex items-center gap-4 ">
            <IconButton variant="text" size="lg" onClick={closeDrawer}>
              {isDrawerOpen ? (
                <XMarkIcon color="#32517D" className="h-8 w-8 stroke-2" />
              ) : (
                <MenuSquareIcon color="#32517D" className="h-7 w-7 stroke-2" />
              )}
            </IconButton>
            <Typography
              className="font-medium text-sm"
              variant="h5"
              color="blue-gray"
            >
              Menu
            </Typography>
          </div>

          <List className="flex flex-col justify-between h-full ">
            <div>
              <Link onClick={closeDrawer} href="/">
                <ListItem className="font-medium hover:bg-sky-100 focus:bg-sky-100 active:bg-sky-100 text-sm">
                  <ListItemPrefix>
                    <YoutubeIcon className="h-5 w-5" />
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
                  <List className="p-0">
                    <Link onClick={closeDrawer} href="/criconai/longvid/idea">
                      <ListItem className="focus:bg-sky-100 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm">
                        <ListItemPrefix>
                          <ChevronRightIcon
                            strokeWidth={3}
                            className="h-3 w-5"
                          />
                        </ListItemPrefix>
                        Idea Generator
                      </ListItem>
                    </Link>
                    <Link onClick={closeDrawer} href="/criconai/longvid/all">
                      <ListItem className="focus:bg-sky-100 p-2 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm">
                        <ListItemPrefix>
                          <ChevronRightIcon
                            strokeWidth={3}
                            className="h-3 w-5"
                          />
                        </ListItemPrefix>
                        All-in-One
                      </ListItem>
                    </Link>
                    <Link onClick={closeDrawer} href="/criconai/longvid/title">
                      <ListItem className="focus:bg-sky-100 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm">
                        <ListItemPrefix>
                          <ChevronRightIcon
                            strokeWidth={3}
                            className="h-3 w-5"
                          />
                        </ListItemPrefix>
                        Title
                      </ListItem>
                    </Link>
                    <Link
                      onClick={closeDrawer}
                      href="/criconai/longvid/description"
                    >
                      <ListItem className="focus:bg-sky-100 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm">
                        <ListItemPrefix>
                          <ChevronRightIcon
                            strokeWidth={3}
                            className="h-3 w-5"
                          />
                        </ListItemPrefix>
                        Desc
                      </ListItem>
                    </Link>
                    <Link onClick={closeDrawer} href="/criconai/longvid/tags">
                      <ListItem className="focus:bg-sky-100 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm">
                        <ListItemPrefix>
                          <ChevronRightIcon
                            strokeWidth={3}
                            className="h-3 w-5"
                          />
                        </ListItemPrefix>
                        Tags
                      </ListItem>
                    </Link>
                    <Link
                      onClick={closeDrawer}
                      href="/criconai/longvid/keyword"
                    >
                      <ListItem className="focus:bg-sky-100 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm">
                        <ListItemPrefix>
                          <ChevronRightIcon
                            strokeWidth={3}
                            className="h-3 w-5"
                          />
                        </ListItemPrefix>
                        keyword
                      </ListItem>
                    </Link>
                    <Link onClick={closeDrawer} href="/criconai/longvid/script">
                      <ListItem className="focus:bg-sky-100 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm">
                        <ListItemPrefix>
                          <ChevronRightIcon
                            strokeWidth={3}
                            className="h-3 w-5"
                          />
                        </ListItemPrefix>
                        Script
                      </ListItem>
                    </Link>
                    <Link onClick={closeDrawer} href="/criconai/longvid/poll">
                      <ListItem className="focus:bg-sky-100 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm">
                        <ListItemPrefix>
                          <ChevronRightIcon
                            strokeWidth={3}
                            className="h-3 w-5"
                          />
                        </ListItemPrefix>
                        Poll Generation
                      </ListItem>
                    </Link>
                    <Link
                      onClick={closeDrawer}
                      href="/criconai/longvid/thumbnail"
                    >
                      <ListItem className="focus:bg-sky-100 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm">
                        <ListItemPrefix>
                          <ChevronRightIcon
                            strokeWidth={3}
                            className="h-3 w-5"
                          />
                        </ListItemPrefix>
                        Thumbnail
                      </ListItem>
                    </Link>
                    <Link
                      onClick={closeDrawer}
                      href="/criconai/longvid/aiimages"
                    >
                      <ListItem className="focus:bg-sky-100 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm">
                        <ListItemPrefix>
                          <ChevronRightIcon
                            strokeWidth={3}
                            className="h-3 w-5"
                          />
                        </ListItemPrefix>
                        AiImages
                      </ListItem>
                    </Link>
                    <Link onClick={closeDrawer} href="/criconai/longvid/prompt">
                      <ListItem className="focus:bg-sky-100 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm">
                        <ListItemPrefix>
                          <ChevronRightIcon
                            strokeWidth={3}
                            className="h-3 w-5"
                          />
                        </ListItemPrefix>
                        Prompt Generation
                      </ListItem>
                    </Link>
                    <Link
                      onClick={closeDrawer}
                      href="/criconai/longvid/translate"
                    >
                      <ListItem className="focus:bg-sky-100 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm">
                        <ListItemPrefix>
                          <ChevronRightIcon
                            strokeWidth={3}
                            className="h-3 w-5"
                          />
                        </ListItemPrefix>
                        script translator
                      </ListItem>
                    </Link>
                    <Link
                      onClick={closeDrawer}
                      href="/criconai/longvid/TexttoAudio"
                    >
                      <ListItem className="focus:bg-sky-100 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm">
                        <ListItemPrefix>
                          <ChevronRightIcon
                            strokeWidth={3}
                            className="h-3 w-5"
                          />
                        </ListItemPrefix>
                        Text-to-Audio
                      </ListItem>
                    </Link>
                    <Link
                      onClick={closeDrawer}
                      href="/criconai/longvid/audiotoAudio"
                    >
                      <ListItem className="focus:bg-sky-100 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm">
                        <ListItemPrefix>
                          <ChevronRightIcon
                            strokeWidth={3}
                            className="h-3 w-5"
                          />
                        </ListItemPrefix>
                        Audio-to-Audio
                      </ListItem>
                    </Link>
                    <Link
                      onClick={closeDrawer}
                      href="/criconai/longvid/disclamer"
                    >
                      <ListItem className="focus:bg-sky-100 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm">
                        <ListItemPrefix>
                          <ChevronRightIcon
                            strokeWidth={3}
                            className="h-3 w-5"
                          />
                        </ListItemPrefix>
                        Disclamer
                      </ListItem>
                    </Link>
                    <Link
                      onClick={closeDrawer}
                      href="/criconai/longvid/backgroundMusicGen"
                    >
                      <ListItem className="focus:bg-sky-100 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm">
                        <ListItemPrefix>
                          <ChevronRightIcon
                            strokeWidth={3}
                            className="h-3 w-5"
                          />
                        </ListItemPrefix>
                        backgroundMusicGen
                      </ListItem>
                    </Link>
                    <Link onClick={closeDrawer} href="/criconai/longvid/email">
                      <ListItem className="focus:bg-sky-100 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm">
                        <ListItemPrefix>
                          <ChevronRightIcon
                            strokeWidth={3}
                            className="h-3 w-5"
                          />
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
                  <List className="p-0">
                    <Link onClick={closeDrawer} href="/criconai/shortvid/idea">
                      <ListItem className="focus:bg-sky-100 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm">
                        <ListItemPrefix>
                          <ChevronRightIcon
                            strokeWidth={3}
                            className="h-3 w-5"
                          />
                        </ListItemPrefix>
                        Video Idea
                      </ListItem>
                    </Link>
                    <Link onClick={closeDrawer} href="/criconai/shortvid/all">
                      <ListItem className="focus:bg-sky-100 p-2 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm">
                        <ListItemPrefix>
                          <ChevronRightIcon
                            strokeWidth={3}
                            className="h-3 w-5"
                          />
                        </ListItemPrefix>
                        All-in-One
                      </ListItem>
                    </Link>
                    <Link onClick={closeDrawer} href="/criconai/shortvid/title">
                      <ListItem className="focus:bg-sky-100 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm ">
                        <ListItemPrefix>
                          <ChevronRightIcon
                            strokeWidth={3}
                            className="h-3 w-5"
                          />
                        </ListItemPrefix>
                        Title
                      </ListItem>
                    </Link>
                    <Link
                      onClick={closeDrawer}
                      href="/criconai/shortvid/description"
                    >
                      <ListItem className="focus:bg-sky-100 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm ">
                        <ListItemPrefix>
                          <ChevronRightIcon
                            strokeWidth={3}
                            className="h-3 w-5"
                          />
                        </ListItemPrefix>
                        Description
                      </ListItem>
                    </Link>
                    <Link onClick={closeDrawer} href="/criconai/shortvid/tags">
                      <ListItem className="focus:bg-sky-100 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm">
                        <ListItemPrefix>
                          <ChevronRightIcon
                            strokeWidth={3}
                            className="h-3 w-5"
                          />
                        </ListItemPrefix>
                        Tags
                      </ListItem>
                    </Link>
                    <Link
                      onClick={closeDrawer}
                      href="/criconai/shortvid/script"
                    >
                      <ListItem className="focus:bg-sky-100 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm">
                        <ListItemPrefix>
                          <ChevronRightIcon
                            strokeWidth={3}
                            className="h-3 w-5"
                          />
                        </ListItemPrefix>
                        Script
                      </ListItem>
                    </Link>
                    <Link onClick={closeDrawer} href="/criconai/shortvid/poll">
                      <ListItem className="focus:bg-sky-100 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm">
                        <ListItemPrefix>
                          <ChevronRightIcon
                            strokeWidth={3}
                            className="h-3 w-5"
                          />
                        </ListItemPrefix>
                        Poll Generation
                      </ListItem>
                    </Link>
                    <Link
                      onClick={closeDrawer}
                      href="/criconai/shortvid/thumbnail"
                    >
                      <ListItem className="focus:bg-sky-100 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm">
                        <ListItemPrefix>
                          <ChevronRightIcon
                            strokeWidth={3}
                            className="h-3 w-5"
                          />
                        </ListItemPrefix>
                        Thumbnail
                      </ListItem>
                    </Link>
                    <Link
                      onClick={closeDrawer}
                      href="/criconai/shortvid/aiimages"
                    >
                      <ListItem className="focus:bg-sky-100 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm">
                        <ListItemPrefix>
                          <ChevronRightIcon
                            strokeWidth={3}
                            className="h-3 w-5"
                          />
                        </ListItemPrefix>
                        AiImages
                      </ListItem>
                    </Link>
                    <Link
                      onClick={closeDrawer}
                      href="/criconai/shortvid/prompt"
                    >
                      <ListItem className="focus:bg-sky-100 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm">
                        <ListItemPrefix>
                          <ChevronRightIcon
                            strokeWidth={3}
                            className="h-3 w-5"
                          />
                        </ListItemPrefix>
                        Prompt Generation
                      </ListItem>
                    </Link>
                    <Link
                      onClick={closeDrawer}
                      href="/criconai/shortvid/translate"
                    >
                      <ListItem className="focus:bg-sky-100 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm">
                        <ListItemPrefix>
                          <ChevronRightIcon
                            strokeWidth={3}
                            className="h-3 w-5"
                          />
                        </ListItemPrefix>
                        script translator
                      </ListItem>
                    </Link>
                    <Link
                      onClick={closeDrawer}
                      href="/criconai/shortvid/TexttoAudio"
                    >
                      <ListItem className="focus:bg-sky-100 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm">
                        <ListItemPrefix>
                          <ChevronRightIcon
                            strokeWidth={3}
                            className="h-3 w-5"
                          />
                        </ListItemPrefix>
                        Text-to-Audio
                      </ListItem>
                    </Link>
                    <Link
                      onClick={closeDrawer}
                      href="/criconai/shortvid/audiotoAudio"
                    >
                      <ListItem className="focus:bg-sky-100 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm">
                        <ListItemPrefix>
                          <ChevronRightIcon
                            strokeWidth={3}
                            className="h-3 w-5"
                          />
                        </ListItemPrefix>
                        Audio-to-Audio
                      </ListItem>
                    </Link>
                    <Link
                      onClick={closeDrawer}
                      href="/criconai/shortvid/backgroundMusicGen"
                    >
                      <ListItem className="focus:bg-sky-100 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm">
                        <ListItemPrefix>
                          <ChevronRightIcon
                            strokeWidth={3}
                            className="h-3 w-5"
                          />
                        </ListItemPrefix>
                        backgroundMusicGen
                      </ListItem>
                    </Link>
                    <Link
                      onClick={closeDrawer}
                      href="/criconai/shortvid/slogan"
                    >
                      <ListItem className="focus:bg-sky-100 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm">
                        <ListItemPrefix>
                          <ChevronRightIcon
                            strokeWidth={3}
                            className="h-3 w-5"
                          />
                        </ListItemPrefix>
                        Slogan
                      </ListItem>
                    </Link>
                    <Link onClick={closeDrawer} href="/criconai/shortvid/facts">
                      <ListItem className="focus:bg-sky-100 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm">
                        <ListItemPrefix>
                          <ChevronRightIcon
                            strokeWidth={3}
                            className="h-3 w-5"
                          />
                        </ListItemPrefix>
                        Facts
                      </ListItem>
                    </Link>
                    <Link onClick={closeDrawer} href="/criconai/shortvid/quote">
                      <ListItem className="focus:bg-sky-100 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm">
                        <ListItemPrefix>
                          <ChevronRightIcon
                            strokeWidth={3}
                            className="h-3 w-5"
                          />
                        </ListItemPrefix>
                        Quote
                      </ListItem>
                    </Link>
                    <Link
                      onClick={closeDrawer}
                      href="/criconai/shortvid/riddle"
                    >
                      <ListItem className="focus:bg-sky-100 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm">
                        <ListItemPrefix>
                          <ChevronRightIcon
                            strokeWidth={3}
                            className="h-3 w-5"
                          />
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
                    className="border-b-0 p-3 focus:bg-sky-100 active:bg-sky-100 hover:bg-sky-100 "
                  >
                    <ListItemPrefix>
                      <SquarePenIcon className="h-5 w-5" />
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
                  <List className="p-0">
                    <Link
                      onClick={closeDrawer}
                      href="/criconai/contentwriter/idea"
                    >
                      <ListItem className="focus:bg-sky-100 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm">
                        <ListItemPrefix>
                          <ChevronRightIcon
                            strokeWidth={3}
                            className="h-3 w-5"
                          />
                        </ListItemPrefix>
                        Idea
                      </ListItem>
                    </Link>
                    <Link
                      onClick={closeDrawer}
                      href="/criconai/contentwriter/all"
                    >
                      <ListItem className="focus:bg-sky-100 p-2 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm">
                        <ListItemPrefix>
                          <ChevronRightIcon
                            strokeWidth={3}
                            className="h-3 w-5"
                          />
                        </ListItemPrefix>
                        All-in-One
                      </ListItem>
                    </Link>
                    <Link
                      onClick={closeDrawer}
                      href="/criconai/contentwriter/outline"
                    >
                      <ListItem className="focus:bg-sky-100 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm ">
                        <ListItemPrefix>
                          <ChevronRightIcon
                            strokeWidth={3}
                            className="h-3 w-5"
                          />
                        </ListItemPrefix>
                        Outline
                      </ListItem>
                    </Link>
                    <Link
                      onClick={closeDrawer}
                      href="/criconai/contentwriter/article"
                    >
                      <ListItem className="focus:bg-sky-100 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm ">
                        <ListItemPrefix>
                          <ChevronRightIcon
                            strokeWidth={3}
                            className="h-3 w-5"
                          />
                        </ListItemPrefix>
                        Article
                      </ListItem>
                    </Link>
                    <Link
                      onClick={closeDrawer}
                      href="/criconai/contentwriter/blog"
                    >
                      <ListItem className="focus:bg-sky-100 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm">
                        <ListItemPrefix>
                          <ChevronRightIcon
                            strokeWidth={3}
                            className="h-3 w-5"
                          />
                        </ListItemPrefix>
                        Blog
                      </ListItem>
                    </Link>
                    <Link
                      onClick={closeDrawer}
                      href="/criconai/contentwriter/book"
                    >
                      <ListItem className="focus:bg-sky-100 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm">
                        <ListItemPrefix>
                          <ChevronRightIcon
                            strokeWidth={3}
                            className="h-3 w-5"
                          />
                        </ListItemPrefix>
                        Book
                      </ListItem>
                    </Link>
                    <Link
                      onClick={closeDrawer}
                      href="/criconai/contentwriter/title"
                    >
                      <ListItem className="focus:bg-sky-100 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm">
                        <ListItemPrefix>
                          <ChevronRightIcon
                            strokeWidth={3}
                            className="h-3 w-5"
                          />
                        </ListItemPrefix>
                        Title
                      </ListItem>
                    </Link>
                    <Link
                      onClick={closeDrawer}
                      href="/criconai/contentwriter/images"
                    >
                      <ListItem className="focus:bg-sky-100 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm">
                        <ListItemPrefix>
                          <ChevronRightIcon
                            strokeWidth={3}
                            className="h-3 w-5"
                          />
                        </ListItemPrefix>
                        AiImages
                      </ListItem>
                    </Link>
                    <Link
                      onClick={closeDrawer}
                      href="/criconai/contentwriter/prompt"
                    >
                      <ListItem className="focus:bg-sky-100 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm">
                        <ListItemPrefix>
                          <ChevronRightIcon
                            strokeWidth={3}
                            className="h-3 w-5"
                          />
                        </ListItemPrefix>
                        Prompt Generation
                      </ListItem>
                    </Link>
                    <Link
                      onClick={closeDrawer}
                      href="/criconai/contentwriter/summary"
                    >
                      <ListItem className="focus:bg-sky-100 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm">
                        <ListItemPrefix>
                          <ChevronRightIcon
                            strokeWidth={3}
                            className="h-3 w-5"
                          />
                        </ListItemPrefix>
                        Summary
                      </ListItem>
                    </Link>
                    <Link
                      onClick={closeDrawer}
                      href="/criconai/contentwriter/expander"
                    >
                      <ListItem className="focus:bg-sky-100 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm">
                        <ListItemPrefix>
                          <ChevronRightIcon
                            strokeWidth={3}
                            className="h-3 w-5"
                          />
                        </ListItemPrefix>
                        Expander
                      </ListItem>
                    </Link>
                    <Link
                      onClick={closeDrawer}
                      href="/criconai/contentwriter/slogan"
                    >
                      <ListItem className="focus:bg-sky-100 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm">
                        <ListItemPrefix>
                          <ChevronRightIcon
                            strokeWidth={3}
                            className="h-3 w-5"
                          />
                        </ListItemPrefix>
                        Slogan
                      </ListItem>
                    </Link>
                    <Link
                      onClick={closeDrawer}
                      href="/criconai/contentwriter/translation"
                    >
                      <ListItem className="focus:bg-sky-100 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm">
                        <ListItemPrefix>
                          <ChevronRightIcon
                            strokeWidth={3}
                            className="h-3 w-5"
                          />
                        </ListItemPrefix>
                        Translation
                      </ListItem>
                    </Link>
                    <Link
                      onClick={closeDrawer}
                      href="/criconai/contentwriter/TexttoAudio"
                    >
                      <ListItem className="focus:bg-sky-100 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm">
                        <ListItemPrefix>
                          <ChevronRightIcon
                            strokeWidth={3}
                            className="h-3 w-5"
                          />
                        </ListItemPrefix>
                        Text-to-Audio
                      </ListItem>
                    </Link>
                    <Link
                      onClick={closeDrawer}
                      href="/criconai/contentwriter/coverimage"
                    >
                      <ListItem className="focus:bg-sky-100 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm">
                        <ListItemPrefix>
                          <ChevronRightIcon
                            strokeWidth={3}
                            className="h-3 w-5"
                          />
                        </ListItemPrefix>
                        Book CoverImage
                      </ListItem>
                    </Link>
                    <Link
                      onClick={closeDrawer}
                      href="/criconai/contentwriter/email"
                    >
                      <ListItem className="focus:bg-sky-100 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm">
                        <ListItemPrefix>
                          <ChevronRightIcon
                            strokeWidth={3}
                            className="h-3 w-5"
                          />
                        </ListItemPrefix>
                        Email
                      </ListItem>
                    </Link>
                    <Link
                      onClick={closeDrawer}
                      href="/criconai/contentwriter/tag"
                    >
                      <ListItem className="focus:bg-sky-100 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm">
                        <ListItemPrefix>
                          <ChevronRightIcon
                            strokeWidth={3}
                            className="h-3 w-5"
                          />
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
                      <InstagramIcon className="h-5 w-5" />
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
                  <List className="p-0">
                    <Link
                      onClick={closeDrawer}
                      href="/criconai/socialmedia/idea"
                    >
                      <ListItem className="focus:bg-sky-100 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm">
                        <ListItemPrefix>
                          <ChevronRightIcon
                            strokeWidth={3}
                            className="h-3 w-5"
                          />
                        </ListItemPrefix>
                        Idea
                      </ListItem>
                    </Link>
                    <Link
                      onClick={closeDrawer}
                      href="/criconai/socialmedia/all"
                    >
                      <ListItem className="focus:bg-sky-100 p-2 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm">
                        <ListItemPrefix>
                          <ChevronRightIcon
                            strokeWidth={3}
                            className="h-3 w-5"
                          />
                        </ListItemPrefix>
                        All-in-One
                      </ListItem>
                    </Link>
                    <Link
                      onClick={closeDrawer}
                      href="/criconai/socialmedia/images"
                    >
                      <ListItem className="focus:bg-sky-100 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm ">
                        <ListItemPrefix>
                          <ChevronRightIcon
                            strokeWidth={3}
                            className="h-3 w-5"
                          />
                        </ListItemPrefix>
                        Images
                      </ListItem>
                    </Link>
                    <Link
                      onClick={closeDrawer}
                      href="/criconai/socialmedia/prompt"
                    >
                      <ListItem className="focus:bg-sky-100 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm ">
                        <ListItemPrefix>
                          <ChevronRightIcon
                            strokeWidth={3}
                            className="h-3 w-5"
                          />
                        </ListItemPrefix>
                        Prompt Generation
                      </ListItem>
                    </Link>
                    <Link
                      onClick={closeDrawer}
                      href="/criconai/socialmedia/bio"
                    >
                      <ListItem className="focus:bg-sky-100 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm ">
                        <ListItemPrefix>
                          <ChevronRightIcon
                            strokeWidth={3}
                            className="h-3 w-5"
                          />
                        </ListItemPrefix>
                        Bio
                      </ListItem>
                    </Link>
                    <Link
                      onClick={closeDrawer}
                      href="/criconai/socialmedia/caption"
                    >
                      <ListItem className="focus:bg-sky-100 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm">
                        <ListItemPrefix>
                          <ChevronRightIcon
                            strokeWidth={3}
                            className="h-3 w-5"
                          />
                        </ListItemPrefix>
                        Caption
                      </ListItem>
                    </Link>
                    <Link
                      onClick={closeDrawer}
                      href="/criconai/socialmedia/tag"
                    >
                      <ListItem className="focus:bg-sky-100 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm">
                        <ListItemPrefix>
                          <ChevronRightIcon
                            strokeWidth={3}
                            className="h-3 w-5"
                          />
                        </ListItemPrefix>
                        Tags
                      </ListItem>
                    </Link>
                    <Link
                      onClick={closeDrawer}
                      href="/criconai/socialmedia/description"
                    >
                      <ListItem className="focus:bg-sky-100 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm">
                        <ListItemPrefix>
                          <ChevronRightIcon
                            strokeWidth={3}
                            className="h-3 w-5"
                          />
                        </ListItemPrefix>
                        Description
                      </ListItem>
                    </Link>
                    <Link
                      onClick={closeDrawer}
                      href="/criconai/socialmedia/poll"
                    >
                      <ListItem className="focus:bg-sky-100 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm">
                        <ListItemPrefix>
                          <ChevronRightIcon
                            strokeWidth={3}
                            className="h-3 w-5"
                          />
                        </ListItemPrefix>
                        Poll Generation
                      </ListItem>
                    </Link>
                    <Link
                      onClick={closeDrawer}
                      href="/criconai/socialmedia/comment"
                    >
                      <ListItem className="focus:bg-sky-100 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm">
                        <ListItemPrefix>
                          <ChevronRightIcon
                            strokeWidth={3}
                            className="h-3 w-5"
                          />
                        </ListItemPrefix>
                        Comment
                      </ListItem>
                    </Link>
                    <Link
                      onClick={closeDrawer}
                      href="/criconai/socialmedia/tweet"
                    >
                      <ListItem className="focus:bg-sky-100 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm">
                        <ListItemPrefix>
                          <ChevronRightIcon
                            strokeWidth={3}
                            className="h-3 w-5"
                          />
                        </ListItemPrefix>
                        Tweet
                      </ListItem>
                    </Link>
                    <Link
                      onClick={closeDrawer}
                      href="/criconai/socialmedia/avatar"
                    >
                      <ListItem className="focus:bg-sky-100 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm">
                        <ListItemPrefix>
                          <ChevronRightIcon
                            strokeWidth={3}
                            className="h-3 w-5"
                          />
                        </ListItemPrefix>
                        Avatar
                      </ListItem>
                    </Link>
                    <Link
                      onClick={closeDrawer}
                      href="/criconai/socialmedia/backgroundMusicGen"
                    >
                      <ListItem className="focus:bg-sky-100 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm">
                        <ListItemPrefix>
                          <ChevronRightIcon
                            strokeWidth={3}
                            className="h-3 w-5"
                          />
                        </ListItemPrefix>
                        backgroundMusicGen
                      </ListItem>
                    </Link>
                  </List>
                </AccordionBody>
              </Accordion>
              <Accordion
                open={open === 5}
                icon={
                  <ChevronDownIcon
                    strokeWidth={2.5}
                    className={`mx-auto h-4 w-4 transition-transform ${
                      open === 5 ? "rotate-180" : ""
                    }`}
                  />
                }
              >
                <ListItem className="p-0" selected={open === 5}>
                  <AccordionHeader
                    onClick={() => handleOpen(5)}
                    className="border-b-0 p-3 focus:bg-sky-100 active:bg-sky-100 hover:bg-sky-100 "
                  >
                    <ListItemPrefix>
                      <CurrencyDollarIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    <Typography
                      color="blue-gray"
                      className="mr-auto font-medium text-sm"
                    >
                      Marketing
                    </Typography>
                  </AccordionHeader>
                </ListItem>
                <AccordionBody className="py-1">
                  <List className="p-0">
                    <Link onClick={closeDrawer} href="/criconai/marketing/all">
                      <ListItem className="focus:bg-sky-100 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm">
                        <ListItemPrefix>
                          <ChevronRightIcon
                            strokeWidth={3}
                            className="h-3 w-5"
                          />
                        </ListItemPrefix>
                        All
                      </ListItem>
                    </Link>
                    <Link
                      onClick={closeDrawer}
                      href="/criconai/marketing/calculator"
                    >
                      <ListItem className="focus:bg-sky-100 p-2 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm">
                        <ListItemPrefix>
                          <ChevronRightIcon
                            strokeWidth={3}
                            className="h-3 w-5"
                          />
                        </ListItemPrefix>
                        Paid Promotion Cal
                      </ListItem>
                    </Link>
                    <Link
                      onClick={closeDrawer}
                      href="/criconai/marketing/finder"
                    >
                      <ListItem className="focus:bg-sky-100 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm ">
                        <ListItemPrefix>
                          <ChevronRightIcon
                            strokeWidth={3}
                            className="h-3 w-5"
                          />
                        </ListItemPrefix>
                        Sponcership Finder
                      </ListItem>
                    </Link>
                    <Link
                      onClick={closeDrawer}
                      href="/criconai/marketing/email"
                    >
                      <ListItem className="focus:bg-sky-100 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm ">
                        <ListItemPrefix>
                          <ChevronRightIcon
                            strokeWidth={3}
                            className="h-3 w-5"
                          />
                        </ListItemPrefix>
                        Promotion Email
                      </ListItem>
                    </Link>
                    <Link
                      onClick={closeDrawer}
                      href="/criconai/marketing/promotion"
                    >
                      <ListItem className="focus:bg-sky-100 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm">
                        <ListItemPrefix>
                          <ChevronRightIcon
                            strokeWidth={3}
                            className="h-3 w-5"
                          />
                        </ListItemPrefix>
                        Promotion Helper
                      </ListItem>
                    </Link>
                  </List>
                </AccordionBody>
              </Accordion>
            </div>
            <SignedIn>
              <div>
                <hr className="my-2 border-blue-gray-50" />

                <Link onClick={closeDrawer} href="/profile">
                  <ListItem className="focus:bg-sky-100 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm">
                    <ListItemPrefix>
                      <UserIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    Profile
                  </ListItem>
                </Link>
                <Link onClick={closeDrawer} href="/credits">
                  <ListItem className="focus:bg-sky-100 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm">
                    <ListItemPrefix>
                      <CurrencyRupeeIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    Buy Credits
                  </ListItem>
                </Link>
                <ListItem className="focus:bg-sky-100 hover:bg-sky-100 active:bg-sky-100 font-medium ">
                  <UserButton afterSignOutUrl="/" showName />
                </ListItem>
              </div>
            </SignedIn>
            <SignedOut>
              <Button
                asChild
                className="mb-10 button bg-purple-gradient bg-cover"
              >
                <Link href="/sign-in">Login</Link>
              </Button>
            </SignedOut>
          </List>
        </Card>
      </Drawer>
    </header>
  );
}
