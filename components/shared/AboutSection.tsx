import Image from "next/image";

const AboutSection = () => {
  return (
    <section className="container">
      <div className="flex flex-row gap-5  items-center justify-center w-full  m-auto">
        <div className="hidden md:flex flex-1 ">
          <div className=" flex flex-col gap-5 ">
            <Image
              src="/assets/aboutservice/img-1.jpg"
              alt=""
              className="bg-cover rounded-sm"
              height={1000}
              width={1000}
              priority
            />
            <Image
              src="/assets/aboutservice/img-2.jpg"
              alt=""
              className="bg-cover rounded-sm"
              height={1000}
              width={1000}
              priority
            />
          </div>
        </div>
        <div className=" flex-1 ">
          <Image
            src="/assets/aboutservice/img-3.jpg"
            alt=""
            className="bg-cover rounded-sm"
            height={1000}
            width={1000}
            priority
          />
        </div>
        <div className="flex-1 ">
          <div className="pl-4 mt-4 mt-lg-0">
            <h1 className="text-blue-900 font-extrabold  text-xl md:text-2xl lg:text-5xl">
              Personal care <br />& healthy living
            </h1>
            <p className="mt-6 mb-5 text-base">
              We provide best leading medical service that you need,do ckeckout.
            </p>
            <a
              href="/PathTest"
              className="text-white 
              inline-block
                basis-1/5 bg-red-700 py-2 px-7 rounded-md text-center hover:bg-indigo-700"
            >
              Services<i className="icofont-simple-right ml-3"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
