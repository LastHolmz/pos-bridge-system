import CustomersTable from "@/components/reusable-table";
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
import { customersColumn } from "./components/customers-column";
import { AddSupplier } from "./components/forms";
import { getCustomers } from "@/database/customers";

export const metadata: Metadata = {
  title: "ادارة الزبائن",
};

const page = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) => {
  const query = (await searchParams).query;
  const customers = await getCustomers(query);

  return (
    <main className="p-2">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">الرئيسية</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>الزبائن</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="md:container">
        <div className="bg-background px-4 py-6 min-w-full my-4 rounded-xl">
          <h2 className="text-xl font-bold">الزبائن</h2>
          <Suspense fallback={"جاري التحميل"}>
            <CustomersTable
              searchPlaceholder="البحث بالاسم"
              data={customers}
              columns={customersColumn}
              searchQuery="query"
            >
              <AddSupplier />
            </CustomersTable>
          </Suspense>
        </div>
      </div>
    </main>
  );
};

export default page;
