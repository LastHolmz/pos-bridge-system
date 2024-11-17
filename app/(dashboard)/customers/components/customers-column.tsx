"use client";
import * as React from "react";
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";
import { IoCopyOutline } from "react-icons/io5";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { Customer } from "@prisma/client";
import { toast } from "@/hooks/use-toast";
import { CiCircleInfo } from "react-icons/ci";

export const customersColumn: ColumnDef<Customer>[] = [
  {
    accessorKey: "الاسم",
    header: "الاسم",
    cell: ({ row }) => {
      if (row) {
        const name = row.original?.name;
        return <div>{name}</div>;
      } else {
        <div>لايوجد</div>;
      }
    },
  },
  {
    accessorKey: "رقم الهاتف",
    header: "رقم الهاتف",
    cell: ({ row }) => {
      if (row) {
        const phone = row.original?.phone;
        return <div>{phone}</div>;
      } else {
        <div>لايوجد</div>;
      }
    },
  },
  {
    accessorKey: "قيمة المديونية",
    header: "قيمة المديونية",
    cell: ({ row }) => {
      if (row) {
        const debt = row.original?.debt;
        return <div>{debt} د</div>;
      } else {
        <div>لايوجد</div>;
      }
    },
  },
  {
    accessorKey: "قيمة الحساب",
    header: "قيمة الحساب",
    cell: ({ row }) => {
      if (row) {
        const currentValue = row.original?.currentValue;
        return <div>{currentValue} د</div>;
      } else {
        <div>لايوجد</div>;
      }
    },
  },

  {
    id: "actions",
    header: "الأحداث",
    enableHiding: false,
    cell: ({ row }) => {
      const customer = row.original;
      return (
        <DropdownMenu dir="rtl">
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">افتح الأحداث</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>الأحداث</DropdownMenuLabel>
            <DropdownMenuItem
              className="w-full  flex justify-between items-center"
              onClick={() => {
                navigator.clipboard.writeText(String(customer.phone));
                toast({
                  className: "bg-primary text-white",
                  description: "تم نسخ رقم رقم الهاتف بنجاح",
                });
              }}
            >
              نسح رقم الهاتف
              <IoCopyOutline />
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link
                className="w-full  flex justify-between items-center"
                href={`/inventory/${customer.id}`}
              >
                معلومات
                <CiCircleInfo />
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
