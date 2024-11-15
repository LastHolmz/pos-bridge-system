import ProductTable from "@/components/reusable-table";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { getProducts } from "@/database/product";
import { Metadata } from "next";
import { Suspense } from "react";
import { productColumn } from "./components/product-column";
import { AddProduct } from "./components/forms";

export const metadata: Metadata = {
  title: "ادارة المخزون الكلي",
};

const page = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) => {
  const query = (await searchParams).query;
  const products = await getProducts(query);

  return (
    <main className="p-2">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">الرئيسية</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>المخزون</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="md:container">
        <div className="bg-background px-4 py-6 min-w-full my-4 rounded-xl">
          <h1 className="font-semibold text-xl mb-4">المخزون الكلي</h1>
          <div className="grid  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-5 gap-10">
            <div className="grid gap-4 border-l">
              <h4 className="font-semibold text-lg text-primary">الأصناف</h4>
              <p className="font-bold">800</p>
              <span className="text-sm text-foreground/80">اخر 7 ايام</span>
            </div>
            <div className="grid border-l">
              <h4 className="font-semibold text-lg text-sky-500">
                كل المنتجات
              </h4>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold my-4">14</p>
                  <span className="text-sm text-foreground/80">اخر 7 ايام</span>
                </div>
                <div>
                  <p className="font-semibold my-4">25000$</p>
                  <span className="text-sm text-foreground/80">ربح</span>
                </div>
              </div>
            </div>
            <div className="grid border-l">
              <h4 className="font-semibold text-lg text-purple-500">
                الأكثر مبيعا
              </h4>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold my-4">5</p>
                  <span className="text-sm text-foreground/80">اخر 7 ايام</span>
                </div>
                <div>
                  <p className="font-semibold my-4">2500$</p>
                  <span className="text-sm text-foreground/80">ربح</span>
                </div>
              </div>
            </div>
            <div className="grid">
              <h4 className="font-semibold text-lg text-red-500">
                المخزون المنخفض
              </h4>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold my-4">12</p>
                  <span className="text-sm text-foreground/80">تم الطلب</span>
                </div>
                <div>
                  <p className="font-semibold my-4">2</p>
                  <span className="text-sm text-foreground/80">
                    غير متوفر في المخزون
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-background px-4 py-6 min-w-full my-4 rounded-xl">
          <h2 className="text-xl font-bold">المنتجات</h2>
          <Suspense fallback={"جاري التحميل"}>
            <ProductTable
              searchPlaceholder="البحث بالاسم"
              data={products}
              columns={productColumn}
              searchQuery="query"
            >
              <AddProduct />
            </ProductTable>
          </Suspense>
        </div>
      </div>
    </main>
  );
};

export default page;
