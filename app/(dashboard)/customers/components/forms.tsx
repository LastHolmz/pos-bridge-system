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
import { addCustomerAction } from "../actions";
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
        <Button>اضافة زبون</Button>
      </DialogTrigger>
      <DialogContent dir="rtl" className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>اضافة زبون جديد</DialogTitle>
        </DialogHeader>
        <Form
          action={addCustomerAction}
          dontReplace
          replaceLink="/customers"
          success="تم انشاء الزبون بنجاح"
        >
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-2 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                اسم الزبون
              </Label>
              <Input
                required
                min={2}
                id="name"
                className="col-span-3"
                placeholder="ادخل اسم الزبون"
                name="name"
              />
            </div>
            <div className="grid grid-cols-2 items-center gap-4">
              <Label htmlFor="phone" className="text-right">
                رقم الهاتف
              </Label>
              <Input
                dir="rtl"
                required
                placeholder="ادخل رقم الهاتف"
                name="phone"
                id="phone"
                className="col-span-3"
                type="tel"
              />
            </div>
            <div className="grid grid-cols-2 items-center gap-4">
              <Label htmlFor="debt" className="text-right">
                قيمة المديونية
              </Label>
              <Input
                required
                min={2}
                placeholder="ادخل قيمة المديونية"
                name="debt"
                id="debt"
                type="number"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-2 items-center gap-4">
              <Label htmlFor="currentValue" className="text-right">
                قيمة الحساب
              </Label>
              <Input
                required
                placeholder="ادخل قيمة الحساب"
                name="currentValue"
                id="currentValue"
                className="col-span-3"
                type="number"
              />
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
