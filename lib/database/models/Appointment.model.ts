import { Schema, model, models } from "mongoose";

// Define Appointment Schema
const AppointmentSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  phone: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
    trim: true,
  },
  date: {
    type: Date,
    required: true,
  },
  time: {
    type: String, // Time in string format (e.g., "10:30 AM")
    required: true,
  },
  doctor: {
    type: String,
    required: true,
    trim: true,
  },
  test: {
    type: String,
    required: true,
    trim: true,
  },
  type: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Export the Appointment model
const Appointment =
  models?.Appointment || model("Appointment", AppointmentSchema);

export default Appointment;
