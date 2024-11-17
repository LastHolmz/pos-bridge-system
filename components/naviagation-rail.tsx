"use client";
import { Sidebar, Menu, sidebarClasses } from "react-pro-sidebar";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { FaBars, FaRegChartBar } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { FaRegCircleUser } from "react-icons/fa6";
import { RiPresentationFill } from "react-icons/ri";
import {
  MdAttachEmail,
  MdLocalOffer,
  MdOutlineInventory2,
} from "react-icons/md";
import { SiStatista } from "react-icons/si";
import { IconType } from "react-icons/lib";
import { GoHome } from "react-icons/go";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { HiMiniBars2 } from "react-icons/hi2";
import ToggleTheme from "./theme-toggle";
import Link from "next/link";
import { BiLogOut } from "react-icons/bi";
import { IoMdSettings } from "react-icons/io";
import { LiaUsersCogSolid } from "react-icons/lia";

const NavigationRailItem = ({
  href,
  collapsed,
  Icon,
  name,
  onClick,
}: {
  href: string;
  collapsed: boolean;
  Icon: IconType;
  name: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement> | undefined;
}) => {
  const pathname = usePathname();
  return (
    <Link
      aria-label={name}
      onClick={onClick}
      className={cn(
        "flex justify-between hover:bg-accent px-4 py-2 w-[80%] mx-auto items-center  gap-1 sm:gap-2 ",
        "whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
        collapsed && "justify-center w-full rounded-none",
        pathname === href && "text-primary",
        pathname.startsWith(`${href}/`) && "text-primary"
      )}
      href={href}
    >
      {!collapsed && (
        <div>
          <span>{name}</span>
        </div>
      )}
      <div>
        <Icon size={24} />
      </div>
    </Link>
  );
};
const NavigationRailHomeItem = ({
  href,
  collapsed,
  Icon,
  name,
  onClick,
}: {
  href: string;
  collapsed: boolean;
  Icon: IconType;
  name: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement> | undefined;
}) => {
  const pathname = usePathname();
  return (
    <Link
      onClick={onClick}
      aria-label={name}
      className={cn(
        "flex justify-between hover:bg-accent px-4 py-2 w-[80%] mx-auto items-center  gap-1 sm:gap-2 ",
        "whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
        collapsed && "justify-center w-full rounded-none",

        href === pathname && "text-primary"
      )}
      href={href}
    >
      {!collapsed && (
        <div>
          {" "}
          <span>{name}</span>
        </div>
      )}
      <div>
        <Icon size={24} />
      </div>
    </Link>
  );
};

const NavigationRail = () => {
  const [collapsed, setCollapsed] = useState<boolean>(true);
  return (
    <Sidebar
      rootStyles={{
        [`.${sidebarClasses.container}`]: {
          backgroundColor: "hsl(var(--background))",
        },
      }}
      rtl
      className="fixed top-0 right-0 bg-background h-screen"
      collapsed={collapsed}
    >
      <div
        className={cn(
          "w-full flex items-center justify-between px-2 py-2",
          collapsed && "justify-center px-0 py-2"
        )}
      >
        <Button
          dir="rtl"
          size={"icon"}
          variant={"ghost"}
          onClick={() => setCollapsed(!collapsed)}
        >
          <FaBars />
        </Button>
      </div>
      <Menu>
        <li className="my-2">
          <NavigationRailHomeItem
            collapsed={collapsed}
            href="/"
            Icon={GoHome}
            name="لوحة التحكم"
          />
        </li>
        <li className="my-2">
          <NavigationRailItem
            collapsed={collapsed}
            href="/inventory"
            Icon={MdOutlineInventory2}
            name="المخزون"
          />
        </li>
        <li className="my-2">
          <NavigationRailItem
            collapsed={collapsed}
            Icon={FaRegChartBar}
            href="/reports"
            name="التقارير"
          />
        </li>
        <li className="my-2">
          <NavigationRailItem
            collapsed={collapsed}
            href="/suppliers"
            Icon={FaRegCircleUser}
            name="الموردين"
          />
        </li>

        <li className="my-2">
          <NavigationRailItem
            collapsed={collapsed}
            href="/customers"
            Icon={LiaUsersCogSolid}
            name="المستخدمين"
          />
        </li>
      </Menu>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-full">
        <button
          className={cn(
            "flex justify-between hover:bg-accent px-4 py-2 w-[80%] mx-auto items-center  gap-1 sm:gap-2 ",
            "whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
            collapsed && "justify-center w-full rounded-none"
          )}
        >
          {!collapsed && (
            <div>
              <span>{"تسجيل الخروج"}</span>
            </div>
          )}
          <div>
            <BiLogOut size={24} />
          </div>
        </button>

        <button
          className={cn(
            "flex justify-between hover:bg-accent px-4 py-2 w-[80%] mx-auto items-center  gap-1 sm:gap-2 ",
            "whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
            collapsed && "justify-center w-full rounded-none"
          )}
        >
          {!collapsed && (
            <div>
              <span>{"الإعدادات"}</span>
            </div>
          )}
          <div>
            <IoMdSettings size={24} />
          </div>
        </button>
      </div>
    </Sidebar>
  );
};

export const DashboardNavigation = () => {
  const [open, setOpen] = useState(false);

  return (
    <Sheet onOpenChange={setOpen} open={open}>
      <SheetTrigger className="block md:hidden">
        <Button asChild variant={"ghost"} size={"icon"}>
          <HiMiniBars2 size={24} />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <nav className="w-full mt-10">
          <ul className="flex items-center flex-col h-full text-center justify-center gap-5 w-full">
            <li className="w-full">
              <NavigationRailHomeItem
                onClick={() => setOpen(!open)}
                collapsed={false}
                href="/dashboard"
                Icon={SiStatista}
                name="لوحة التحكم"
              />
            </li>
            <li className="w-full">
              <NavigationRailItem
                onClick={() => setOpen(!open)}
                collapsed={false}
                href="/dashboard/offers"
                Icon={RiPresentationFill}
                name="العروض"
              />
            </li>
            <li className="w-full">
              <NavigationRailItem
                onClick={() => setOpen(!open)}
                collapsed={false}
                Icon={MdAttachEmail}
                href="/dashboard/contact"
                name="الرسائل"
              />
            </li>
          </ul>
        </nav>
        <div className="flex justify-center items-center flex-col gap-1">
          {/* <ToggleTheme />
          <div className="text-foreground/70 text-sm">
            الإصدار
            <span className="mx-2">1.0.0</span>
          </div> */}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export const DashboardHeader = () => {
  return (
    <header className="w-full phone-only:flex justify-between items-center hidden   bg-secondary px-4 py-2">
      <DashboardNavigation />
      <ToggleTheme />
    </header>
  );
};

export default NavigationRail;
