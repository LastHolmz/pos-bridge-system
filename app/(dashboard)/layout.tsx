import React, { ReactNode } from "react";
import NavigationRail from "@/components/naviagation-rail";
import Header from "@/components/header";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <main
      className="flex relative flex-start min-h-screen bg-background"
      dir="rtl"
    >
      <section>
        <NavigationRail />
      </section>

      <section className="max-w-full flex-1">
        <Header />
        <div className="h-full w-full bg-secondary">{children}</div>
      </section>
    </main>
  );
};

export default layout;
