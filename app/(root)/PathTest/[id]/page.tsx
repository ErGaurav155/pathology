import { IndianRupee, Notebook } from "lucide-react";
import { Footer } from "@/components/shared/Footer";
import React from "react";
import Link from "next/link";
import { BreadcrumbsDefault } from "@/components/shared/breadcrumbs";
const Services = [
  {
    id: "vital-organs",
    name: "Vital Organs & Diabetes Monitoring",
    price: "Rs. 1,450",
    noparameters: "22 PARAMETERS",

    parameters: [
      "BLOOD UREA NITROGEN (BUN)",
      "HbA1c (GLYCOSYLATED HAEMOGLOBIN)",
      "LIPID PROFILE",
      "LIVER FUNCTION TEST (LFT)",
      "SERUM CREATININE",
      "SERUM URIC ACID",
    ],
  },
  {
    id: "prime-plus",
    name: "Prime Plus Full Body Check Up",
    price: "Rs. 3,850",
    noparameters: "60 PARAMETERS",

    parameters: [
      "COMPLETE BLOOD COUNT(CBC)",
      "ERYTHROCYTES SEDIMENTATION RATE (ESR)",
      "BLOOD UREA",
      "FASTING BLOOD SUGAR (FBS)",
      "HbA1c (GLYCOSYLATED HAEMOGLOBIN)",
      "LIPID PROFILE",
      "LIVER FUNCTION TEST (LFT)",
      "SERUM CALCIUM",
      "SERUM CREATININE",
      "SERUM URIC ACID",
      "25-HYDROXY VITAMIN D",
      "THYROID PROFILE (T3, T4, TSH)",
      "VITAMIN B-12",
      "URINE EXAMINATION REPORT",
    ],
  },
  {
    id: "prime",
    name: "Prime Full Body Check Up",
    noparameters: "58 PARAMETERS",
    price: "Rs. 2,450",
    parameters: [
      "COMPLETE BLOOD COUNT(CBC)",
      "ERYTHROCYTES SEDIMENTATION RATE (ESR)",
      "BLOOD UREA",
      "FASTING BLOOD SUGAR (FBS)",
      "HbA1c (GLYCOSYLATED HAEMOGLOBIN)",
      "LIPID PROFILE",
      "LIVER FUNCTION TEST (LFT)",
      "SERUM CALCIUM",
      "SERUM CREATININE",
      "SERUM URIC ACID",
      "THYROID PROFILE (T3, T4, TSH)",
      "URINE EXAMINATION REPORT",
    ],
  },
  {
    id: "pcos-pcod",
    name: "Polycystic Ovarian Disease Package",
    price: "Rs. 2,250",
    noparameters: "06 PARAMETERS",

    parameters: [
      "FASTING BLOOD SUGAR (FBS)",
      "FSH",
      "LH",
      "PROLACTIN",
      "TESTOSTERONE",
      "TSH",
    ],
  },
  {
    id: "lipid-diabetes",
    name: "Lipid & Diabetes Monitoring Package",
    price: "Rs. 799",
    noparameters: "9 PARAMETERS",

    parameters: ["HbA1c (GLYCOSYLATED HAEMOGLOBIN)", "LIPID PROFILE"],
  },
  {
    id: "fever-basic",
    name: "Fever Package Basic",
    noparameters: "33 PARAMETERS",

    price: "Rs. 799",
    parameters: [
      "COMPLETE BLOOD COUNT(CBC)",
      "ERYTHROCYTES SEDIMENTATION RATE (ESR)",
      "MALARIAL PARASITE (ANTIGEN TEST)",
      "URINE EXAMINATION REPORT",
      "SALMONELLA TYPHI IgM ANTIBODY",
    ],
  },
  {
    id: "fever-advance",
    name: "Fever Package Advance",
    price: "Rs. 1,199",
    noparameters: "35 PARAMETERS",

    parameters: [
      "COMPLETE BLOOD COUNT(CBC)",
      "ERYTHROCYTE SEDIMENTATION RATE (ESR)",
      "MALARIAL PARASITE (ANTIGEN TEST)",
      "URINE EXAMINATION REPORT",
      "C-REACTIVE PROTEIN (CRP)",
      "SALMONELLA TYPHI IgM ANTIBODY",
      "DENGUE NS1 ANTIGEN",
    ],
  },
  {
    id: "diabetes-tracker",
    name: "Diabetes Tracker Package",
    price: "Rs. 490",
    noparameters: "3 PARAMETERS",

    parameters: [
      "FASTING BLOOD SUGAR (FBS)",
      "HbA1c (GLYCOSYLATED HAEMOGLOBIN)",
    ],
  },
  {
    id: "diabetes-advance",
    name: "Diabetes Package Advance",
    price: "Rs. 1,190",
    noparameters: "29 PARAMETERS",

    parameters: [
      "BLOOD UREA NITROGEN (BUN)",
      "FASTING BLOOD SUGAR (FBS)",
      "HbA1c (GLYCOSYLATED HAEMOGLOBIN)",
      "LIPID PROFILE",
      "SERUM CREATININE",
      "SERUM URIC ACID",
      "URINE EXAMINATION REPORT",
    ],
  },
  {
    id: "diabetes-basic",
    name: "Diabetes Package Basic",
    price: "Rs. 795",
    noparameters: "7 PARAMETERS",

    parameters: [
      "BLOOD UREA",
      "BLOOD UREA NITROGEN (BUN)",
      "FASTING BLOOD SUGAR (FBS)",
      "SERUM CREATININE",
      "SERUM TRIGLYCERIDES",
      "SERUM URIC ACID",
      "TOTAL CHOLESTEROL",
    ],
  },
];

