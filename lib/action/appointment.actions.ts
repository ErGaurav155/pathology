"use server";

import { AppointmentParams } from "@/types/types";
import { connectToDatabase } from "../database/mongoose";
import { handleError } from "../utils";
import Appointment from "@/lib/database/models/Appointment.model";

export async function createAppointment(Appointmentdata: AppointmentParams) {
  try {
    await connectToDatabase();

    // Create a new transaction with a buyerId
    const newTransaction = await Appointment.create({
      ...Appointmentdata,
    });

    return JSON.parse(JSON.stringify(newTransaction));
  } catch (error) {
    handleError(error);
  }
}
export async function getAllAppointments() {
  try {
    await connectToDatabase();

    // Fetch all appointments from the database
    const appointments = await Appointment.find({});
    const formattedAppointments = appointments.map((appointment) => {
      return {
        _id: appointment._id.toString(), // Ensure _id is converted to string
        name: appointment.name,
        phone: appointment.phone,
        address: appointment.address,
        date: appointment.date.toISOString(), // Ensure date is in string format
        time: appointment.time,
        doctor: appointment.doctor,
        test: appointment.test,
        type: appointment.type,
        message: appointment.message || "",
        createdAt: appointment.createdAt.toISOString(), // Ensure createdAt is a string
      };
    });

    // Return the formatted result
    return { data: formattedAppointments };
    // Return the result as a JSON-parsable object
  } catch (error) {
    handleError(error);
    throw new Error("Failed to fetch appointments");
  }
}
