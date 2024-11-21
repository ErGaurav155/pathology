import { SquaresPlusIcon } from "@heroicons/react/24/outline";
import { Ambulance, AmbulanceIcon, Stethoscope } from "lucide-react";
import Image from "next/image";
import React from "react";

const Features = () => {
  return (
    <div className="container mx-auto">
      {/* Section Title */}
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-semibold">
          We Are Always Ready to Help You & Your Family
        </h2>
        <Image
          src="/assets/img/section-img.png"
          alt="Section decoration"
          className="mx-auto my-4"
          width={50}
          height={50}
        />
        <p className="text-gray-600">Advanced Lab Equipments For You.</p>
      </div>

      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2  md:gap-8">
        {/* Feature 1 */}
        <div className="text-center relative p-5">
          <div className="relative">
            <div className="flex items-center justify-center w-15 h-15 md:w-24 md:h-24 mx-auto border border-blue-300 rounded-full hover:bg-blue-700 text-blue-700 hover:text-white  transition-all">
              <Ambulance className=" size-10 md:size-15 " />
            </div>
          </div>
          <h3 className="text-lg font-semibold mt-5 md:mt-10">
            Emergency Help
          </h3>
          <p className="text-gray-600 mt-5">10+ Years Of Experience</p>
          <div className="hidden md:block absolute border-b-2 border-dotted border-blue-600 w-20 lg:w-28 top-20 right-[-4rem]"></div>
        </div>

        {/* Feature 2 */}
        <div className="text-center relative p-5">
          <div className="relative">
            <div className="flex items-center justify-center w-15 h-15 md:w-24 md:h-24 mx-auto border border-blue-300 rounded-full hover:bg-blue-700 text-blue-700 hover:text-white  transition-all">
              <SquaresPlusIcon className="size-10 md:size-15" />
            </div>
          </div>
          <h3 className="text-lg font-semibold mt-5 md:mt-10">
            Enriched Pharmacy
          </h3>
          <p className="text-gray-600 mt-5">
            {" "}
            Trusted by Leading Doctors & Hospitals
          </p>
          <div className="hidden md:block absolute border-b-2 border-dotted border-blue-600 w-20 lg:w-28 top-20 right-[-4rem]"></div>
        </div>

        {/* Feature 3 */}
        <div className="text-center relative p-5">
          <div className="relative">
            <div className="flex items-center justify-center w-15 h-15 md:w-24 md:h-24 mx-auto border border-blue-300 rounded-full hover:bg-blue-700 text-blue-700 hover:text-white  transition-all">
              <Stethoscope className="size-10 md:size-15" />
            </div>
          </div>
          <h3 className="text-lg font-semibold mt-5 md:mt-10">
            Medical Treatment
          </h3>
          <p className="text-gray-600 mt-5">
            Proficiency Testing for Accurate Reports
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
