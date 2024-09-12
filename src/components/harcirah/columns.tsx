"use client";

import { ColumnDef } from "@tanstack/react-table";
import UserCard from "../UserCard/card";
import moment from "moment";
import { ArrowUpDown } from "lucide-react";

import { MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export type Harcirah = {
  id: string;
  title: string;
  author: User;
  from: string;
  to: string;
  startedAt: Date;
  endedAt: Date;
  createdAt: Date;
  editedAt: Date | null;
  unitFee: number;
  totalFee: number;
  expense: number;
  meal: string;
};

export const columns: ColumnDef<Harcirah>[] = [
  {
    accessorKey: "title",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Başlık
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "author",
    header: () => <div className="text-center">Kişi</div>,
    cell: ({ row }) => {
      const user = row.getValue("author") as User;
      return <UserCard user={user} />;
    },
  },
  {
    accessorKey: "from",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Nereden
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "to",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Nereye
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "meal",
    header: "Öğün",
  },
  {
    accessorKey: "startedAt",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Başlangıç
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const date = row.getValue("startedAt") as Date;
      return <span>{moment(date).format("DD/MM/YYYY HH:mm")}</span>;
    },
  },
  {
    accessorKey: "endedAt",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Bitiş
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const date = row.getValue("endedAt") as Date;
      return <span>{moment(date).format("DD/MM/YYYY HH:mm")}</span>;
    },
  },
  {
    accessorKey: "unitFee",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Birim Ücret
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const fee = row.getValue("unitFee") as number;
      return (
        <span className="text-center">{fee.toLocaleString("tr-TR")} TL</span>
      );
    },
  },
  {
    accessorKey: "totalFee",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Ödecek Ücret
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const fee = row.getValue("totalFee") as number;
      return (
        <span className="text-center">{fee.toLocaleString("tr-TR")} TL</span>
      );
    },
  },
  {
    accessorKey: "expense",
    header: "Giderler",
    cell: ({ row }) => {
      const expense = row.getValue("expense") as number;
      return (
        <span className="text-center">
          {expense.toLocaleString("tr-TR")} TL
        </span>
      );
    },
  },
  {
    id: "actions",
    header: () => <div className="text-center">İşlemler</div>,
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(payment.id)}
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
