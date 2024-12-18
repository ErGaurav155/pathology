"use client";

import React, { useState } from "react";
import { Collapse, Button, CardBody, Input } from "@material-tailwind/react";
import { User2, ChevronDown } from "lucide-react";
import {
  ArrowPathIcon,
  ChevronDoubleDownIcon,
  SparklesIcon,
} from "@heroicons/react/24/solid";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import { generateGptResponse } from "@/lib/action/ai.action";
import { string, z } from "zod";
import { toast } from "../ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { formSchema1 } from "@/lib/validator";
export default function AibotCollapse() {
  const form = useForm<z.infer<typeof formSchema1>>({
    resolver: zodResolver(formSchema1),
    defaultValues: {
      message: "",
    },
  });

  // Submit handler
  const onSubmit = (values: z.infer<typeof formSchema1>) => {
    console.log(values); // Handle form submission
  };

  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "AI Bot", text: "Hello! How can I help you?" },
  ]);
  const [userInput, setUserInput] = useState("");

  const toggleOpen = () => setOpen((cur) => !cur);

  const handleSend = async () => {
    if (userInput.trim()) {
      setMessages([...messages, { sender: "You", text: userInput }]);
      const inputMessage = userInput; // Capture the input
      setUserInput(""); // Clear input field

      try {
        const response = await generateGptResponse({
          userInput: inputMessage,
        }); // Pass as an object

        if (response) {
          setMessages((prevMessages) => [
            ...prevMessages,
            { sender: "AI Bot", text: response },
          ]);
        } else {
          toast({
            title: "Content Warning",

            duration: 2000,
            className: "error-toast",
          });
        }
      } catch (error) {
        console.error("Error:", error);
        setMessages((prevMessages) => [
          ...prevMessages,
          { sender: "AI Bot", text: "Sorry, something went wrong!" },
        ]);
      }
    }
  };

  const restartChat = () => {
    setMessages([{ sender: "AI Bot", text: "Hello! How can I help you?" }]);
  };

  return (
    <div className="h-auto w-auto flex flex-col">
      {/* Floating Button */}
      <div
        className={`fixed bottom-4 right-4 bg-black text-white rounded-full shadow-lg p-3 z-40 hover:bg-n-5 transition ${
          open ? "hidden" : "inline-block"
        } `}
      >
        <Button className="bg-transparent p-0" onClick={toggleOpen}>
          <div className="border w-8 h-8 md:w-14 md:h-14 p-1 md:p-3 rounded-full bg-gray-200">
            <SparklesIcon className="text-gray-700" />
          </div>
        </Button>
      </div>

      {/* Chat Box */}
      <Collapse
        open={open}
        className={`fixed bottom-4 right-5 w-[90vw] ${
          open ? "border" : "border-none"
        }   sm:w-96 h-[90vh] max-h-[90vh] bg-gray-50 flex flex-col gap-4 rounded-xl shadow-xl shadow-gray-700 z-20 `}
      >
        {/* Header */}
        <div className="flex p-4 items-center justify-between gap-2 w-full border-b">
          <div className="pl-3 w-full flex items-center text-nowrap justify-start gap-4">
            <div className="border w-14 h-14 p-3 rounded-full bg-gray-200">
              <SparklesIcon className="text-gray-700" />
            </div>
            <span className="font-normal flex gap-1 md:gap-2 text-xl md:text-2xl">
              {["Lab", "Ai"].map((word, index) => (
                <span
                  key={index}
                  style={{
                    display: "block ",
                    animation: `colorChangeHorizontal  2s infinite ${
                      index * 0.5
                    }s`,
                  }}
                >
                  {word}
                </span>
              ))}
            </span>{" "}
          </div>
          <div className="w-full flex items-center justify-center gap-4">
            <button
              className="w-10 h-10 p-2 rounded-full hover:bg-gray-300"
              onClick={restartChat}
            >
              <ArrowPathIcon className="text-gray-700" />
            </button>
            <button className="w-10 h-10 p-2 rounded-full hover:bg-gray-300">
              <ChevronDoubleDownIcon
                onClick={toggleOpen}
                className="text-gray-700"
              />
            </button>
          </div>
        </div>

        {/* Chat Messages */}
        <div className="flex flex-col p-4 flex-1 min-h-[50vh] z-10 overflow-y-auto no-scrollbar">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${
                msg.sender === "You" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`p-3 my-1 rounded-lg ${
                  msg.sender === "You"
                    ? "bg-green-500 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
              >
                <span>{msg.text}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Input Box */}
        <div className="flex items-center gap-2 p-4 border-t">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className=" flex items-center justify-between gap-3 w-full"
            >
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem className="w-full ">
                    <FormControl>
                      <input
                        className="select-field w-full"
                        placeholder="Your Message"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Submit Button */}
              <Button
                type="submit"
                className="px-4 py-2 text-base md:text-xl hover:bg-indigo-600 bg-indigo-700 text-white "
                onClick={handleSend}
              >
                Send
              </Button>
            </form>
          </Form>
        </div>
      </Collapse>
    </div>
  );
}
