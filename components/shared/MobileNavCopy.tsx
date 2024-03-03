"use client";

import React, { useState } from "react";
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
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
} from "@heroicons/react/24/solid";
import {
  ChevronRightIcon,
  ChevronDownIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { MenuSquareIcon } from "lucide-react";

export function MobileNavCopy() {
  const [open, setOpen] = useState(0);

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleOpen = (value: number) => {
    setOpen(open === value ? 0 : value);
  };

  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);

  return (
    <header className="header absolute z-50 top-0 left-0 bg-gray-50 text-gray-600 font-serif ">
      <IconButton variant="text" size="lg" onClick={openDrawer}>
        {isDrawerOpen ? (
          <XMarkIcon color="#32517D" className="h-8 w-8 stroke-2" />
        ) : (
          <MenuSquareIcon color="#32517D" className="h-7 w-7 stroke-2" />
        )}
      </IconButton>
      <Link href="/" className="flex items-center gap-2 md:py-2">
        <Image
          src="/assets/images/logo-text.svg"
          alt="logo"
          width={180}
          height={28}
        />
      </Link>
      <SignedIn>
        <UserButton afterSignOutUrl="/" />
      </SignedIn>

      <Drawer
        open={isDrawerOpen}
        onClose={closeDrawer}
        placement="left"
        className=""
      >
        <Card color="white" shadow={true} className="h-[100vh] w-full p-4">
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
                <ListItem className="focus:bg-sky-100 hover:bg-sky-100 font-medium text-sm">
                  <ListItemPrefix>
                    <UserCircleIcon className="h-5 w-5" />
                  </ListItemPrefix>
                  Home
                </ListItem>
              </Link>
              <Accordion
                open={open === 1}
                icon={
                  <ChevronDownIcon
                    strokeWidth={2.5}
                    className={`mx-auto h-4 w-4 transition-transform ${
                      open === 1 ? "rotate-180" : ""
                    }`}
                  />
                }
              >
                <ListItem className="p-0" selected={open === 1}>
                  <AccordionHeader
                    onClick={() => handleOpen(1)}
                    className="border-b-0 p-3 focus:bg-sky-100 hover:bg-sky-100 font-medium text-sm"
                  >
                    <ListItemPrefix>
                      <PresentationChartBarIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    <Typography
                      color="blue-gray"
                      className="mr-auto font-medium text-sm "
                    >
                      Long Videos
                    </Typography>
                  </AccordionHeader>
                </ListItem>
                <AccordionBody className="py-1">
                  <List className="p-0">
                    <Link
                      onClick={closeDrawer}
                      href="/transformations/add/restore"
                    >
                      <ListItem className="focus:bg-sky-100 hover:bg-sky-100 font-medium text-sm">
                        <ListItemPrefix>
                          <ChevronRightIcon
                            strokeWidth={3}
                            className="h-3 w-5"
                          />
                        </ListItemPrefix>
                        Idea Generator
                      </ListItem>
                    </Link>
                    <Link
                      onClick={closeDrawer}
                      href="/transformations/add/fill"
                    >
                      <ListItem className="focus:bg-sky-100 hover:bg-sky-100 font-medium text-sm">
                        <ListItemPrefix>
                          <ChevronRightIcon
                            strokeWidth={3}
                            className="h-3 w-5"
                          />
                        </ListItemPrefix>
                        Title Generator
                      </ListItem>
                    </Link>
                    <Link
                      onClick={closeDrawer}
                      href="/transformations/add/remove"
                    >
                      <ListItem className="focus:bg-sky-100 hover:bg-sky-100 font-medium text-sm">
                        <ListItemPrefix>
                          <ChevronRightIcon
                            strokeWidth={3}
                            className="h-3 w-5"
                          />
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
                      <ShoppingBagIcon className="h-5 w-5" />
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
                    <Link
                      onClick={closeDrawer}
                      href="/transformations/add/recolor"
                    >
                      <ListItem className="focus:bg-sky-100 hover:bg-sky-100 font-medium text-sm">
                        <ListItemPrefix>
                          <ChevronRightIcon
                            strokeWidth={3}
                            className="h-3 w-5"
                          />
                        </ListItemPrefix>
                        Idea Generator
                      </ListItem>
                    </Link>
                    <Link
                      onClick={closeDrawer}
                      href="/transformations/add/removeBackground"
                    >
                      <ListItem className="focus:bg-sky-100 hover:bg-sky-100 font-medium text-sm">
                        <ListItemPrefix>
                          <ChevronRightIcon
                            strokeWidth={3}
                            className="h-3 w-5"
                          />
                        </ListItemPrefix>
                        Title Generator
                      </ListItem>
                    </Link>
                  </List>
                </AccordionBody>
              </Accordion>
              <hr className="my-2 border-blue-gray-50" />
            </div>
            <SignedIn>
              <div className="mb-7">
                <Link onClick={closeDrawer} href="/profile">
                  <ListItem className="focus:bg-sky-100 hover:bg-sky-100 font-medium text-sm">
                    <ListItemPrefix>
                      <InboxIcon className="h-5 w-5" />
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

                <Link onClick={closeDrawer} href="/credits">
                  <ListItem className="focus:bg-sky-100 hover:bg-sky-100 font-medium text-sm">
                    <ListItemPrefix>
                      <Cog6ToothIcon className="h-5 w-5" />
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
          </List>

          <SignedOut>
            <Button
              asChild
              className="mb-10 button bg-purple-gradient bg-cover"
            >
              <Link href="/sign-in">Login</Link>
            </Button>
          </SignedOut>
        </Card>
      </Drawer>
    </header>
  );
}
