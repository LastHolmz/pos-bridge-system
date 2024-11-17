"use server";

import prisma from "@/prisma/db";
import { revalidateTag, unstable_cache } from "next/cache";
import { Customer } from "@prisma/client";
export const getCustomers = unstable_cache(
  async (query?: string) => {
    try {
      const customers = await prisma.customer.findMany({
        where: {
          name: {
            contains: query,
          },
        },
      });
      if (!customers) {
        return [];
      }
      return customers;
    } catch (error) {
      console.log(error);
      return [];
    }
  },
  ["customers"],
  { tags: ["customers"] }
);

export const addCustomer = async ({
  customer,
}: {
  customer: Omit<Customer, "id">;
}) => {
  try {
    const newcustomer = await prisma.customer.create({
      data: {
        ...customer,
      },
    });
    if (!newcustomer) {
      return {
        message: "فشل انشاء المستخدم",
      };
    }
    revalidateTag("customers");
    return { message: "تم انشاء المستخدم بنجاح" };
  } catch (error) {
    console.log(error);
    return { message: "فشلت العملية" };
  }
};

export const getCustomerById = async (id: string) => {
  try {
    const customer = await prisma.customer.findUnique({ where: { id } });
    return customer;
  } catch (error) {
    console.log(error);
    return undefined;
  }
};
