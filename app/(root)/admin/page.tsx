import React from "react";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { AppointmentParams } from "@/types/types";
import { Footer } from "@/components/shared/Footer";

import { getAllAppointments } from "@/lib/action/appointment.actions";
import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs";

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

const AppointmentTable = async () => {
  const { userId } = await auth();
  if (!userId) redirect("/sign-in");
  const ownerId = process.env.OWNER_USER_ID; // Store the Clerk owner ID in .env
  if (userId !== ownerId) {
    redirect("/");
  }
  const response = await getAllAppointments(); // Fetch data
  if (!response.data) redirect("/");

  const table = useReactTable({
    data: response.data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

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
