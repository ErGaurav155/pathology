import { SignedIn, auth } from "@clerk/nextjs";
import Image from "next/image";
import { redirect } from "next/navigation";

import { Button } from "@/components/ui/button";
import { plans } from "@/constants";
import { getUserById } from "@/lib/actions/user.actions";
import Checkout from "@/components/shared/Checkout";
import { Faq } from "@/components/shared/Faq";
import { Footer } from "@/components/shared/Footer";
import { IndianRupeeIcon, RocketIcon } from "lucide-react";
import Link from "next/link";

const Credits = async () => {
  const { userId } = auth();

  if (!userId) redirect("/sign-in");

  const user = await getUserById(userId);

  return (
    <div className="wrapper">
      <Button className="text-white bg-green-800 hover:bg-[#1c7429] rounded-md self-start w-full  cursor-default  max-h-min  mt-2 overflow-hidden">
        <Link
          href={"/credits"}
          className="flex animate-scroll-left whitespace-nowrap "
        >
          Get
          <span className="text-yellow-500"> &nbsp;25 Free &nbsp;</span>
          Credits For First 100 package purchase &nbsp;
          <RocketIcon color="yellow" />
        </Link>
      </Button>
      <div className="flex flex-col gap-20">
        <section>
          <ul className="credits-list">
            {plans.map((plan) => (
              <li key={plan.name} className="credits-item ">
                <div className="flex-center flex-col gap-3">
                  <Image src={plan.icon} alt="check" width={50} height={50} />
                  <p className="p-20-semibold mt-2 text-purple-500">
                    {plan.name}
                  </p>
                  <p className="text-[36px] font-normal sm:text-[44px] leading-[120%] sm:leading-[56px] text-dark-600">
                    <IndianRupeeIcon className="w-6  h-6  inline-block" />

                    {plan.price}
                  </p>
                  <p className=" p-16-regular">
                    <span className=" font-semibold text-lg  text-green-600">
                      {plan.credits}{" "}
                    </span>
                    Credits
                  </p>
                </div>

                {/* Inclusions */}
                <ul className="flex flex-col gap-5 py-9">
                  {plan.inclusions.map((inclusion) => (
                    <li
                      key={plan.name + inclusion.label}
                      className="flex items-center gap-4"
                    >
                      <Image
                        src={`/assets/icons/${
                          inclusion.isIncluded ? "check.svg" : "cross.svg"
                        }`}
                        alt="check"
                        width={24}
                        height={24}
                      />
                      <p className="p-16-regular ">{inclusion.label}</p>
                    </li>
                  ))}
                </ul>

                {plan.name === "Free" ? (
                  <Button variant="outline" className="credits-btn">
                    Free Consumable
                  </Button>
                ) : (
                  <SignedIn>
                    <Checkout
                      plan={plan.name}
                      amount={plan.price}
                      credits={plan.credits}
                      buyerId={user._id}
                    />
                  </SignedIn>
                )}
              </li>
            ))}
          </ul>
        </section>
        <Faq />
        <Footer />
      </div>
    </div>
  );
};

export default Credits;
