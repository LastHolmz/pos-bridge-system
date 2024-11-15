import SuppliersTable from "@/components/reusable-table";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Metadata } from "next";
import { Suspense } from "react";
import { suppliersColumn } from "./components/suppliers-column";
import { AddSupplier } from "./components/forms";
import { getSuppliers } from "@/database/suppliers";

export const metadata: Metadata = {
  title: "ادارة الموردين",
};

const page = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) => {
  const query = (await searchParams).query;
  const suppliers = await getSuppliers(query);

  return (
    <main className="p-2">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">الرئيسية</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>الموردين</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="md:container">
        <div className="bg-background px-4 py-6 min-w-full my-4 rounded-xl">
          <h2 className="text-xl font-bold">الموردين</h2>
          <Suspense fallback={"جاري التحميل"}>
            <SuppliersTable
              searchPlaceholder="البحث بالاسم"
              data={suppliers}
              columns={suppliersColumn}
              searchQuery="query"
            >
              <AddSupplier />
            </SuppliersTable>
          </Suspense>
        </div>
      </div>
    </main>
  );
};

export default page;
