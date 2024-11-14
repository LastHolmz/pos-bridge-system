import { addProduct } from "@/database/product";
import { z } from "zod";

export async function addProductAction(
  prevState: {
    message: string;
  },
  formData: FormData
) {
  try {
    const schema = z.object({
      qty: z.string(),
      name: z.string(),
      barcode: z.string(),
      buyingPrice: z.string(),
      sellingPrice: z.string(),
      unit: z.string(),
      expiryDate: z.string(),
    });
    console.log(`schema: ${schema}`);

    const data = schema.safeParse({
      qty: formData.get("qty"),
      name: formData.get("name"),
      barcode: formData.get("barcode"),
      buyingPrice: formData.get("buyingPrice"),
      sellingPrice: formData.get("sellingPrice"),
      unit: formData.get("unit"),
      expiryDate: formData.get("expiryDate"),
    });

    console.log(data.success);
    if (!data.success) {
      return { message: "يجب أن يتم ملء جميع الحقول" };
    }
    console.log(data);

    console.log(data.success);
    if (!data.success) {
      return { message: "يجب أن يتم ملء جميع الحقول" };
    }
    console.log(data);
    const { barcode, buyingPrice, expiryDate, name, qty, sellingPrice, unit } =
      data.data;

    const res = await addProduct({
      product: {
        barcode,
        buyingPrice: Number(buyingPrice),
        sellingPrice: Number(sellingPrice),
        expiryDate: new Date(expiryDate),
        name,
        qty: Number(qty),
        unit: Number(unit),
      },
    });
    return { message: res.message };
  } catch (e) {
    console.log(e);
    return { message: "فشلت العملية" };
  }
}
