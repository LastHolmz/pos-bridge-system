"use client";
import { toast } from "@/hooks/use-toast";
import { ReactNode, useActionState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import Loading from "./loading";

type Action = (
  prevState: { message: string },
  formData: FormData
) => Promise<{ message: string }>;

interface Props {
  action: Action;
  className?: string;
  children: ReactNode;
  success?: string;
  replaceLink?: string;
  dontReplace?: boolean;
}

/**
 * Accessible form component with custom dialog, actions, and success handling.
 *
 * @param {Action} action - The async function to be called on form submission.
 * @param {string} [className] - Optional class names for the form.
 * @param {ReactNode} children - The form elements.
 * @param {string} [success] - Message to display on successful action.
 * @param {string} [replaceLink] - URL to navigate to after success. Defaults to "/".
 * @param {boolean} [dontReplace=false] - Whether to prevent navigation on success.
 */
const Form = ({
  action,
  className,
  children,
  success,
  replaceLink = "/",

  dontReplace = false,
}: Props) => {
  const router = useRouter();
  const [msg, dispatch, isPending] = useActionState(action, { message: "" });

  useEffect(() => {
    if (!msg.message) return;

    toast({
      title: msg.message,
      className: `${
        success === msg.message ? "text-green-500" : "text-red-500"
      }`,
    });

    if (msg.message === (success || "تمت العملية بنجاح")) {
      if (!dontReplace) router.replace(replaceLink);
    }
    console.log(msg);
  }, [msg, success, replaceLink, dontReplace, router]);

  return (
    <form dir="rtl" action={dispatch} className={cn(className)}>
      {isPending ? <Loading open={undefined} /> : children}
    </form>
  );
};

export default Form;
