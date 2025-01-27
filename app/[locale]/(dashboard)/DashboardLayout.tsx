import { Header } from "@/components/header/Header";

import { ReactNode } from "react";


interface DashboardLayoutProps {
  children: ReactNode;
}

function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <>
      <Header />
      <main>
        {children}
      </main>
    </>
  );
}

export default DashboardLayout;
