import { BreadcrumbsDefault } from "@/components/shared/breadcrumbs";
import { Footer } from "@/components/shared/Footer";
import { Button } from "@/components/ui/button";
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/solid";
import {
  FacebookIcon,
  InstagramIcon,
  MessageCircle,
  Phone,
  TwitterIcon,
  YoutubeIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
const doctors = [
  {
    id: "Dr.Sangita Khaire",
    name: "Dr.Sangita Khaire",
    specialization: "Bsc(micro-DMLT)",
    image: "/assets/doctors/team4.jpg",
  },
  {
    id: "Dr.Yashashri Pawar",
    name: "Dr.Yashashri Pawar",
    specialization: "Bsc(micro-DMLT)",
    image: "/assets/doctors/team4.jpg",
  },
  {
    id: "Aniket",
    name: "Dr. Aniket",
    specialization: "Pediatrician",
    image: "/assets/doctors/team1.jpg",
  },
  {
    id: "dr-emily",
    name: "Dr. Emily Brown",
    specialization: "Bsc(micro-DMLT)",
    image: "/assets/doctors/team4.jpg",
  },
];

const Doctors = [
  {
    id: "Dr.Sangita-Khaire",
    name: "Dr.Sangita Khaire",
    specialization: "Microbiology",
    image: "/assets/doctors/team4.jpg",
    qualifications: "Bsc(micro-DMLT)",
    biography: `Dr. Sangita Khaire is an experienced cardiologist specializing in the diagnosis and treatment of heart diseases. With over 15 years of experience, he has a particular interest in non-invasive cardiac imaging and interventional cardiology.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.


Risus commodo viverra maecenas accumsan lacus vel facilisis.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.`,
    education: [
      "MD in Cardiology at Heartland University (2005)",
      "MBBS at Medical Institute of Science (2001)",
    ],
  },
  {
    id: "Dr.Yashashri-Pawar",
    name: "Dr.Yashashri Pawar",
    specialization: "Microbiology",
    image: "/assets/doctors/team1.jpg",
    qualifications: "Bsc(micro-DMLT)",
    biography: `Dr. Yashashri Pawar is a leading dermatologist known for her expertise in treating skin conditions and cosmetic dermatology. She has been helping patients achieve healthier skin for over a decade.`,
    education: [
      "MD in Dermatology at SkinCare Institute (2012)",
      "MBBS at National Medical College (2008)",
    ],
  },
  {
    id: "Aniket",
    name: "Aniket",
    specialization: "Microbiology",
    image: "/assets/doctors/team3.jpg",
    qualifications: "Bsc(micro-DMLT)",
    biography: `Dr. Aniket Kumar is a compassionate pediatrician dedicated to providing excellent care for children. With a warm approach, he ensures both parents and children feel comfortable.`,
    education: [
      "MD in Pediatrics at Children's Health University (2014)",
      "MBBS at All India Medical College (2010)",
    ],
  },
  {
    id: "dr-emily",
    name: "Dr. Emily Brown",
    specialization: "Neurologist",
    image: "/assets/doctors/team4.jpg",
    qualifications: "MBBS, MD in Neurology",
    biography: `Dr. Emily Brown is a renowned neurologist with expertise in treating complex neurological disorders. She is passionate about advancing patient care through research and innovation.`,
    education: [
      "MD in Neurology at BrainCare University (2015)",
      "MBBS at Advanced Medical Sciences College (2011)",
    ],
  },
];

export default async function DoctorDetails({
  params: { id },
}: {
  params: { id: string };
}) {
  const doctor = Doctors.find((doc) => doc.id === id);
  if (!doctor) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mt-10 mx-auto  w-full gap-5 flex flex-col justify-between items-center ">
      <BreadcrumbsDefault />

      {/* Doctor Profile Header */}
      <div className="flex flex-col md:flex-row wrapper2 gap-5 items-center justify-center w-full">
        <div className="flex flex-col sm:flex-row md:flex-col rounded-2xl shadow-2xl gap-1  md:gap-5 h-auto w-full  md:w-2/5 items-center justify-center  px-3 ">
          <div className="flex flex-row sm:flex-col gap-2 md:flex-row h-full items-start justify-start bg-cover bg-center bg-opacity-10 md:bg-opacity-95 flex-1  w-full   bg-no-repeat p-4 md:p-0 ">
            <Image
              src={doctor.image}
              alt={`Testimonial ${id}`}
              width={999}
              height={999}
              priority
              objectFit="cover "
              className="flex-1 rounded-2xl"
            />
            <div
              key={doctor.id}
              className=" hidden sm:flex  md:hidden mt-5 flex-1 flex-col gap-3 items-center justify-evenly rounded-3xl shadow-2xl relative shadow-purple-400 bg-white text-purple-900 hover:bg-purple-700 hover:text-white p-2 h-auto w-full"
            >
              {/* Doctor Name */}
              <h1 className="font-thin text-sm  md:font-bold md:text-lg">
                {doctor.name}
              </h1>
              {/* Specialization */}
              <h2 className="font-thin text-sm  md:font-medium md:text-lg ">
                {doctor.specialization}
              </h2>
              {/* Qualifications */}
              <div className="text-xs font-light text-gray-600">
                {doctor.qualifications}
              </div>
            </div>
          </div>
          <div className="flex-1 pr-5 md:pr-0 p-3 lg:p-10 w-full flex flex-col sm:flex-row md:flex-col  gap-5 text-n-6">
            <div className="flex flex-col gap-4 items-start justify-between">
              <h1 className="font-thin text-sm  md:font-bold md:text-xl">
                Contact info
              </h1>
              <div className=" flex gap-2 flex-col items-start justify-center">
                <div className="flex gap-3 items-center justify-start text-xs md:text-sm font-thin">
                  <PhoneIcon className="size-4 text-blue-700" />
                  <span> Call : +07 554 332 322</span>
                </div>
                <div className="flex gap-3 items-center justify-start text-xs md:text-sm font-thin">
                  <EnvelopeIcon className="size-4 text-blue-700" />
                  <span> hello@medsev.com</span>
                </div>
                <div className="flex gap-3 items-center justify-start text-xs md:text-sm font-thin">
                  <MapPinIcon className="size-4 text-blue-700" />
                  <span> 4th Floor, 408 No Chamber</span>
                </div>
              </div>

              <div className="flex gap-4  sm:justify-center">
                <Link
                  target="_blank"
                  href="https://www.facebook.com/CriconAi/"
                  className="p-1 md:p-2 border flex items-center  rounded-md"
                >
                  <FacebookIcon className="h-4 w-4 lg:h-5 lg:w-5" />
                </Link>
                <Link
                  target="_blank"
                  href="https://www.instagram.com/criconai/"
                  className="p-1 md:p-2 border flex items-center  rounded-md"
                >
                  <InstagramIcon className="h-4 w-4 lg:h-5 lg:w-5" />
                </Link>
                <Link
                  target="_blank"
                  href="https://twitter.com/CriconAi"
                  className="p-1 md:p-2 border flex items-center  rounded-md"
                >
                  <TwitterIcon className="h-4 w-4 lg:h-5 lg:w-5" />
                </Link>
                <Link
                  target="_blank"
                  href="https://www.youtube.com/channel/UC6UCOXsY_Y4Rm7IW34_v9Lg"
                  className="p-1 md:p-2 border flex items-center  rounded-md"
                >
                  <YoutubeIcon className="h-4 w-4 lg:h-5 lg:w-5" />
                </Link>
              </div>
            </div>
            <div className="w-full flex flex-col gap-4 items-start justify-between">
              <h1 className="font-thin text-sm  md:font-bold md:text-xl">
                Working hours
              </h1>
              <div className="flex flex-col md:gap-2 items-start justify-center w-full">
                <div className="flex items-center justify-between w-full text-xs md:text-sm font-thin ">
                  <p>Monday - Friday</p>
                  <p>8.00-20.00</p>
                </div>
                <div className="flex items-center justify-between w-full text-xs md:text-sm font-thin ">
                  <p>Saturday</p>
                  <p>9.00-18.30</p>
                </div>
                <div className="flex items-center justify-between w-full text-xs md:text-sm font-thin ">
                  <p>Monday - Thusday</p> <p>9.00-15.00</p>
                </div>
                <div className="flex items-center justify-between w-full text-xs md:text-sm font-thin">
                  <p>Monday - Friday</p>
                  <p>8.00-20.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5 w-full md:w-3/5 items-center justify-center ">
          <div
            key={doctor.id}
            className=" flex sm:hidden md:flex flex-1 flex-col gap-3 items-center justify-evenly rounded-3xl shadow-2xl relative shadow-purple-400 bg-white text-purple-900  p-4 h-auto w-full"
          >
            {/* Doctor Name */}
            <h1 className="font-bold text-lg">{doctor.name}</h1>
            {/* Specialization */}
            <h2 className="text-sm font-medium">{doctor.specialization}</h2>
            {/* Qualifications */}
            <div className="text-xs font-light text-gray-600">
              {doctor.qualifications}
            </div>
          </div>

          {/* Biography Section */}
          <div className="flex  flex-1 flex-col flex-wrap gap-1 items-start justify-start rounded-3xl shadow-2xl relative shadow-purple-400 bg-white text-purple-900  p-4 h-auto w-full">
            <h3 className="underline text-black mb-2">Biography</h3>
            <p className="text-sm">{doctor.biography}</p>
          </div>

          {/* Education Section */}
          <div className="flex  flex-1 flex-col flex-wrap gap-1 items-start justify-start rounded-3xl shadow-2xl relative shadow-purple-400 bg-white text-purple-900  p-4 h-auto w-full">
            <h3 className="underline text-black">Education</h3>
            <ul className="list-disc list-inside">
              {doctor.education.map((edu, index) => (
                <li key={index} className="text-sm">
                  {edu}
                </li>
              ))}
            </ul>
          </div>
          <Link
            href={`/Appointment`}
            className="px-4 py-3 w-full  text-base md:text-xl hover:bg-indigo-600 bg-green-900 text-white p-1 md:p-2 border text-center  rounded-md"
          >
            Book Now
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
