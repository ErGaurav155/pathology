import * as z from "zod";

export const formSchema = z.object({
  name: z.string().min(2, { message: "name must be at least 2 letter." }),
  test: z.string().min(1, { message: "Please select a department." }),
  doctor: z.string().min(1, { message: "Please select a doctor." }),
  address: z.string().optional(),
  date: z.string().min(1, { message: "Please select a date." }),
  time: z.string().min(1, { message: "Please select a time." }),
  type: z.string().min(1, { message: "Full Name is required." }),
  phone: z.string().min(1, { message: "Phone number is required." }),
  message: z.string().optional(),
});

export const formSchema1 = z.object({
  message: z.string().min(5, { message: "name must be at least 5 letter." }),
});
