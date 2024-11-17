import { getProductById, getProducts } from "@/database/product";
import { notFound } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { MdEdit } from "react-icons/md";
import NavigationTabs, { NavigationTab } from "@/components/navigation";
import { ReactNode } from "react";

export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((product) => ({
    id: product.id,
  }));
}

export async function generateMetadata(props: {
  params: Promise<{ id: Promise<string> }>;
}) {
  const params = await props.params;
  const id = await params.id;

  const product = await getProductById(id);
  if (!product) {
    return {
      title: `هذا المنتج لم يعد متاحا`,
    };
  }

  return {
    title: `ادارة ${product.name}`,
  };
}

const page = async (props: {
  params: Promise<{ id: Promise<string> }>;
  children: ReactNode;
}) => {
  const params = await props.params;

  const { children } = props;

  const id = await params.id;
  const product = await getProductById(id);
  if (!product) {
    return notFound();
  }
  return (
    <main className="md:container p-2 bg-secondary">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">الرئيسية</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/inventory">المخزون</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{product.name}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="bg-background px-4 py-4 min-w-full my-4 rounded-xl">
        <div className="flex justify-between items-center w-full">
          <h1 className="font-semibold text-xl">{product.name}</h1>
          <div className="flex justify-center items-center gap-2">
            <Button variant={"outline"}>تنزيل</Button>
            <Button variant={"outline"}>
              تعديل
              <MdEdit />
            </Button>
          </div>
        </div>
        <br />
        <NavigationTabs className="my-1">
          <NavigationTab home href={`/inventory/${product.id}`} content="عام" />
          <NavigationTab
            href={`/inventory/${product.id}/purchases`}
            content="المشتريات"
          />
          <NavigationTab
            href={`/inventory/${product.id}/adjustments`}
            content="التعديلات"
          />
          <NavigationTab
            href={`/inventory/${product.id}/history`}
            content="السجل"
          />
        </NavigationTabs>
        {children}
      </div>
    </main>
  );
};

export default page;
