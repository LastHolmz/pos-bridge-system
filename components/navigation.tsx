"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Separator } from "./ui/separator";

interface NavigationTabProps {
  href: string;
  content: string;
  className?: string;
  home?: boolean;
}

export default function NavigationTabs({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <nav
      className={cn(
        "flex flex-row justify-start flex-wrap gap-1 px-4 py-2 bg-background",
        className
      )}
      dir="rtl"
    >
      {children}
      <Separator className="" />
    </nav>
  );
}

export function NavigationTab({
  href,
  content,
  className,
  home = false,
}: NavigationTabProps) {
  const pathname = usePathname();
  return (
    <div className="relative w-fit my-1">
      <Link
        className={cn(
          className,
          "flex-center text-sm  h-12 px-4 relative transition-all py-2 rounded-sm",
          home
            ? pathname === `${href}`
              ? "text-primary"
              : "text-foreground hover:bg-primary/20"
            : pathname.startsWith(href)
            ? "text-primary"
            : "text-foreground hover:bg-primary/20"
        )}
        href={href}
      >
        {content}
      </Link>
      <div
        className={cn(
          "h-0.5 w-full absolute transition-all duration-500 -bottom-2 rounded-t-lg",
          home
            ? pathname === `${href}` && "bg-primary"
            : pathname.startsWith(href) && "bg-primary"
        )}
      />
    </div>
  );
}
