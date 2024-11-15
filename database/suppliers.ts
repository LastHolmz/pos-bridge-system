"use server";

import prisma from "@/prisma/db";
import { revalidateTag, unstable_cache } from "next/cache";
import { Supplier } from "@prisma/client";
export const getSuppliers = unstable_cache(
  async (query?: string) => {
    try {
      const suppliers = await prisma.supplier.findMany({
        where: {
          name: {
            contains: query,
          },
        },
      });
      if (!suppliers) {
        return [];
      }
      return suppliers;
    } catch (error) {
      console.log(error);
      return [];
    }
  },
  ["suppliers"],
  { tags: ["suppliers"] }
);

export const addSupplier = async ({
  supplier,
}: {
  supplier: Omit<Supplier, "id">;
}) => {
  try {
    const newsupplier = await prisma.supplier.create({
      data: {
        ...supplier,
      },
    });
    if (!newsupplier) {
      return {
        message: "فشل انشاء المورد",
      };
    }
    revalidateTag("suppliers");
    return { message: "تم انشاء المورد بنجاح" };
  } catch (error) {
    console.log(error);
    return { message: "فشلت العملية" };
  }
};

export const getSupplierById = async (id: string) => {
  try {
    const supplier = await prisma.supplier.findUnique({ where: { id } });
    return supplier;
  } catch (error) {
    console.log(error);
    return undefined;
  }
};
