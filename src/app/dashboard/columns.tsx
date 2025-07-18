"use client"

import { Button } from "@/components/ui/button";
import { User } from "@/generated/prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";


export const columns: ColumnDef<User>[] = [
  { accessorKey: "id", header: "ID" },
  { accessorKey: "firstname", header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Firstname
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  }, 
  { accessorKey: "lastname", header: "lastname" },
  { accessorKey: "email", header: "email" },
  { accessorKey: "gender", header: "gender" },
  { accessorKey: "phone", header: "phone" },
  { accessorKey: "address", header: "address" },
];

