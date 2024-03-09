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
import { toast } from "@/components/ui/use-toast";
import Link from "next/link";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import {
  aiImages,
  contentwriterTypes,
  creditFee,
  email,
  languages,
  longvidTypes,
  shortvidTypes,
} from "@/constants";
import { redirect } from "next/navigation";
import { generateGptResponse } from "@/lib/actions/ai.actions";
import { updateCredits } from "@/lib/actions/user.actions";
import { InsufficientCreditsModal } from "./InsufficientCreditsModal";

const formSchema = z.object({
  input: z.string().min(2, {
    message: "Username must be at least 2 characters.",
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

export default function ShortVidAiForm({
  userId,
  type,
  creditBalance,
}: ShortAiFormProps) {
  if (!userId) redirect("/sign-in");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const shortVid = shortvidTypes[type];

  let {
    type: string,
    topic,
    subtopic,
    tone,
    title,
    aiprompt,
    model,
  } = shortVid;

  const [response, setResponse] = useState<string>("");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      input: "",
      tone: "Friendly",
      description: " ",
    },
  });
  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    const { input, inputlag, outputlag, tone, description } = values;

    try {
      const response = await generateGptResponse({
        input,
        tone,
        inputlag,
        outputlag,
        description,
        aiprompt,
        model,
      });
      if (response) {
        await updateCredits(userId, creditFee);
        setResponse(response);
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
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {creditBalance < Math.abs(creditFee) && <InsufficientCreditsModal />}
        <FormField
          control={form.control}
          name="input"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{topic}</FormLabel>
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
        <div className="flex ">
          {type === "translate" && (
            <FormField
              control={form.control}
              name="tone"
              render={({ field }) => (
                <FormItem className="flex-auto">
                  <FormLabel>{tone}</FormLabel>
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
                      {languages.map((language, index) => (
                        <SelectItem
                          key={index}
                          className="bg-white text-gray-700 text-lg font-xs py-2 px-4 mb-4 w-[10vw] m-auto text-center flex"
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
              name="tone"
              render={({ field }) => (
                <FormItem className="flex-auto">
                  <FormLabel>{tone}</FormLabel>
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
                      {languages.map((language, index) => (
                        <SelectItem
                          key={index}
                          className="bg-white text-gray-700 text-lg font-xs py-2 px-4 mb-4 w-[10vw] m-auto text-center flex"
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

        {type === "slogan" && (
          <FormField
            control={form.control}
            name="tone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{tone}</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="select-field ">
                      <SelectValue placeholder="Select a verified tone to display" />
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
        {type === "facts" && (
          <FormField
            control={form.control}
            name="tone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{tone}</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="select-field ">
                      <SelectValue placeholder="Select a verified tone to display" />
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
        {type === "quote" && (
          <FormField
            control={form.control}
            name="tone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{tone}</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="select-field ">
                      <SelectValue placeholder="Select a verified tone to display" />
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
        {type === "riddle" && (
          <FormField
            control={form.control}
            name="tone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{tone}</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="select-field ">
                      <SelectValue placeholder="Select a verified tone to display" />
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
        {type === "aiimages" && (
          <FormField
            control={form.control}
            name="tone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{tone}</FormLabel>
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
                        className="bg-white text-gray-700 text-lg font-bold py-2 px-4 my-8 text-center  "
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
        {type === "thumbnail" && (
          <FormField
            control={form.control}
            name="tone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{tone}</FormLabel>
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
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{subtopic}</FormLabel>
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
          {isSubmitting ? "Submitting..." : "Submit"}
        </Button>
      </form>
    </Form>
  );
}
