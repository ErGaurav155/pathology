import mongoose, { Mongoose } from "mongoose";

const MONGODB_URL = process.env.MONGODB_URL;

interface MongooseConnection {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

// Global cached object to reuse connections
let cached: MongooseConnection = (global as any).mongoose;

if (!cached) {
  cached = (global as any).mongoose = {
    conn: null,
    promise: null,
  };
}

// Connect to the database
export const connectToDatabase = async () => {
  if (cached.conn) return cached.conn;

  if (!MONGODB_URL) throw new Error("Missing MONGODB_URL");

  cached.promise =
    cached.promise ||
    mongoose.connect(MONGODB_URL, {
      dbName: "Cluster0",
      bufferCommands: false,
    });

  cached.conn = await cached.promise;

  return cached.conn;
};

// Clear the cached connection
export const clearCachedConnection = async () => {
  if (cached.conn) {
    await mongoose.disconnect(); // Disconnect the current connection
    cached.conn = null; // Reset the connection
    cached.promise = null; // Reset the promise
    console.log("Database connection cache cleared.");
  } else {
    console.log("No active connection to clear.");
  }
};
