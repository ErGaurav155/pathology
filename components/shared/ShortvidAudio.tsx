"use client";

import { useEffect, useState } from "react";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { languages, shortvidTypes, voice } from "@/constants";
import { Button } from "../ui/button";
import { getUserById, updateCredits } from "@/lib/actions/user.actions";
import { InsufficientCreditsModal } from "./InsufficientCreditsModal";
import { z } from "zod";
import { calculateCredits } from "@/lib/utils";
import { toast } from "../ui/use-toast";
import { Skeleton } from "../ui/skeleton";
import Image from "next/image";
import { useAuth } from "@clerk/nextjs";
import Link from "next/link";

const formSchema = z.object({
  file: z
    .instanceof(File)
    .refine(
      (file) => file.size < 5 * 1024 * 1024,
      "File size must be less than 5MB"
    ),

  selectTone: z.string(),
  outputlag: z.string(),
});
export default function ShortVidAudio({ type }: ShortAiFormProps) {
  const { userId } = useAuth();

  const shortVid = shortvidTypes[type];

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [theFile, setTheFile] = useState<File | null>(null);
  const [value1, setValue1] = useState("");
  const [language1, setLanguage1] = useState("");
  const [credits, setCredits] = useState(shortVid.credits);
  const [size, setSize] = useState<number>();
  const [availableCredits, setAvailableCredits] = useState<boolean>(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.currentTarget.files?.[0];

    if (!file) return;
    const fileSize = file.size;
    if (!fileSize) return;
    setSize(fileSize);

    setTheFile(file);
  };

  useEffect(() => {
    const fileCredits = calculateCredits(size); // Calculate credits based on file size
    setCredits(shortVid.credits + fileCredits); // Update credits state
  }, [shortVid.credits, size]);
  let { type: string, aiprompt, model } = shortVid;

  const callGetTranscription = async () => {
    if (!theFile) {
      return;
    }
    setIsSubmitting(true);
    toast({
      title: "Tip of the Day",
      description: `Note : Plz copy response in word or download images or audio if
        you want,once page refresh you will never see them back `,
      duration: 5000,
      className: "success-toast",
    });
    if (!userId) {
      return;
    }
    const user = await getUserById(userId);

    if (!user) {
      return;
    }
    const userDbId = user._id;
    if (user.creditBalance < Math.abs(credits)) {
      setIsSubmitting(false);
      setAvailableCredits(true);
      return;
    }
    const formData = new FormData();
    formData.append("file", theFile);
    formData.append("selectTone", value1);
    formData.append("outputlag", language1);

    try {
      try {
        formSchema.parse({
          file: theFile,
          selectTone: value1,
          outputlag: language1,
        });
      } catch (error) {
        setIsSubmitting(false);
        throw new Error("File size must be less than 3MB");
      }

      const response = await fetch("/api/audio", {
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        const data = await response.json();
        await updateCredits(userDbId, -credits);

        setAudioUrl(data.output);
      } else {
        toast({
          title: "Content Warning",
          description:
            "This prompt has been blocked. Our system automatically flagged this prompt because it may conflict with our content policy. More policy violations may lead to automatic suspension of your access.",
          duration: 2000,
          className: "error-toast",
        });
      }
    } catch (error) {
      toast({
        title: "Content Warning",
        description:
          "This prompt has been blocked. Our system automatically flagged this prompt because it may conflict with our content policy. More policy violations may lead to automatic suspension of your access.",
        duration: 2000,
        className: "error-toast",
      });
    } finally {
      setTheFile(null);
      setIsSubmitting(false);
    }
  };

  const handleValueChange = (newValue: string) => {
    setValue1(newValue);
  };

  const handleLanguageChange = (newLanguage: string) => {
    setLanguage1(newLanguage);
  };
  if (availableCredits) {
    return <InsufficientCreditsModal />;
  }
  return (
    <main className="space-y-20 mb-10 mt-10 ">
      <div>
        <label className="text-n-8 ">Upload File:</label>
        <Input
          className="select-field text-n-8"
          type="file"
          accept=".wav, .mp3"
          onChange={handleFileChange}
          required
        />
      </div>
      <div className="flex">
        <div className="w-[50%]">
          <label className="text-n-8">Select Character</label>
          <Select required onValueChange={handleValueChange} value={value1}>
            <SelectTrigger className="select-field ">
              <SelectValue placeholder="" />
            </SelectTrigger>

            <SelectContent>
              {voice.map((voice, index) => (
                <SelectItem
                  key={index}
                  className="bg-white hover:bg-gray-100 text-black text-lg  py-2 px- mb-4 m-auto text-center flex min-w-max"
                  value={voice}
                >
                  {voice}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="w-[50%]">
          <label className="text-n-8">Output Language</label>
          <Select
            required
            onValueChange={handleLanguageChange}
            value={language1}
          >
            <SelectTrigger className="select-field ">
              <SelectValue placeholder=" " />
            </SelectTrigger>

            <SelectContent>
              {languages.map((language, index) => (
                <SelectItem
                  key={index}
                  className="bg-white text-gray-700 text-lg font-xs py-2 px-4 mb-4 w-[10vw] m-auto text-center justify-center  flex"
                  value={language}
                >
                  {language}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="">
        {userId ? (
          <Button
            type="submit"
            onClick={callGetTranscription}
            key="submitButton"
            className="submit-button capitalize"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              "Submitting..."
            ) : (
              <div className="flex text-lg font-semibold gap-2 items-center justify-center">
                Generate{" "}
                <span>
                  <Image
                    src="/assets/icons/coins.svg"
                    alt="coins"
                    width={1}
                    height={1}
                    className="size-6 md:size-8"
                  />
                </span>{" "}
                {credits}
              </div>
            )}
          </Button>
        ) : (
          <Link
            href={"/sign-in"}
            className="text-white flex text-lg font-semibold gap-2 items-center justify-center"
          >
            <div className="submit-button capitalize text-center">LOGIN </div>
          </Link>
        )}
      </div>
      {audioUrl ? (
        <div className="min-h-max h-[30vh] md:h-[80vh]   p-5 m-auto flex flex-col w-full gap-2">
          <audio controls>
            <source src={audioUrl} type="audio/mpeg" />
          </audio>
        </div>
      ) : (
        <div className="bg-white rounded-md overflow-auto text-lg  font-sans  text-black flex  gap-3 items-center justify-center mb-10 mt-10">
          <Skeleton className="h-[30vh] w-full rounded-xl bg-gray-300" />
        </div>
      )}
    </main>
  );
}
