import { Clock, MapPin, PhoneIcon } from "lucide-react";
import React from "react";

const InfoComp = () => {
  return (
    <div className="container mt-5  mx-auto">
      <div className="flex flex-wrap gap-6">
        <div className="flex flex-1 gap-3 justify-center items-center bg-blue-700 text-white rounded-lg       p-3 md:py-4 md:px-5  group transform transition hover:-translate-y-2 w-full">
          <div>
            <PhoneIcon className="size-6" />
          </div>
          <div className="flex flex-col items-start justify-center">
            <a href="tel:+919324350209" className="   font-bold   text-xl  ">
              +91-9324350209
            </a>{" "}
            <a
              href="mailto:info@mywebsite.com"
              className=" hover:text-indigo-900 font-thin  text-xs md:font-light md:text-base "
            >
              info@mywebsite.com
            </a>
          </div>
        </div>

        <div className="flex flex-1 gap-3 justify-center items-center bg-blue-700 text-white rounded-lg p-3 md:py-4 md:px-5  group transform transition hover:-translate-y-2 w-full">
          <div>
            <MapPin className="size-6" />
          </div>
          <div className="flex flex-col items-start justify-center ">
            <span className="text-lg font-bold">
              306, Artis Building, Third Floor,
            </span>

            <span>Old Canal Link Road, Nashik,</span>
          </div>
        </div>

        <div className="flex flex-1 gap-3 justify-center items-center bg-blue-700 text-white rounded-lg p-3 md:py-4 md:px-5   transform transition hover:-translate-y-2 w-full">
          <div>
            <Clock className="size-6" />
          </div>
          <div className="flex flex-col items-start justify-center">
            <span className="  text-md md:text-lg font-bold">
              Mon-Sat:8am-5am
            </span>
            <span>Sunday Closed</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoComp;
