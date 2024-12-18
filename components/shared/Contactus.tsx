"use client";

import React, { useState } from "react";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useForm } from "react-hook-form";
import GoogleMapComponent from "@/components/shared/GoogleMapComp";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema } from "@/lib/validator";
import { createAppointment } from "@/lib/action/Appointment.actions";
import { toast } from "../ui/use-toast";
import { InsufficientCreditsModal } from "./InsufficientCreditsModal";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [appointmentBooked, setAppointmentBooked] = useState<boolean>(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      address: "",
      date: "",
      time: "",
      doctor: "",
      phone: "",
      message: "",
      test: "",
      type: "",
    },
  });

  // Submit handler
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setIsSubmitting(true);
      console.log(values); // Handle form submission
      const Appointmentdata = {
        name: values.name,
        phone: values.phone,
        address: values.address,
        date: values.date,
        time: values.time,
        doctor: values.doctor,
        message: values.message,
        test: values.test,
        type: values.type,
      };

      const response = await createAppointment(Appointmentdata);

      if (response) {
        setAppointmentBooked(true);
      } else {
        toast({
          title: "Appointment booking Failed",
          description: `Note : Plz copy response in word or download images or audio if
            you want,once page refresh you will never see them back `,
          duration: 2000,
          className: "error-toast",
        });
      }
    } catch (error) {
      toast({
        title: "Appointment booking Failed",
        description: `Note : Plz copy response in word or download images or audio if
          you want,once page refresh you will never see them back `,
        duration: 2000,
        className: "error-toast",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  if (appointmentBooked) {
    return <InsufficientCreditsModal />;
  }
  return (
    <section className=" w-full shadow-lg my-5 rounded-md py-16 bg-gray-50">
      <div className="container  mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Google Map */}
          <GoogleMapComponent />

          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-semibold text-gray-800">
              Contact With Us
            </h2>
            <p className="mt-2 mb-2 text-gray-600">
              If you have any questions, please feel free to contact us.
            </p>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                {/* Department and Doctor Fields */}
                <div className="flex flex-col sm:flex-row   gap-1 items-center justify-between w-full">
                  <FormField
                    control={form.control}
                    name="test"
                    render={({ field }) => (
                      <FormItem className="flex-auto w-full">
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <SelectTrigger className="select-field ">
                            <SelectValue placeholder="Choose Test" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem
                              className="bg-white hover:bg-gray-100 text-black text-lg  py-2 px- mb-4 m-auto text-center flex min-w-max"
                              value="Vital Organs & Diabetes Monitoring"
                            >
                              Vital Organs & Diabetes Monitoring
                            </SelectItem>
                            <SelectItem
                              className="bg-white hover:bg-gray-100 text-black text-lg  py-2 px- mb-4 m-auto text-center flex min-w-max"
                              value="Prime Plus Full Body Check Up"
                            >
                              Prime Plus Full Body Check Up
                            </SelectItem>
                            <SelectItem
                              className="bg-white hover:bg-gray-100 text-black text-lg  py-2 px- mb-4 m-auto text-center flex min-w-max"
                              value="Prime Full Body Check Up"
                            >
                              Prime Full Body Check Up
                            </SelectItem>
                            <SelectItem
                              className="bg-white hover:bg-gray-100 text-black text-lg  py-2 px- mb-4 m-auto text-center flex min-w-max"
                              value="Polycystic Ovarian Disease Package"
                            >
                              Polycystic Ovarian Disease Package
                            </SelectItem>
                            <SelectItem
                              className="bg-white hover:bg-gray-100 text-black text-lg  py-2 px- mb-4 m-auto text-center flex min-w-max"
                              value="Lipid & Diabetes Monitoring Package"
                            >
                              Lipid & Diabetes Monitoring Package
                            </SelectItem>
                            <SelectItem
                              className="bg-white hover:bg-gray-100 text-black text-lg  py-2 px- mb-4 m-auto text-center flex min-w-max"
                              value="Fever Package Basic"
                            >
                              Fever Package Basic
                            </SelectItem>
                            <SelectItem
                              className="bg-white hover:bg-gray-100 text-black text-lg  py-2 px- mb-4 m-auto text-center flex min-w-max"
                              value="Fever Package Advance"
                            >
                              Fever Package Advance
                            </SelectItem>
                            <SelectItem
                              className="bg-white hover:bg-gray-100 text-black text-lg  py-2 px- mb-4 m-auto text-center flex min-w-max"
                              value="Diabetes Tracker Package"
                            >
                              Diabetes Tracker Package
                            </SelectItem>
                            <SelectItem
                              className="bg-white hover:bg-gray-100 text-black text-lg  py-2 px- mb-4 m-auto text-center flex min-w-max"
                              value="Diabetes Package Advance"
                            >
                              Diabetes Package Advance
                            </SelectItem>
                            <SelectItem
                              className="bg-white hover:bg-gray-100 text-black text-lg  py-2 px- mb-4 m-auto text-center flex min-w-max"
                              value="Diabetes Package Basic"
                            >
                              Diabetes Package Basic
                            </SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="type"
                    render={({ field }) => (
                      <FormItem className="flex-auto w-full">
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <SelectTrigger className="select-field">
                            <SelectValue placeholder="Select Type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem
                              className="bg-white hover:bg-gray-100 text-black text-lg  py-2 px- mb-4 m-auto text-center flex min-w-max"
                              value="  Center Visit"
                            >
                              Center Visit
                            </SelectItem>
                            <SelectItem
                              className="bg-white hover:bg-gray-100 text-black text-lg  py-2 px- mb-4 m-auto text-center flex min-w-max"
                              value="Home Collection"
                            >
                              Home Collection
                            </SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex flex-col sm:flex-row gap-1 items-center justify-between w-full">
                  <FormField
                    control={form.control}
                    name="doctor"
                    render={({ field }) => (
                      <FormItem className="flex-auto w-full">
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <SelectTrigger className="select-field ">
                            <SelectValue placeholder="Choose Doctor" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem
                              className="bg-white hover:bg-gray-100 text-black text-lg  py-2 px- mb-4 m-auto text-center flex min-w-max"
                              value="Doctor A"
                            >
                              Doctor A
                            </SelectItem>
                            <SelectItem
                              className="bg-white hover:bg-gray-100 text-black text-lg  py-2 px- mb-4 m-auto text-center flex min-w-max"
                              value="Doctor B"
                            >
                              Doctor B
                            </SelectItem>
                            <SelectItem
                              className="bg-white hover:bg-gray-100 text-black text-lg  py-2 px- mb-4 m-auto text-center flex min-w-max"
                              value="Doctor C"
                            >
                              Doctor C
                            </SelectItem>
                            <SelectItem
                              className="bg-white hover:bg-gray-100 text-black text-lg  py-2 px- mb-4 m-auto text-center flex min-w-max"
                              value="Doctor D"
                            >
                              Doctor D
                            </SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="address"
                    render={({ field }) => (
                      <FormItem className="flex-auto w-full">
                        <FormControl>
                          <Input
                            type="text"
                            className="select-field"
                            placeholder=" Enter Address"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Date and Time Fields */}
                <div className="flex flex-col sm:flex-row gap-1 items-center justify-between w-full">
                  <FormField
                    control={form.control}
                    name="date"
                    render={({ field }) => (
                      <FormItem className="flex-auto w-full">
                        <FormControl>
                          <Input
                            type="date"
                            className="select-field"
                            placeholder="dd/mm/yyyy"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="time"
                    render={({ field }) => (
                      <FormItem className="flex-auto w-full">
                        <FormControl>
                          <Input
                            type="text"
                            className="select-field"
                            placeholder="Time"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Name and Phone Fields */}
                <div className="flex flex-col sm:flex-row gap-1 items-center justify-between w-full">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem className="flex-auto w-full">
                        <FormControl>
                          <Input
                            type="text"
                            className="select-field"
                            placeholder="Full Name"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem className="flex-auto w-full">
                        <FormControl>
                          <Input
                            type="number"
                            className="select-field"
                            placeholder="Phone Number"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Message Field */}
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Textarea
                          rows={6}
                          className="select-field"
                          placeholder="Your Message"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Submit Button */}
                <div className="col-span-2">
                  {isSubmitting ? (
                    <Button
                      type="submit"
                      className="px-4 py-2 text-base md:text-xl hover:bg-indigo-600 bg-indigo-700 text-white w-full"
                    >
                      Submitting...
                    </Button>
                  ) : (
                    <Button
                      type="submit"
                      className="px-4 py-2 text-base md:text-xl hover:bg-indigo-600 bg-indigo-700 text-white w-full"
                    >
                      Send
                    </Button>
                  )}
                </div>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
