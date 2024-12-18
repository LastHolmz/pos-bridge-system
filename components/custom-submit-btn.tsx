"use client";
import { Button } from "@/components/ui/button";
import { ReloadIcon } from "@radix-ui/react-icons";
import { useFormStatus } from "react-dom";
import Loading from "./loading";
import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes } from "react";

interface SubmitButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "sm" | "lg" | "icon" | null | undefined;
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"
    | null
    | undefined;
  type?: "submit" | "reset" | "button" | undefined;
}

export default function SubmitButton({
  children,
  className,
  size,
  variant,
  type,
  ...rest
}: SubmitButtonProps) {
  const { pending } = useFormStatus();
  return (
    <>
      {pending && <Loading open={undefined} setOpen={undefined} />}
      <Button
        className={cn("w-full md:w-auto", className, pending && "cursor-wait")}
        size={size}
        variant={variant}
        type={type}
        aria-disabled={pending}
        {...rest}
        aria-label="submit"
      >
        {pending ? <ReloadIcon className="spin-animation" /> : children}
      </Button>
    </>
  );
}
