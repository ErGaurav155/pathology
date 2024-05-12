import Header from "@/components/shared/Header";
import { contentwriterTypes } from "@/constants";
import { getUserById } from "@/lib/actions/user.actions";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import ContentWriterAiForm from "@/components/shared/ContentWriterAiForm";
import Editor from "@/components/shared/Editor";
import { Button } from "@/components/ui/button";
import Aiaudio from "@/components/shared/Aiaudio";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Tools For Content Writers",
  description:
    "AI-powered Article/Blog writting technology for content writers",
};
const AddTransformationTypePage = async ({
  params: { type },
}: ContentWriterSearchParamProps) => {
  const contentWriter = contentwriterTypes[type];

  return (
    <div className="flex items-center justify-center md:items-start md:justify-start flex-col md:flex-row wrapper2 gap-5">
      <div className="md:flex-auto w-[90vw] md:w-2/3 md:min-h-screen scroll-m-4 overflow-y-scroll flex flex-col gap-5  md:px-7 pt-16">
        <Header title={contentWriter.title} />

        <section className="mt-10">
          <ContentWriterAiForm
            type={contentWriter.type as ContentWriterTypeKey}
          />
        </section>
      </div>

      {type !== "TexttoAudio" && (
        <div className="sticky top-0  md:flex-auto h-[100vh] w-full md:w-2/6  pt-4 ">
          <Button className="text-white bg-green-800 hover:bg-[#1c7429] rounded-md self-start w-[20vw] cursor-default max-h-min ml-4 mt-6">
            Editor
          </Button>
          <Editor />
        </div>
      )}
      {type === "TexttoAudio" && <Aiaudio />}
    </div>
  );
};

export default AddTransformationTypePage;
