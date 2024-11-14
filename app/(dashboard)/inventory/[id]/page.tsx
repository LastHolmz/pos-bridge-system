import { getProductById } from "@/database/product";
import { notFound } from "next/navigation";
import { formatDate } from "@/lib/date";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";

const page = async ({ params }: { params: { id: Promise<string> } }) => {
  const id = await params.id;
  const product = await getProductById(id);
  if (!product) {
    return notFound();
  }
  return (
    <section className="my-2">
      <div className="grid lg:grid-cols-2 gap-10">
        <div className="phone-only:text-center">
          <div className="grid gap-4 ">
            <h2 className="font-semibold">المعلومات الاساسية</h2>
            <div className="grid grid-cols-2 text-sm">
              <span className="text-foreground/80">الاسم</span>
              <p className="text-base">{product.name}</p>
            </div>
            <div className="grid grid-cols-2 text-sm">
              <span className="text-foreground/80">الباركود</span>
              <p className="text-base">{product.barcode}</p>
            </div>
            <div className="grid grid-cols-2 text-sm">
              <span className="text-foreground/80">تاريخ انهاء الصلاحية</span>
              <p className="text-base">{formatDate(product.expiryDate)}</p>
            </div>
          </div>
          {/* supplier info */}
          <div className=" grid gap-4 mt-10">
            <h3 className="font-semibold  my-4">تفاصيل المورد</h3>
            <div className="grid grid-cols-2 text-sm">
              <span className="text-foreground/80">اسم المورد</span>
              <p className="text-base">{"محمد على"}</p>
            </div>{" "}
            <div className="grid grid-cols-2 text-sm">
              <span className="text-foreground/80">رقم الهاتف</span>
              <p className="text-base">{"0928666458"}</p>
            </div>
          </div>
          <div className="mt-10 grid gap-4">
            <h3 className="font-semibold">مواقع المخزون</h3>
            <Table>
              {/* <TableCaption>قائمة بالمتاجر التى تحتوي على المنتج</TableCaption> */}
              <TableHeader className="bg-secondary">
                <TableRow>
                  <TableHead>اسم المتجر</TableHead>
                  <TableHead>المخزون المتوفر</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>فرع طرابلس</TableCell>
                  <TableCell>15</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>فرع بنغازي</TableCell>
                  <TableCell>29</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
        <div className="grid phone-only:mt-10 items-center text-center">
          <div className=" relative border-dashed lg:w-[280px] p-4 rounded-lg border-2  w-[180px] flex justify-center items-center mx-auto">
            <div className="lg:w-[200px]  w-[150px] mx-auto rounded-lg overflow-hidden">
              <Image
                src={"/coffee.jpg"}
                alt={`${product.name} image`}
                width={400}
                height={400}
                className=" object-cover w-full h-full"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 text-sm">
            <span className="text-foreground/80">المخزون الإفتتاحي</span>
            <p className="text-base">{"40"}</p>
          </div>
          <div className="grid grid-cols-2 text-sm">
            <span className="text-foreground/80">المخزون المتبقي</span>
            <p className="text-base">{"34"}</p>
          </div>
          <div className="grid grid-cols-2 text-sm">
            <span className="text-foreground/80">في الطريق</span>
            <p className="text-base">{"10"}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
