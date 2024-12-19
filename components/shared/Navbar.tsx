"use client";
import React, { useEffect, useState } from "react";
import { Navbar, Collapse, Button, IconButton } from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Logo from "/public/assets/img/file.png";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { SignedIn, SignedOut, useAuth, UserButton } from "@clerk/nextjs";
import { getOwner } from "@/lib/action/appointment.actions";

export function NavBar() {
  const [openNav, setOpenNav] = useState(false);
  const [isOwn, setIsOwn] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();
  const { userId } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      // Add or remove the rounded style based on scroll position
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 540) {
        setOpenNav(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  useEffect(() => {
    const isOwner = async () => {
      const ownerId = await getOwner();
      if (userId !== ownerId) {
        setIsOwn(false);
      } else {
        setIsOwn(true);
      }
    };
    isOwner();
  }, [router, userId]);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-1 sm:mb-2 sm:mt-2 lg:mb-0  lg:mt-0 sm:flex-row items-center justify-evenly sm:gap-1 md:gap-2 lg:gap-6  text-black w-full ">
      <li>
        <a
          href="/"
          className="flex  hover:text-indigo-500 active:text-indigo-500 font-thin  text-md md:font-light md:text-lg"
        >
          Home
        </a>
      </li>

      <li>
        <a
          href="/Doctors"
          className="flex  hover:text-indigo-500 active:text-indigo-500 font-thin  text-md md:font-light md:text-lg"
        >
          About Us
        </a>
      </li>
      <li>
        <a
          href="/PathTest"
          className="flex  hover:text-indigo-500 active:text-indigo-500 font-thin  text-md md:font-light md:text-lg"
        >
          Tests
        </a>
      </li>
      <li>
        <a
          href="/contactUs"
          className="flex  hover:text-indigo-500 active:text-indigo-500 font-thin  text-md md:font-light md:text-lg"
        >
          ContactUs
        </a>
      </li>
    </ul>
  );

  return (
    <Navbar
      className={`sm:px-1 md:px-8 max-w-7xl mx-auto sticky top-0 z-10 transition-all duration-300 ${
        isScrolled ? "rounded-lg shadow-md" : "rounded-none"
      }`}
    >
      <div className="flex items-center w-full justify-between text-blue-gray-900">
        <Link
          href="/"
          className=" w-6/12 sm:w-2/12  cursor-pointer py-1.5 font-bold text-xl"
        >
          <Image
            alt="image"
            className="flex-1 object-contain "
            src={Logo}
            width={250}
            height={250}
            priority
          />
        </Link>
        <div className=" hidden sm:flex w-6/12  ">{navList}</div>

        <Button
          size="md"
          color="indigo"
          variant="gradient"
          onClick={() => router.push("/Appointment")}
          className="text-white 
             hidden sm:inline-block
               w-2/12 py-2 px-1 border border-sky-900"
        >
          Appointment
        </Button>

        <SignedIn>
          {isOwn && (
            <Button
              size="md"
              color="white"
              variant="gradient"
              onClick={() => router.push("/admin")}
              className="text-black 
             hidden sm:inline-block border border-black
               w-1/12  py-2 px-1 overflow-hidden"
            >
              Dashboard
            </Button>
          )}
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
        <SignedOut>
          <Button
            size="md"
            color="white"
            variant="gradient"
            onClick={() => router.push("/sign-up")}
            className="text-black 
             hidden sm:inline-block border border-black
               w-1/12  py-2 px-1 "
          >
            Admin
          </Button>
        </SignedOut>

        <IconButton
          variant="text"
          className="w-6/12  sm:hidden "
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        {navList}
        <Button
          fullWidth
          variant="gradient"
          color="indigo"
          size="sm"
          className="border border-sky-900"
          onClick={() => router.push("/Appointment")}
        >
          <span> Appointment</span>
        </Button>

        <SignedIn>
          <Button
            fullWidth
            size="sm"
            color="white"
            variant="gradient"
            onClick={() => router.push("/admin")}
            className="mt-2 border border-black text-black "
          >
            Dashboard
          </Button>
        </SignedIn>
        <SignedOut>
          <Button
            fullWidth
            size="sm"
            color="white"
            variant="gradient"
            onClick={() => router.push("/sign-up")}
            className="mt-2 border border-black text-black "
          >
            Admin
          </Button>
        </SignedOut>
      </Collapse>
    </Navbar>
  );
}
