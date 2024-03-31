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
  contentwriterTypes,
  creditFee,
  email,
  languages,
} from "@/constants";
import { redirect } from "next/navigation";
import { generateGptResponse } from "@/lib/actions/ai.actions";
import { fetchContentWriterData } from "@/lib/actions/ai.actions";
import { updateCredits } from "@/lib/actions/user.actions";
import { InsufficientCreditsModal } from "./InsufficientCreditsModal";
import { Check, CoinsIcon, Copy, DownloadIcon, GemIcon } from "lucide-react";
import Image from "next/image";
import { download } from "@/lib/utils";

const formSchema = z.object({
  input: z.string().min(2, {
    message: "input must be at least 2 characters.",
  }),
  tone: z
    .string()
    .min(2, {
      message: "Please select an tone to display.",
    })
    .optional(),
  inputlag: z
    .string()
    .min(2, {
      message: "Please select an tone to display.",
    })
    .optional(),
  outputlag: z
    .string()
    .min(2, {
      message: "Please select an tone to display.",
    })
    .optional(),
  description: z.string().optional(),
});

interface AiImages {
  category: string;
  values: string[];
}

export default function ContentWriterAiForm({
  userId,
  type,
  creditBalance,
}: ContentWriterAiFormProps) {
  if (!userId) redirect("/sign-in");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const contentWriter = contentwriterTypes[type];
  const [isActive, setIsActive] = useState(false);
  const [isDownload, setIsDownload] = useState(false);

  const [textToCopy, setTextToCopy] = useState("");

  const { toast } = useToast();

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (isActive) {
      timer = setTimeout(() => {
        setIsActive(false);
      }, 3000);
    }

    return () => clearTimeout(timer);
  }, [isActive]);

  const handleCopyButtonClick = () => {
    if (textToCopy) {
      navigator.clipboard.writeText(textToCopy);
      setIsActive(true);
    } else {
      toast({
        title: "Plz Enter Text",
        description: "No text in textbox",
        duration: 5000,
        className: "error-toast",
      });
    }
  };
  const downloadHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    //   download();
    //   // getCldImageUrl({
    //   //   width: image?.width,
    //   //   height: image?.height,
    //   //   src: image?.publicId,
    //   //   ...transformationConfig,
    //   // }),
    //   // title
    //   setIsDownload(true);
    // };
  };
  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextToCopy(event.target.value);
  };

  const {
    type: string,
    topic,
    subtopic,
    tone,
    title,
    aiprompt,
    model,
    credits: number,
  } = contentWriter;
  const [response, setResponse] = useState<string | null>();
  const [allResponse, setAllResponse] = useState<string[] | null>();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      input: "",
      tone: "Friendly",
      description: " ",
    },
  });

  const countWords = (response: string) => {
    const words = response.trim().split(/\s+/);
    return words.filter((word) => word !== "").length;
  };

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    const { input, inputlag, outputlag, tone, description } = values;
    console.log(values);
    try {
      if (type !== "all") {
        const res = await generateGptResponse({
          input,
          tone,
          inputlag,
          outputlag,
          description,
          aiprompt,
          model,
        });
        if (res) {
          await updateCredits(userId, -contentWriter.credits);
          setResponse(res);
        }
      } else {
        const res = await fetchContentWriterData({
          input,
          tone,
          inputlag,
          outputlag,
          description,
          model,
        });
        if (res) {
          await updateCredits(userId, -contentWriter.credits);
          setAllResponse(res);
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
          {creditBalance < Math.abs(contentWriter.credits) && (
            <InsufficientCreditsModal />
          )}
          {type !== "translation" && type !== "TexttoAudio" && (
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
            {type === "translation" && (
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
                            className="bg-white text-gray-700 text-lg font-xs py-2 px-4 mb-4 m-auto w-[10vw] text-center flex justify-center "
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
            {type === "translation" && (
              <FormField
                control={form.control}
                name="outputlag"
                render={({ field }) => (
                  <FormItem className="flex-auto">
                    <FormLabel className="text-n-8">{subtopic}</FormLabel>
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
                            className="bg-white text-gray-700 text-lg font-xs py-2 px-4 mb-4  w-[10vw] m-auto text-center justify-center  flex"
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

          {type === "email" && (
            <FormField
              control={form.control}
              name="tone"
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
                      {email.map((email, index) => (
                        <SelectItem
                          key={index}
                          className="bg-white hover:bg-gray-100 text-black text-lg  py-2 px- mb-4 m-auto text-center flex min-w-max"
                          value={`${email}-${index}`}
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
          {type === "images" && (
            <FormField
              control={form.control}
              name="tone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-n-8">{tone}</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="select-field">
                        <SelectValue placeholder="Select a verified tone to display" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {aiImages.map((categoryObj: AiImages) => (
                        <div
                          key={categoryObj.category}
                          className="bg-white text-gray-700 text-lg font-bold py-2 px-4 my-8  text-center "
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
          {type === "coverimage" && (
            <FormField
              control={form.control}
              name="tone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-n-8">{tone}</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="select-field">
                        <SelectValue placeholder="Select a verified tone to display" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {aiImages.map((categoryObj: AiImages) => (
                        <div
                          key={categoryObj.category}
                          className="bg-white text-gray-700 text-lg font-bold py-2 px-4 my-8  text-center "
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
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-n-8">
                  {type === "translation" ? "Include Text Here" : subtopic}
                </FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Eg. provide some ideas related to gaming niche"
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
                Generate <GemIcon /> {contentWriter.credits}
              </div>
            )}
          </Button>
        </form>
      </Form>
      <div>
        {response && (
          <div className="min-h-max h-[30vh] md:h-[80vh]   p-5 m-auto flex flex-col w-full gap-2">
            <Textarea
              value={response}
              placeholder="Enter Text To Edit"
              className="w-full min-h-[30vh] md:min-h-[60vh] p-2 bg-white rounded-md overflow-auto text-lg border-[#8133b4] border font-sans  text-black   "
            />
            <div className="flex flex-row justify-between items-center w-full gap-2">
              <p>Word Count: {countWords(response)}</p>

              <Button
                type="submit"
                onClick={handleCopyButtonClick}
                className={`rounded-md  mt-1 max-h-min  ${
                  isActive
                    ? "text-white bg-green-800 hover:bg-[#1c7429]"
                    : "text-[#8133b4] bg-[#e4dee7] hover:bg-[#d7b5ed]"
                }  text-md font-bold h-[3.2rem]  min-w-max `}
              >
                <Copy size={20} strokeWidth={2} />
                {isActive ? "Copied" : "Copy"}
              </Button>
            </div>
          </div>
        )}
        {allResponse &&
          allResponse.map((response, index) => (
            <div
              key={index}
              className="min-h-max h-[30vh] md:h-[80vh]   p-5 m-auto flex flex-col w-full gap-2"
            >
              <Textarea
                value={response}
                placeholder="Enter Text To Edit"
                className="w-full min-h-[30vh] md:min-h-[60vh] p-2 bg-white rounded-md overflow-auto text-lg border-[#8133b4] border font-sans  text-black   "
              />
              <div className="flex flex-row justify-between items-center w-full gap-2">
                <p>Word Count: {countWords(response)}</p>

                <Button
                  type="submit"
                  onClick={handleCopyButtonClick}
                  className={`rounded-md  mt-1 max-h-min  ${
                    isActive
                      ? "text-white bg-green-800 hover:bg-[#1c7429]"
                      : "text-[#8133b4] bg-[#e4dee7] hover:bg-[#d7b5ed]"
                  }  text-md font-bold h-[3.2rem]  min-w-max `}
                >
                  <Copy size={20} strokeWidth={2} />
                  {isActive ? "Copied" : "Copy"}
                </Button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
