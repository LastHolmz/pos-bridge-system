"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { arSA } from "date-fns/locale";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { Separator } from "@/components/ui/separator";
import Form from "@/components/reusable-form";
import { addProductAction } from "../actions";
import SubmitButton from "@/components/custom-submit-btn";

export const AddProduct = () => {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>اضافة منتج</Button>
      </DialogTrigger>
      <DialogContent dir="rtl" className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>اضافة منتج جديد</DialogTitle>
        </DialogHeader>
        <Form
          action={addProductAction}
          dontReplace
          replaceLink="/inventory"
          success="تم انشاء المنتج بنجاح"
        >
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                اسم المنتج
              </Label>
              <Input
                required
                min={2}
                id="name"
                className="col-span-3"
                placeholder="ادخل اسم المنتج"
                name="name"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="barcode" className="text-right">
                باركود المنتج
              </Label>
              <Input
                required
                min={2}
                placeholder="ادخل باركود المنتج"
                name="barcode"
                id="barcode"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="buyingPrice" className="text-right">
                سعر الشراء
              </Label>
              <Input
                required
                placeholder="ادخل سعر الشراء"
                name="buyingPrice"
                id="buyingPrice"
                className="col-span-3"
                type="number"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="sellingPrice" className="text-right">
                سعر البيع
              </Label>
              <Input
                required
                placeholder="ادخل سعر البيع"
                name="sellingPrice"
                id="sellingPrice"
                className="col-span-3"
                type="number"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="qty" className="text-right">
                الكمية
              </Label>
              <Input
                required
                placeholder="ادخل الكمية"
                name="qty"
                id="qty"
                className="col-span-3"
                type="number"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="unit" className="text-right">
                الصناديق
              </Label>
              <Input
                required
                placeholder="ادخل الصناديق"
                name="unit"
                id="unit"
                className="col-span-3"
                type="number"
              />
            </div>
            <Separator />
            <div>
              <Label htmlFor="preferedDate">تاريخ انتهاء الصلاحية</Label>
              <Popover modal={true}>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-full pl-3 text-right font-normal",
                      !date && "text-muted-foreground"
                    )}
                  >
                    {date ? (
                      format(date, "PPP", { locale: arSA })
                    ) : (
                      <span>اختر تاريخ انتهاء الصلاحية</span>
                    )}
                    <CalendarIcon className="mr-auto h-4 w-4 opacity-50" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent
                  aria-expanded={"true"}
                  // onClick={(e) => e.preventDefault()}
                  className="w-auto"
                  align="start"
                >
                  <Calendar
                    id="preferedDate"
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    disabled={
                      (date) => date < new Date(Date.now())
                      // date > new Date(Date.now())
                    }
                    initialFocus
                    dir="rtl"
                  />
                </PopoverContent>
              </Popover>
            </div>
            <Input type="hidden" name="expiryDate" value={date?.toString()} />
          </div>
          <DialogFooter className="gap-2">
            <Button
              variant={"outline"}
              type="button"
              onClick={() => setOpen(!open)}
            >
              تجاهل
            </Button>
            <SubmitButton className="px-6" type={"submit"}>
              حفظ
            </SubmitButton>
          </DialogFooter>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
