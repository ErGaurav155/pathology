"use client";

import React, { useEffect, useState } from "react";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { AppointmentParams } from "@/types/types";
import { Footer } from "@/components/shared/Footer";
import { useAuth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { getUserById } from "@/lib/action/User.action";
import { getAllAppointments } from "@/lib/action/Appointment.actions";

const columnHelper = createColumnHelper<AppointmentParams>();

const columns = [
  columnHelper.accessor("name", {
    header: () => "Name",
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("phone", {
    header: () => "Phone",
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("address", {
    header: () => "Address",
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("date", {
    header: () => "Date",
    cell: (info) => new Date(info.getValue()).toLocaleDateString(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("time", {
    header: () => "Time",
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("doctor", {
    header: () => "Doctor",
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("test", {
    header: () => "Test",
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("type", {
    header: () => "Type",
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("message", {
    header: () => "Message",
    cell: (info) => info.getValue() || "N/A",
    footer: (info) => info.column.id,
  }),
];

const AppointmentTable = () => {
  // const { userId } = useAuth();

  // if (!userId) redirect("/sign-in");

  // const user = await getUserById(userId);
  // const userID = user._id;

  // if (userID !== ) {
  //    return (
  //     <div className="w-full  min-h-[100vh] flex flex-col justify-center items-center">
  //          You Are Not Admin
  //    </div>
  //   );
  // }

  const [appointments, setAppointments] = useState<AppointmentParams[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  // const user = useAuth();
  // if (user.userId === ) {

  // } else {

  // }
  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await getAllAppointments(); // Fetch data
        if (response.data) {
          setAppointments(response.data); // Set fetched data
        } else {
          console.error("Failed to fetch appointments");
        }
      } catch (error) {
        console.error("Error fetching appointments:", error);
      } finally {
        setLoading(false); // Ensure loading state is cleared
      }
    };

    fetchAppointments();
  }, []);

  const table = useReactTable({
    data: appointments,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  if (loading) {
    return (
      <div className="w-full  min-h-[100vh] flex flex-col justify-center items-center">
        Loading...
      </div>
    ); // Show loading state
  }

  return (
    <div className="w-full  min-h-[100vh] flex flex-col justify-between items-center">
      <div className="max-w-7xl w-full p-2 data-table  mt-4  md:mt-11 no-scrollbar">
        <table className="shad-table  w-full  ">
          <thead className="bg-gray-300 text-center">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr
                key={headerGroup.id}
                className="shad-table-row-header text-center"
              >
                {headerGroup.headers.map((header) => (
                  <th key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id} className="shad-table-row text-center">
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </div>
  );
};

export default AppointmentTable;

// Mock getAllAppointments function
