import { CustomLink } from "@/components/custom-link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ادارة التقارير الكلي",
};

const page = async () => {
  return (
    <main className="p-2">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">الرئيسية</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>التقارير</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="md:container">
        <div className="grid md:grid-cols-2 md:gap-10">
          <div className="bg-background px-4 py-4 min-w-full my-4 rounded-xl">
            <h1 className="font-semibold text-xl">نظرة عامة</h1>
            <div className="grid  text-center grid-cols-3 mt-6 gap-10">
              <div className="grid gap-1">
                <h4 className="font-semibold text-lg">24012 $</h4>
                <p>الصافي</p>
              </div>
              <div className="grid gap-1">
                <h4 className="font-semibold text-lg">18300 $</h4>
                <p className=" text-sm text-yellow-600">الإرباح</p>
              </div>
              <div className="grid gap-1">
                <h4 className="font-semibold text-lg">17432 $</h4>
                <p className=" text-sm text-purple-500">المبيعات</p>
              </div>
            </div>
            <Separator className="my-4" />
            <div className="grid  text-center grid-cols-2 md:grid-cols-4 mt-6 gap-10">
              <div className="grid gap-1">
                <h4 className="font-semibold text-lg">117432 $</h4>
                <p>قيمة الشراء الصافية</p>
              </div>
              <div className="grid gap-1">
                <h4 className="font-semibold text-lg">80432 $</h4>
                <p className=" text-sm">قيمة المبيعات الصافية</p>
              </div>
              <div className="grid gap-1">
                <h4 className="font-semibold text-lg">30432 $</h4>
                <p className=" text-sm">الربح الشهري</p>
              </div>
              <div className="grid gap-1">
                <h4 className="font-semibold text-lg">101432 $</h4>
                <p className=" text-sm">الربح السنوي</p>
              </div>
            </div>
          </div>
          <div className="bg-background px-4 py-6 min-w-full my-4 rounded-xl">
            <div className="flex justify-between items-center">
              <h3>الأصناف الأكثر مبيعا</h3>
              <CustomLink variant={"link"} href={"/"}>
                الكل
              </CustomLink>
            </div>
            <br />
            <div className="grid text-center grid-cols-3">
              <span>الأصناف</span>
              <span>معدل دوران</span>
              <span>زيادة بمقدار</span>
            </div>
            <Separator className="my-2" />
            <div className="text-center grid grid-cols-3">
              <span>الخضروات</span>
              <span>14 223 $</span>
              <span className="text-green-500">1.2%</span>
            </div>
            <Separator className="my-2" />
            <div className="text-center grid grid-cols-3">
              <span>الفواكه</span>
              <span>32 321 $</span>
              <span className="text-green-500">3.2%</span>
            </div>
            <Separator className="my-2" />
            <div className="text-center grid grid-cols-3">
              <span>الشكاليط</span>
              <span>1 001 $</span>
              <span className="text-green-500">4.1%</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
