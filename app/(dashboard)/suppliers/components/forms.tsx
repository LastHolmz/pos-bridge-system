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
import Form from "@/components/reusable-form";
import { addSupplierAction } from "../actions";
import SubmitButton from "@/components/custom-submit-btn";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const AddSupplier = () => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>اضافة مورد</Button>
      </DialogTrigger>
      <DialogContent dir="rtl" className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>اضافة مورد جديد</DialogTitle>
        </DialogHeader>
        <Form
          action={addSupplierAction}
          dontReplace
          replaceLink="/inventory"
          success="تم انشاء المورد بنجاح"
        >
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-2 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                اسم المورد
              </Label>
              <Input
                required
                min={2}
                id="name"
                className="col-span-3"
                placeholder="ادخل اسم المورد"
                name="name"
              />
            </div>
            <div className="grid grid-cols-2 items-center gap-4">
              <Label htmlFor="product" className="text-right">
                المنتج
              </Label>
              <Input
                required
                min={2}
                placeholder="ادخل المنتج"
                name="product"
                id="product"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-2 items-center gap-4">
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
            <div className="grid grid-cols-2 items-center gap-4">
              <Label htmlFor="contact" className="text-right">
                رقم الهاتف
              </Label>
              <Input
                dir="rtl"
                required
                placeholder="ادخل رقم الهاتف"
                name="contact"
                id="contact"
                className="col-span-3"
                type="tel"
              />
            </div>
            <div className="grid grid-cols-2 items-center gap-4">
              <Label htmlFor="takingBack">امكانية الإرجاع</Label>
              <Select defaultValue="false" name="takingBack">
                <SelectTrigger id="takingBack" className="w-full min-w-full">
                  <SelectValue placeholder="امكانية الإرجاع" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="true">نعم</SelectItem>
                  <SelectItem value="false">لا</SelectItem>
                </SelectContent>
              </Select>
            </div>
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
