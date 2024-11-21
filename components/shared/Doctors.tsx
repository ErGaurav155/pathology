import { Notebook } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const doctors = [
  {
    id: "Dr.Sangita-Khaire",
    name: "Dr.Sangita Khaire",
    specialization: "Bsc(micro-DMLT)",
    image: "/assets/doctors/team4.jpg",
  },
  {
    id: "Dr.Yashashri-Pawar",
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

export function Doctor() {
  return (
    <div
      className="mt-10 wrapper2 mb-5 grid gap-5 md:gap-7 lg:gap-10 items-center justify-center 
                sm:grid-cols-2 lg:grid-cols-3"
    >
      {doctors.map((doctor) => (
        <div
          key={doctor.id}
          className="flex flex-col  items-center justify-start  rounded-3xl overflow-hidden shadow-2xl relative shadow-purple-400 bg-white text-purple-900 hover:bg-purple-700 hover:text-white  h-96 w-auto"
        >
          {/* Doctor Image */}
          <Image
            src={doctor.image}
            alt={doctor.name}
            height={800}
            width={600}
            className=" h-64   object-cover w-full  rounded-3xl  shadow-md"
          />

          {/* Doctor Name */}
          <div className="h-30 p-7">
            <h1 className="font-bold text-lg">{doctor.name}</h1>

            {/* Specialization */}
            <div className="text-sm font-thin">{doctor.specialization}</div>

            {/* Detail Button */}
            <h4 className="absolute bottom-6 right-20 text-green-500">
              Detail
            </h4>
          </div>
          <Link
            href={`/Doctors/${doctor.id}`}
            className="absolute bottom-2 right-4 bg-green-500 text-white p-4 rounded-full"
          >
            <Notebook className="size-7" />
          </Link>
        </div>
      ))}
    </div>
  );
}
