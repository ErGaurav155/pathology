"use client";

import { useState } from "react";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { languages, longvidTypes, voice } from "@/constants";
import { Button } from "../ui/button";
import { Copy, GemIcon } from "lucide-react";
import { generateGptResponse } from "@/lib/actions/ai.actions";
import { updateCredits } from "@/lib/actions/user.actions";
import { Textarea } from "@material-tailwind/react";
import { InsufficientCreditsModal } from "./InsufficientCreditsModal";
import { z } from "zod";

const formSchema = z.object({
  file: z.instanceof(File),
  selectTone: z.string(),
  outputlag: z.string(),
});

export default function LongVidAudio({
  userId,
  type,
  creditBalance,
}: LongAiFormProps) {
  const longVid = longvidTypes[type];

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [theFile, setTheFile] = useState<File | null>(null);
  const [value1, setValue1] = useState("");
  const [language1, setLanguage1] = useState("");
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.currentTarget.files?.[0];
    if (!file) return;

    setTheFile(file);
  };
  let { type: string, topic, subtopic, tone, aiprompt, model } = longVid;
  const callGetTranscription = async () => {
    if (!theFile) {
      return;
    }

    const formData = new FormData();
    formData.append("file", theFile);
    formData.append("selectTone", value1);
    formData.append("outputlag", language1);

    console.log(formData, language1, aiprompt, model);
    try {
      //   const res = await generateGptResponse({
      //     input: formData as FormData,
      //     selectTone: value1,
      //     inputlag: "",
      //     outputlag: language1,
      //     description: "",
      //     aiprompt,
      //     model,
      //   });
      // if (res) {
      //   await updateCredits(userId, -longVid.credits);
      //   setAudioUrl(res);
      // }
      formSchema.parse({
        file: theFile,
        selectTone: value1,
        outputlag: language1,
      });
      setIsSubmitting(true);

      const response = await fetch("/api/audio", {
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        // Handle the success response
        console.log("File uploaded successfully");
      } else {
        // Handle the error response
        console.error("Failed to upload file");
      }
      const data = await response.json();
      await updateCredits(userId, -longVid.credits);
      console.log(data);
      setAudioUrl(data.output);
    } catch (error) {
      // Handle any errors
      console.error("An error occurred while uploading the file", error);
    }

    setTheFile(null);
    setIsSubmitting(false);
  };

  const handleValueChange = (newValue: string) => {
    setValue1(newValue);
  };

  const handleLanguageChange = (newLanguage: string) => {
    setLanguage1(newLanguage);
  };

  return (
    <main className="space-y-20 mb-10 mt-10 ">
      {creditBalance < Math.abs(longVid.credits) && (
        <InsufficientCreditsModal />
      )}
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
        <div className="flex-auto">
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
        <div className="flex-auto">
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
        <Button
          type="submit"
          onClick={callGetTranscription}
          key="submitButton"
          className="submit-button  capitalize pt-10"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            "Submitting..."
          ) : (
            <div className="flex gap-2">
              Generate <GemIcon /> {longVid.credits}
            </div>
          )}
        </Button>
      </div>
      {audioUrl && (
        <div className="min-h-max h-[30vh] md:h-[80vh]   p-5 m-auto flex flex-col w-full gap-2">
          <audio controls>
            <source src="/assets/audio/output.mp3" type="audio/mpeg" />
          </audio>
        </div>
      )}
    </main>
  );
}
