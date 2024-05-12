import Header from "@/components/shared/Header";
import { socialmediaTypes } from "@/constants";
import { getUserById } from "@/lib/actions/user.actions";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import SocialMediaAiForm from "@/components/shared/SocialMediaAiForm";
import Editor from "@/components/shared/Editor";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Tools For INFLUENCERS",
  description:
    "FREE AI-powered best content creation technology for SOCIAL MEDIA INFLUENCERS",
};
const AddTransformationTypePage = async ({
  params: { type },
}: SocialMediaSearchParamProps) => {
  const socialMedia = socialmediaTypes[type];

  return (
    <div className="flex items-center justify-center md:items-start md:justify-start flex-col md:flex-row wrapper2 gap-5">
      <div className="md:flex-auto w-[90vw] md:w-2/3 md:min-h-screen scroll-m-4 overflow-y-scroll flex flex-col gap-5  md:px-7 pt-16">
        <Header title={socialMedia.title} />

        <section className="mt-10">
          <SocialMediaAiForm type={socialMedia.type as SocialMediaTypeKey} />
        </section>
      </div>

      <div className="sticky top-0 md:flex-auto h-[100vh] w-full md:w-2/6  pt-4 ">
        <Button className="text-white bg-green-800 hover:bg-[#1c7429] rounded-md self-start w-[20vw] cursor-default max-h-min ml-4 mt-6">
          Editor
        </Button>
        <Editor />
      </div>
    </div>
  );
};

export default AddTransformationTypePage;
