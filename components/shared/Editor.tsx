"use client";
import { Copy } from "lucide-react";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { useEffect, useState } from "react";
import { useToast } from "../ui/use-toast";

const Editor = () => {
  const [isActive, setIsActive] = useState(false);
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

  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextToCopy(event.target.value);
  };

  return (
    <div className="min-h-max h-[80vh]   p-5 m-auto flex flex-col w-full gap-2">
      <Textarea
        value={textToCopy}
        onChange={handleTextChange}
        placeholder="Enter Text To Edit"
        className="w-full min-h-[70vh] p-2 bg-white rounded-md overflow-auto text-lg outline-none border-none text-black no-scrollbar  "
      />
      <Button
        type="submit"
        onClick={handleCopyButtonClick}
        className={`rounded-md self-end mt-3 max-h-min  ${
          isActive
            ? "text-white bg-green-800 hover:bg-[#1c7429]"
            : "text-[#8133b4] bg-[#e4dee7] hover:bg-[#d7b5ed]"
        }  text-md font-bold h-[3.2rem]  min-w-max `}
      >
        <Copy size={20} strokeWidth={2} />
        {isActive ? "Copied" : "Copy"}
      </Button>
    </div>
  );
};

export default Editor;
