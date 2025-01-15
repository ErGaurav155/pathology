"use client";

import { useState } from "react";
import { Collapse, Button } from "@material-tailwind/react";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Script from "next/script"; // Importing Script from next/script

export default function AibotCollapse() {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => setOpen((cur) => !cur);

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
        } sm:w-96 h-[90vh] max-h-[90vh] bg-gray-50 flex flex-col gap-4 rounded-xl shadow-xl shadow-gray-700 z-20 `}
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
        </div>

        <div id="chatbot-widget-container"></div>

        <Script
          strategy="afterInteractive"
          src="https://ainspire-tech.vercel.app/widget-loader.js?userId=678382af7dcf8cebae580bec&agentId=ai-agent-e-commerce"
        />
      </Collapse>
    </div>
  );
}
