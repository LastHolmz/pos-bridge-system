"use server";

import prisma from "@/prisma/db";
import { revalidateTag, unstable_cache } from "next/cache";
import { Product } from "@prisma/client";
export const getProducts = unstable_cache(
  async (query?: string) => {
    try {
      const products = await prisma.product.findMany({
        where: {
          name: {
            contains: query,
          },
        },
      });
      if (!products) {
        return [];
      }
      return products;
    } catch (error) {
      console.log(error);
      return [];
    }
  },
  ["products"],
  { tags: ["products"] }
);

export const addProduct = async ({
  product,
}: {
  product: Omit<Product, "id">;
}) => {
  try {
    const newProduct = await prisma.product.create({
      data: {
        ...product,
      },
    });
    if (!newProduct) {
      return {
        message: "فشل انشاء المنتج",
      };
    }
    revalidateTag("products");
    return { message: "تم انشاء المنتج بنجاح" };
  } catch (error) {
    console.log(error);
    return { message: "فشلت العملية" };
  }
};

export const getProductById = async (id: string) => {
  try {
    const product = await prisma.product.findUnique({ where: { id } });
    return product;
  } catch (error) {
    console.log(error);
    return undefined;
  }
};
