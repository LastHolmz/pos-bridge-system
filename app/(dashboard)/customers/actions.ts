import { addCustomer } from "@/database/customers";
import { z } from "zod";

export async function addCustomerAction(
  prevState: {
    message: string;
  },
  formData: FormData
) {
  try {
    const schema = z.object({
      name: z.string(),
      phone: z.string(),
      debt: z.string(),
      currentValue: z.string(),
    });
    console.log(`schema: ${schema}`);

    const data = schema.safeParse({
      name: formData.get("name"),
      debt: formData.get("debt"),
      currentValue: formData.get("currentValue"),
      phone: formData.get("phone"),
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
    const { currentValue, phone, name, debt } = data.data;

    const res = await addCustomer({
      customer: {
        currentValue: Number(currentValue),
        debt: Number(debt),
        name,
        phone,
      },
    });
    return { message: res.message };
  } catch (e) {
    console.log(e);
    return { message: "فشلت العملية" };
  }
}
