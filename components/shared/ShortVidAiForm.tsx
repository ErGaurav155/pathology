"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast, useToast } from "@/components/ui/use-toast";
import Link from "next/link";
import { Textarea } from "@/components/ui/textarea";
import { useEffect, useState } from "react";
import {
  aiImages,
  aspectRatio,
  aspectRatioDisplayNames,
  contentwriterTypes,
  email,
  languages,
  longvidTypes,
  noOfImage,
  shortvidTypes,
  voice,
} from "@/constants";
import { redirect } from "next/navigation";
import {
  fetchShortVidData,
  generateGptResponse,
} from "@/lib/actions/ai.actions";
import { updateCredits } from "@/lib/actions/user.actions";
import { InsufficientCreditsModal } from "./InsufficientCreditsModal";
import { Copy, DownloadIcon, GemIcon } from "lucide-react";
import Image from "next/image";
import { download } from "@/lib/utils";

const formSchema = z.object({
  input: z.string().min(5, {
    message: "input must be at least 5 characters.",
  }),
  selectTone: z.string().optional(),
  inputlag: z.string().optional(),
  outputlag: z.string().optional(),
  description: z.string().optional(),
});

interface AiImages {
  category: string;
  values: string[];
}

export default function ShortVidAiForm({
  userId,
  type,
  creditBalance,
}: ShortAiFormProps) {
  if (!userId) redirect("/sign-in");
  const shortVid = shortvidTypes[type];

  const [activeStates, setActiveStates] = useState(Array(5).fill(false));
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [textToCopy, setTextToCopy] = useState("");
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [imageUrl, setImageUrl] = useState<string[]>([]);
  const [response, setResponse] = useState<string | null>();
  const [selectedAspectRatio, setSelectedAspectRatio] = useState<string>("1:1");

  const { toast } = useToast();

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (activeStates) {
      timer = setTimeout(() => {
        setActiveStates(Array(5).fill(false));
      }, 3000);
    }

    return () => clearTimeout(timer);
  }, [activeStates]);

  const handleCopyButtonClick = (
    e: React.MouseEvent<HTMLButtonElement>,
    text: string,
    index: number
  ) => {
    if (allResponse || response) {
      e.preventDefault;
      const newActiveStates = [...activeStates];
      newActiveStates[index] = true;
      setActiveStates(newActiveStates);
      navigator.clipboard.writeText(text);
    } else {
      toast({
        title: "Plz Enter Text",
        description: "No text in textbox",
        duration: 5000,
        className: "error-toast",
      });
    }
  };

  let {
    type: string,
    topic,
    subtopic,
    tone,
    title,
    aiprompt,
    model,
    credits,
  } = shortVid;

  const [allResponse, setAllResponse] = useState<string[] | null>();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      input: "",
      selectTone: "",
      description: "",
      inputlag: "",
      outputlag: "",
    },
  });
  const handleAspectRatioChange = (value: string) => {
    setSelectedAspectRatio(value); // Update the selected aspect ratio in state
  };
  const [width, height] = selectedAspectRatio.split("x");

  const arwidth = parseInt(width);
  const arheight = parseInt(height);

  const countWords = (response: string) => {
    const words = response.trim().split(/\s+/);
    return words.filter((word) => word !== "").length;
  };
  const downloadHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    item: string,
    title: string
  ) => {
    e.preventDefault();
    download(item, title);
  };
  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);

    const { input, inputlag, outputlag, selectTone, description } = values;
    console.log(values);
    try {
      if (type !== "all") {
        const res = await generateGptResponse({
          input,
          selectTone,
          inputlag,
          outputlag,
          description,
          aiprompt,
          model,
        });
        if (res) {
          await updateCredits(userId, -shortVid.credits);
          if (model === "gpt-3.5-turbo") {
            setResponse(res);
          } else if (model === "dall-e-3") {
            setImageUrl(res);
          } else {
            setAudioUrl(res);
          }
        } else {
          const res = await fetchShortVidData({
            input,
            selectTone,
            inputlag,
            outputlag,
            description,
          });
          if (res) {
            await updateCredits(userId, -shortVid.credits);
            setAllResponse(res.slice(0, 4));
            setImageUrl(res.slice(4));
            console.log(res);
          }
        }
      }
    } catch (err: any) {
      toast({
        title: "Try Again",
        description: "Someting Went Wrong",
        duration: 5000,
        className: "error-toast",
      });
    } finally {
      setIsSubmitting(false);
    }
  }
  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {creditBalance < Math.abs(shortVid.credits) && (
            <InsufficientCreditsModal />
          )}
          {type !== "translate" && type !== "TexttoAudio" && (
            <FormField
              control={form.control}
              name="input"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-n-8">{topic}</FormLabel>
                  <FormControl>
                    <Input
                      className="select-field "
                      placeholder="shadcn"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          )}
          <div className="flex ">
            {type === "translate" && (
              <FormField
                control={form.control}
                name="inputlag"
                render={({ field }) => (
                  <FormItem className="flex-auto">
                    <FormLabel className="text-n-8">{tone}</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="select-field">
                          <SelectValue placeholder="" />
                        </SelectTrigger>
                      </FormControl>
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

                    <FormMessage />
                  </FormItem>
                )}
              />
            )}
            {type === "translate" && (
              <FormField
                control={form.control}
                name="outputlag"
                render={({ field }) => (
                  <FormItem className="flex-auto">
                    <FormLabel className="text-n-8">{tone}</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="select-field">
                          <SelectValue placeholder="" />
                        </SelectTrigger>
                      </FormControl>
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

                    <FormMessage />
                  </FormItem>
                )}
              />
            )}
          </div>

          {(type === "slogan" ||
            type === "facts" ||
            type === "quote" ||
            type === "riddle" ||
            type === "backgroundMusicGen") && (
            <FormField
              control={form.control}
              name="selectTone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-n-8">{tone}</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="select-field ">
                        <SelectValue />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {email.map((email, index) => (
                        <SelectItem
                          key={index}
                          className="bg-white hover:bg-gray-100 text-black text-lg  py-2 px- mb-4 m-auto text-center flex min-w-max"
                          value={email}
                        >
                          {email}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <FormMessage />
                </FormItem>
              )}
            />
          )}

          {(type === "aiimages" || type === "thumbnail" || type === "all") && (
            <FormField
              control={form.control}
              name="selectTone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-n-8">{tone}</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="select-field">
                        <SelectValue />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {aiImages.map((categoryObj: AiImages) => (
                        <div
                          key={categoryObj.category}
                          className="bg-white text-gray-700 text-lg font-bold py-2 px-4 my-8 text-center "
                        >
                          {categoryObj.category}

                          {categoryObj.values.map(
                            (value: string, index: number) => (
                              <SelectItem
                                key={`${categoryObj.category}-${index}`}
                                className="select-item min-w-max "
                                value={value}
                              >
                                {value}
                              </SelectItem>
                            )
                          )}
                        </div>
                      ))}
                    </SelectContent>
                  </Select>

                  <FormMessage />
                </FormItem>
              )}
            />
          )}
          <div className="flex ">
            {(type === "aiimages" ||
              type === "thumbnail" ||
              type === "all") && (
              <FormField
                control={form.control}
                name="inputlag"
                render={({ field }) => (
                  <FormItem className="flex-auto">
                    <FormLabel className="text-n-8">aspect ratio:</FormLabel>
                    <Select
                      onValueChange={(value) => {
                        field.onChange(value); // Update form field value
                        handleAspectRatioChange(value); // Update aspect ratio in state
                      }}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="select-field ">
                          <SelectValue />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {aspectRatio.map((aspectRatio, index) => (
                          <SelectItem
                            key={index}
                            className="bg-white hover:bg-gray-100 text-black text-lg  py-2 px- mb-4 m-auto text-center flex min-w-max"
                            value={`${aspectRatio}`}
                          >
                            {aspectRatioDisplayNames[aspectRatio]}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>

                    <FormMessage />
                  </FormItem>
                )}
              />
            )}
            {(type === "aiimages" ||
              type === "thumbnail" ||
              type === "all") && (
              <FormField
                control={form.control}
                name="outputlag"
                render={({ field }) => (
                  <FormItem className="flex-auto">
                    <FormLabel className="text-n-8">
                      Number of Images:
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="select-field ">
                          <SelectValue />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {noOfImage.map((noOfImage, index) => (
                          <SelectItem
                            key={index}
                            className="bg-white hover:bg-gray-100 text-black text-lg  py-2 px- mb-4 m-auto text-center flex min-w-max"
                            value={`${noOfImage}`}
                          >
                            {noOfImage}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>

                    <FormMessage />
                  </FormItem>
                )}
              />
            )}
          </div>
          {type === "TexttoAudio" && (
            <FormField
              control={form.control}
              name="selectTone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-n-8">{tone}</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="select-field ">
                        <SelectValue placeholder="Select a verified email to display" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {voice.map((voice, index) => (
                        <SelectItem
                          key={index}
                          className="bg-white hover:bg-gray-100 text-black text-lg  py-2 px- mb-4 m-auto text-center flex min-w-max"
                          value={`${voice}`}
                        >
                          {voice}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <FormMessage />
                </FormItem>
              )}
            />
          )}
          <FormField
            control={form.control}
            name={
              type === "translate" || type === "TexttoAudio"
                ? "input"
                : "description"
            }
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-n-8">
                  {type == "translate" || type == "TexttoAudio"
                    ? "Include Text Here (max : 500 word)"
                    : subtopic}
                </FormLabel>
                <FormControl>
                  <Textarea
                    maxLength={
                      type === "translate" || type === "TexttoAudio"
                        ? 3000
                        : 500
                    }
                    placeholder=""
                    className="rounded-[16px] border-2 border-purple-200/20 shadow-sm shadow-purple-200/15  disabled:opacity-100 p-16-semibold h-[50px] md:h-[54px] focus-visible:ring-offset-0 px-4 py-3 focus-visible:ring-transparent resize-none text-black text-xs"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            key="submitButton"
            className="submit-button capitalize"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              "Submitting..."
            ) : (
              <div className="flex gap-2">
                Generate <GemIcon /> {shortVid.credits}
              </div>
            )}
          </Button>
        </form>
      </Form>
      <div>
        {response && (
          <div className="bg-white rounded-md overflow-auto text-lg border-[#8133b4] border font-sans  text-black flex flex-col gap-3  p-5 mb-10">
            <Textarea
              value={response}
              placeholder="Enter Text To Edit"
              className="w-full h-[35vh] md:h-[45vh]  p-2 bg-white rounded-md  text-lg border-[#8133b4] border font-sans  text-black   border-none outline-none overflow-auto resize-none flex-4"
            />
            <div className="flex flex-row justify-between items-center w-full gap-2">
              <p>Word Count: {countWords(response)}</p>

              <Button
                type="submit"
                onClick={(e) => handleCopyButtonClick(e, response, 0)}
                className={`rounded-md  mt-1 max-h-min  ${
                  activeStates[0]
                    ? "text-white bg-green-800 hover:bg-[#1c7429]"
                    : "text-[#8133b4] bg-[#e4dee7] hover:bg-[#d7b5ed]"
                }  text-md font-bold h-[3.2rem]  min-w-max `}
              >
                <Copy size={20} strokeWidth={2} />
                {activeStates[0] ? "Copied" : "Copy"}
              </Button>
            </div>
          </div>
        )}
        {allResponse &&
          allResponse.map((text, index) => (
            <div
              key={index}
              className=" bg-white rounded-md overflow-auto text-lg border-[#8133b4] border font-sans  text-black flex flex-col gap-3  p-5 mb-10"
            >
              {index === 0 && (
                <label className="flex-2 font-sans font-bold text-n-8">
                  Title :
                </label>
              )}
              {index === 1 && (
                <label className="flex-2 font-sans font-bold text-n-8">
                  Describtion :
                </label>
              )}
              {index === 2 && (
                <label className="flex-2 font-sans font-bold text-n-8">
                  Hashtags :
                </label>
              )}
              {index === 3 && (
                <label className="flex-2 font-sans font-bold text-n-8">
                  Script :
                </label>
              )}
              {index === 3 && (
                <label className="flex-2 font-sans font-bold text-n-8">
                  DIsclaimer :
                </label>
              )}

              <Textarea
                value={text}
                placeholder="Enter Text To Edit"
                className="w-full h-[35vh] md:h-[45vh]  p-2 bg-white rounded-md  text-lg border-[#8133b4] border font-sans  text-black   border-none outline-none overflow-auto resize-none flex-4"
              />
              <div className="flex flex-row justify-between items-center w-full gap-2">
                <p>Word Count: {countWords(text)}</p>

                <Button
                  type="submit"
                  onClick={(e) => handleCopyButtonClick(e, text, index)}
                  className={`rounded-md  mt-1 max-h-min  ${
                    activeStates[index]
                      ? "text-white bg-green-800 hover:bg-[#1c7429]"
                      : "text-[#8133b4] bg-[#e4dee7] hover:bg-[#d7b5ed]"
                  }  text-md font-bold h-[3.2rem]  min-w-max flex-2 `}
                >
                  <Copy size={20} strokeWidth={2} />
                  {activeStates[index] ? "Copied" : "Copy"}
                </Button>
              </div>
            </div>
          ))}
        {audioUrl && (
          <div className="min-h-max h-[30vh] md:h-[80vh]   p-5 m-auto flex flex-col w-full gap-2">
            <audio controls>
              <source src="/assets/audio/output.mp3" type="audio/mpeg" />
            </audio>
          </div>
        )}

        {imageUrl && (
          <div className="min-h-max p-5 m-auto grid grid-cols-2  gap-2 ">
            {imageUrl.map((item, index) => (
              <div
                className={`rounded-md overflow-hidden relative w-[${arwidth}]
              h-[${arheight}]`}
                key={index}
              >
                <button
                  className="absolute top-1 right-1 rounded-md bg-white p-2"
                  onClick={(e) =>
                    downloadHandler(
                      e,
                      item,
                      "image" + (Math.floor(Math.random() * 100) + 1).toString()
                    )
                  }
                >
                  <DownloadIcon />
                </button>

                <Image
                  alt="image"
                  className="flex-1 "
                  src={item}
                  width={arwidth}
                  height={arheight}
                  priority
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
