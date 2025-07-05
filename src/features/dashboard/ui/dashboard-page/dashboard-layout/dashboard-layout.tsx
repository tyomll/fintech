"use client";

import {
  DashboardSidebar,
  DashboardSidebarOverlay,
  DashboardTopBar,
} from "@/features/dashboard/ui/dashboard-page";
import { useState } from "react";

interface Props {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: Props) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleOpenSidebar = () => setSidebarOpen(true);
  const handleCloseSidebar = () => setSidebarOpen(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <DashboardSidebarOverlay
        isOpen={sidebarOpen}
        onClose={handleCloseSidebar}
      />

      <DashboardSidebar
        sidebarOpen={sidebarOpen}
        onCloseSidebar={handleCloseSidebar}
      />

      <div className="lg:pl-64">
        <DashboardTopBar onOpenSidebar={handleOpenSidebar} />

        <main className="p-4 lg:p-8">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
