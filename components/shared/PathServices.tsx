import { IndianRupee, Notebook } from "lucide-react";
import Link from "next/link";

const services = [
  {
    id: "vital-organs",
    name: "Vital Organs & Diabetes Monitoring",
    price: "Rs. 1,450",
    parameters: "22 PARAMETERS",
    link: "/PathTest/vital-organs",
  },
  {
    id: "prime-plus",
    name: "Prime Plus Full Body Check Up",
    price: "Rs. 3,850",
    parameters: "60 PARAMETERS",
    link: "/PathTest/prime-plus",
  },
  {
    id: "prime",
    name: "Prime Full Body Check Up",
    price: "Rs. 2,450",
    parameters: "58 PARAMETERS",
    link: "/PathTest/prime",
  },
  {
    id: "pcos-pcod",
    name: "Polycystic Ovarian Disease Package",
    price: "Rs. 2,250",
    parameters: "06 PARAMETERS",
    link: "/PathTest/pcos-pcod",
  },
  {
    id: "lipid-diabetes",
    name: "Lipid & Diabetes Monitoring Package",
    price: "Rs. 799",
    parameters: "9 PARAMETERS",
    link: "/PathTest/lipid-diabetes",
  },
  {
    id: "fever-basic",
    name: "Fever Package Basic",
    price: "Rs. 799",
    parameters: "33 PARAMETERS",
    link: "/PathTest/fever-basic",
  },
  {
    id: "fever-advance",
    name: "Fever Package Advance",
    price: "Rs. 1,199",
    parameters: "35 PARAMETERS",
    link: "/PathTest/fever-advance",
  },
  {
    id: "diabetes-tracker",
    name: "Diabetes Tracker Package",
    price: "Rs. 490",
    parameters: "3 PARAMETERS",
    link: "/PathTest/diabetes-tracker",
  },
  {
    id: "diabetes-advance",
    name: "Diabetes Package Advance",
    price: "Rs. 1,190",
    parameters: "29 PARAMETERS",
    link: "/PathTest/diabetes-advance",
  },
  {
    id: "diabetes-basic",
    name: "Diabetes Package Basic",
    price: "Rs. 795",
    parameters: "7 PARAMETERS",
    link: "/PathTest/diabetes-basic",
  },
];

export function PathologyServices() {
  return (
    <div
      className="mt-10  mb-5 grid gap-5 md:gap-7 lg:gap-10 items-center justify-center 
                sm:grid-cols-2 lg:grid-cols-3"
    >
      {services.map((service) => (
        <div
          key={service.id}
          className="flex flex-col gap-3 items-start justify-evenly rounded-3xl shadow-2xl relative shadow-purple-400 bg-white text-purple-900 hover:bg-purple-700 hover:text-white p-4 h-60 md:h-70 lg:h-80 w-auto"
        >
          <h1 className="font-bold text-lg ">{service.name}</h1>
          <div className="font-bold text-2xl flex flex-col gap-2 items-center w-full">
            <div className="flex items-center self-start gap-2">
              <IndianRupee className="size-5" />
              <span>{service.price}</span>
            </div>
            <hr className="text-purple-700 w-full border-purple-700" />
          </div>
          <div className="text-sm font-thin">{service.parameters}</div>
          <h4 className="absolute  bottom-6 right-20  text-green-500">
            Detail
          </h4>

          <Link
            href={`/PathTest/${service.id}`}
            className="absolute bottom-2 right-4 bg-green-500 text-white p-4 rounded-full"
          >
            <Notebook className="size-7" />
          </Link>
        </div>
      ))}
    </div>
  );
}
