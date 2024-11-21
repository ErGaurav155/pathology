import { Footer } from "@/components/shared/Footer";
import React from "react";
import { Faq } from "@/components/shared/Faq";
import { BreadcrumbsDefault } from "@/components/shared/breadcrumbs";

const PathTest = () => {
  return (
    <div className=" mt-10 mx-auto max-w-7xl w-full gap-5  flex flex-col justify-between items-center ">
      <BreadcrumbsDefault />
      <Faq />
      <Footer />
    </div>
  );
};

export default PathTest;
