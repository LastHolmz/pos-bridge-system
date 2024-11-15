import { addProduct } from "@/database/product";
import { addSupplier } from "@/database/suppliers";
import { z } from "zod";

export async function addSupplierAction(
  prevState: {
    message: string;
  },
  formData: FormData
) {
  try {
    const schema = z.object({
      name: z.string(),
      product: z.string(),
      buyingPrice: z.string(),
      contact: z.string(),
      takingBack: z.enum(["true", "false"]),
    });
    console.log(`schema: ${schema}`);

    const data = schema.safeParse({
      name: formData.get("name"),
      product: formData.get("product"),
      buyingPrice: formData.get("buyingPrice"),
      contact: formData.get("contact"),
      takingBack: formData.get("takingBack"),
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
    const { buyingPrice, contact, name, product, takingBack } = data.data;

    const res = await addSupplier({
      supplier: {
        buyingPrice: Number(buyingPrice),
        name,
        contact,
        product,
        takingBack: takingBack ? true : false,
      },
    });
    return { message: res.message };
  } catch (e) {
    console.log(e);
    return { message: "فشلت العملية" };
  }
}
