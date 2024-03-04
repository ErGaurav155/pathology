import Image from "next/image";
import curve1 from "@/public/assets/collaboration/curve-1.svg";
import curve2 from "@/public/assets/collaboration/curve-2.svg";
export const RightCurve = () => {
  return (
    <div className="hidden absolute top-1/2 left-full w-[10.125rem] -mt-1 ml-10 pointer-events-none xl:block">
      <Image src={curve2} width={162} height={76} alt="Curve 2" />
    </div>
  );
};

export const LeftCurve = () => {
  return (
    <div className="hidden absolute top-1/2 right-4 w-[32.625rem] -mt-1 mr-10 pointer-events-none xl:block">
      <Image src={curve1} width={222} height={82} alt="Curve 1" />
    </div>
  );
};
