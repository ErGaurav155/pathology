// "use client";

// import curve from "@/public/assets/hero/curve.png";
// import heroBackground from "@/public/assets/hero/hero-background.jpg";
// import robot from "@/public/assets/hero/robot.jpg";

// import {
//   BackgroundCircles,
//   BottomLine,
//   Gradient,
// } from "@/components/shared/Svgs/hero";

// import { ScrollParallax } from "react-just-parallax";
// import { useRef } from "react";
// import Generating from "@/components/JsmComp/Generating";
// import Notification from "@/components/JsmComp/Notification";
// import homeSmile from "@/public/assets/home-smile.svg";
// import file02 from "@/public/assets/file-02.svg";
// import searchMd from "@/public/assets/search-md.svg";
// import plusSquare from "@/public/assets/plus-square.svg";

// import Image from "next/image";
// import Link from "next/link";
// import { Button } from "../ui/button";

// const heroIcons = [homeSmile, file02, searchMd, plusSquare];
// const HeroCopy = () => {
//   const parallaxRef = useRef(null);

//   return (
//     <div className="flex flex-col md:flex-row">
//       <div className="">
//         <div className="relative bg-n-8 z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
//           <h1 className="h1 mb-6">
//             Explore the Possibilities of&nbsp;AI&nbsp;Chatting with {` `}
//             <span className="inline-block relative">
//               Brainwave{" "}
//               <Image
//                 src={curve}
//                 className="absolute top-full left-0 w-full xl:-mt-2"
//                 width={624}
//                 height={28}
//                 alt="Curve"
//               />
//             </span>
//           </h1>
//           <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
//             Unleash the power of AI within Brainwave. Upgrade your productivity
//             with Brainwave, the open AI chat app.
//           </p>

//           <Button asChild className="mb-10 button bg-purple-gradient bg-cover">
//             <Link href="/sign-in">Login</Link>
//           </Button>
//         </div>
//       </div>
//       <div className="container relative" ref={parallaxRef}>
//         <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
//           <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
//             <div className="relative bg-n-8 rounded-[1rem]">
//               <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />

//               <div className="aspect-[33/40] lg:ml-24 rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[688/490]">
//                 <Image
//                   src={robot}
//                   className="w-full  "
//                   width={130}
//                   height={40}
//                   alt="AI"
//                 />

//                 <Generating className="absolute left-4 right-4 bottom-5 md:left-1/2 md:right-auto md:bottom-8 md:w-[31rem] md:-translate-x-1/2" />

//                 <ScrollParallax isAbsolutelyPositioned>
//                   <ul className="hidden absolute -left-[5.5rem] bottom-[7.5rem] px-1 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex">
//                     {heroIcons.map((icon, index) => (
//                       <li className="p-5" key={index}>
//                         <Image src={icon} width={14} height={15} alt={icon} />
//                       </li>
//                     ))}
//                   </ul>
//                 </ScrollParallax>

//                 <ScrollParallax isAbsolutelyPositioned>
//                   <Notification
//                     className="hidden absolute -right-[5.5rem] bottom-[11rem] w-[18rem] xl:flex"
//                     title="Code generation"
//                   />
//                 </ScrollParallax>
//               </div>
//             </div>

//             <Gradient />
//           </div>
//           <div className="absolute aspect-[64/70] md:aspect-[70/70] md:h-[38rem] md:w-[53rem] opacity-95 lg:aspect-[1024/490] lg:h-[42rem] lg:w-[100rem] h-[500px]  w-[615px] -top-[46px] -left-[138px] overflow-hidden">
//             <Image
//               src={heroBackground}
//               className="w-full object-fill "
//               width={130}
//               height={40}
//               alt="hero"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroCopy;