export default async function TestDetails({
  params: { id },
}: {
  params: { id: string };
}) {
  const service = await Services.find((s) => s.id === id);
  if (!service) {
    return <div>Loading...</div>;
  }

  return (
    <div className=" mt-10 mx-auto max-w-7xl w-full gap-5  flex flex-col  justify-between items-center ">
      <BreadcrumbsDefault />
      <div className="flex flex-col wrapper2 sm:flex-row gap-5 items-center justify-center w-full">
        <div
          key={service.id}
          className="flex flex-col gap-3 w-auto md:w-2/5  items-start justify-evenly rounded-3xl shadow-2xl relative shadow-purple-400 bg-white text-purple-900 hover:bg-purple-700 hover:text-white p-4 h-80 "
        >
          <h1 className="font-thin text-sm  md:font-bold md:text-xl ">
            {service.name}
          </h1>
          <div className="  font-thin text-sm  md:font-bold md:text-2xl flex flex-col gap-2 items-center w-full">
            <div className="flex items-center self-start gap-2">
              <IndianRupee className="size-5" />
              <span>{service.price}</span>
            </div>
            <hr className="text-purple-700 w-full border-purple-700" />
            <h6 className="absolute bottom-6 right-20 text-green-500 font-thin text-sm  md:font-bold md:text-lg">
              Appointment
            </h6>
          </div>
          <div className="font-thin text-sm  md:font-bold md:text-lg">
            {service.noparameters}
          </div>
          <Link
            href={`/Appointment`}
            className="absolute bottom-2 right-4 bg-green-500 text-white p-4 rounded-full"
          >
            <Notebook className="size-7" />
          </Link>
        </div>
        <div className="flex flex-auto flex-col flex-wrap gap-1 items-start justify-start rounded-3xl shadow-2xl relative shadow-purple-400 min-h-10 bg-white text-purple-900 hover:bg-purple-700 hover:text-white p-4 h-auto w-auto md:3/5">
          <span className="underline text-black"> Include Parameters:-</span>
          {service.parameters.map((parameter, index) => (
            <div
              key={index}
              className="flex items-center gap-2 font-thin text-sm  md:font-bold md:text-lg"
            >
              <span className="text-purple-900">•</span>
              <span>{parameter}</span>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
