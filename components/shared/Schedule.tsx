import { BriefcaseIcon } from "@heroicons/react/24/outline";
import {
  AlarmClock,
  ArrowBigLeft,
  ArrowRight,
  Briefcase,
  Notebook,
} from "lucide-react";
import Link from "next/link";
import React from "react";

const Schedule = () => {
  return (
    <div className="relative w-full  z-2 no-scrollbar">
      <section className="md:absolute   md:-top-52  lg:-top-60  ">
        <div className="container mx-auto w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-5  w-full items-center justify-evenly ">
            <div className="relative   bg-blue-600 rounded-lg p-4   transform transition hover:-translate-y-2">
              <div className="absolute text-white text-[110px] opacity-20 -right-5 -bottom-5 transition-all group-hover:opacity-30">
                <BriefcaseIcon className="size-32 " />
              </div>
              <div className="relative flex flex-col gap-3 items-start justify-center text-wrap z-10 ">
                <span className="text-white font-normal text-sm md:text-base">
                  Emegency Cases
                </span>
                <h4 className="text-white font-semibold text-sm md:text-base lg:text-lg capitalize">
                  1-800-700-6200
                </h4>
                <p className="text-white h-20  font-normal text-xs md:text-sm ">
                  Get ALl time support for emergency.Get Conneted with us for
                  any urgency
                </p>
                <Link
                  href="/contactUs"
                  className="text-blue-700 fond-bold text-xs  sm:text-sm  md:text-base   lg:text-lg
                  flex
              py-3 px-4 hover:bg-blue-600 hover:text-white hover:border-white  bg-white border  rounded "
                >
                  <span>Contact Us</span>
                </Link>
              </div>
            </div>
            <div className="relative   bg-blue-600 rounded-lg p-4  transform transition hover:-translate-y-2">
              <div className="absolute text-white text-[110px] opacity-20 -right-5 -bottom-5 transition-all group-hover:opacity-30">
                <Notebook className="size-32" />
              </div>
              <div className="relative flex flex-col gap-3 items-start justify-center text-wrap z-10 ">
                <span className="text-white font-normal text-sm md:text-base">
                  24 Hours Service
                </span>
                <h4 className="text-white font-semibold text-sm md:text-base lg:text-lg capitalize">
                  Online Appoinment
                </h4>
                <p className="text-white h-20 font-normal text-xs  md:text-sm">
                  Get ALl time support for emergency.We have introduced the
                  principle of family medicine.
                </p>

                <Link
                  href="/Appointment"
                  className=" 
                  text-blue-700 fond-bold text-xs  sm:text-sm  md:text-base   lg:text-lg
                  flex text-nowrap
              py-3 px-4 hover:bg-blue-600 hover:text-white hover:border-white  bg-white border  rounded "
                >
                  <span>Book Appointment</span>
                </Link>
              </div>
            </div>{" "}
            <div className="relative   bg-blue-600 rounded-lg p-4  transform transition hover:-translate-y-2">
              <div className="absolute text-white text-[110px] opacity-20 -right-5 -bottom-5 transition-all group-hover:opacity-30">
                <AlarmClock className="size-32" />
              </div>
              <div className="relative flex flex-col gap-3 items-start justify-center text-wrap z-10 ">
                <span className="text-white font-normal text-sm md:text-base">
                  Timing schedule
                </span>
                <h4 className="text-white font-semibold text-sm md:text-base lg:text-lg capitalize">
                  Opening Hours
                </h4>

                <ul className="text-white h-20 font-normal text-xs  md:text-sm w-full">
                  <li>
                    Sun - Wed :<span className="float-right">8:00 - 17:00</span>
                  </li>
                  <li>
                    Thu - Fri :{" "}
                    <span className="float-right">9:00 - 17:00</span>
                  </li>
                  <li>
                    Sat - sun :{" "}
                    <span className="float-right">10:00 - 17:00</span>
                  </li>
                </ul>
                <Link
                  href="/Doctors"
                  className=" text-blue-700 fond-bold text-xs  sm:text-sm  md:text-md   lg:text-lg
                  flex
              py-3 px-4 hover:bg-blue-600 hover:text-white hover:border-white  bg-white border  rounded "
                >
                  <span>Doctors Scedule</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Schedule;
