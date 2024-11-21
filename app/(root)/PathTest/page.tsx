import { PathologyServices } from "@/components/shared/PathServices";

import Features from "@/components/shared/Feature";
import { Footer } from "@/components/shared/Footer";
import FunFacts from "@/components/shared/FunFact";
import React from "react";
import { BreadcrumbsDefault } from "@/components/shared/breadcrumbs";

const PathTest = () => {
  return (
    <div className=" mt-10 mx-auto max-w-7xl w-full gap-5  flex flex-col justify-between items-center ">
      <BreadcrumbsDefault />
      <PathologyServices />
      <Footer />
    </div>
  );
};

export default PathTest;
