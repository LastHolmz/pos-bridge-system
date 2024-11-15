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
import { Supplier } from "@prisma/client";
import { toast } from "@/hooks/use-toast";
import { CiCircleInfo } from "react-icons/ci";

export const suppliersColumn: ColumnDef<Supplier>[] = [
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
    accessorKey: "المنتج",
    header: "المنتج",
    cell: ({ row }) => {
      if (row) {
        const product = row.original?.product;
        return <div>{product}</div>;
      } else {
        <div>لايوجد</div>;
      }
    },
  },
  {
    accessorKey: "سعر الشراء",
    header: "سعر الشراء",
    cell: ({ row }) => {
      if (row) {
        const buyingPrice = row.original?.buyingPrice;
        return <div>{buyingPrice} د</div>;
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
        const contact = row.original?.contact;
        return <div>{contact} د</div>;
      } else {
        <div>لايوجد</div>;
      }
    },
  },
  {
    accessorKey: "امكانية الإرجاع",
    header: "امكانية الإرجاع",
    cell: ({ row }) => {
      if (row) {
        const takingBack = row.original?.takingBack;
        return <div>{takingBack ? "نعم" : "لا"}</div>;
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
      const product = row.original;
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
                navigator.clipboard.writeText(String(product.contact));
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
                href={`/inventory/${product.id}`}
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
