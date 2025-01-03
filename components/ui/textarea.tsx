import * as React from "react";

import { cn } from "@/lib/utils";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      // Here, you can modify the event or pass it along as is
      // For example, adding a value to props before passing the event along
      // const newValue = event.target.value + " additional value";
      // props.onChange?.({ ...event, target: { ...event.target, value: newValue } });
      props.onChange?.(event); // Pass along the event as is
    };
    return (
      <textarea
        className={cn(
          "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none  disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
        onChange={handleChange}
      />
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };
