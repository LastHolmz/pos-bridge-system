import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";

const page = () => {
  return (
    <main className="grid grid-cols-2 h-screen">
      <section className=" h-full flex justify-center items-center">
        <div className=" w-96 ">
          <Image
            src={"/logo.png"}
            alt="logo"
            width={1000}
            height={1000}
            className=" w-full h-full object-cover"
          />
        </div>
      </section>
      <section className=" h-full flex justify-center items-center">
        <div className="grid text-center">
          <div className=" w-24 mx-auto">
            <Image
              src={"/logo-pure.png"}
              alt="logo"
              width={1000}
              height={1000}
              className=" w-full h-full object-cover"
            />
          </div>
          <h1 className=" font-bold text-2xl">تسجيل الدخول إلى حسابك</h1>
          <p className=" text-foreground/80 mt-1">
            مرحباً بعودتك! يرجى إدخال بياناتك
          </p>
          <br />
          <form className="text-start grid gap-3">
            <div className="w-full">
              <Label htmlFor="username">اسم المستخدم</Label>
              <Input
                type="text"
                name="username"
                id="username"
                placeholder="ادخل اسم المستخدم"
              />
            </div>
            <div className="w-full">
              <Label htmlFor="password">كلمة المرور</Label>
              <Input
                type="password"
                name="password"
                id="password"
                placeholder="ادخل كلمة المرور"
              />
            </div>
            <br />
            <Button>تسجيل الدخول</Button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default page;
