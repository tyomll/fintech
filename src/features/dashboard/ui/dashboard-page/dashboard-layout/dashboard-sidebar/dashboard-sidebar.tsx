"use client";

import Link from "next/link";
import { Button } from "@/shared/ui/@core/button";
import { TrendingUp, X } from "lucide-react";
import DashboardSidebarUserProfile from "@/features/dashboard/ui/dashboard-page/dashboard-layout/dashboard-sidebar/dashboard-sidebar-user-profile";
import DashboardSidebarLinks from "@/features/dashboard/ui/dashboard-page/dashboard-layout/dashboard-sidebar/dashboard-sidebar-links";

interface Props {
  sidebarOpen: boolean;
  onCloseSidebar: () => void;
}

const DashboardSidebar = ({ sidebarOpen, onCloseSidebar }: Props) => {
  return (
    <div
      className={`fixed inset-y-0 left-0 z-50 w-64 bg-slate-900/50 backdrop-blur-xl border-r border-slate-800/50 transform transition-transform duration-300 ease-in-out lg:translate-x-0 ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-between p-6 border-b border-slate-800/50">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl blur opacity-75 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative bg-gradient-to-r from-blue-500 to-purple-600 p-2 rounded-xl">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              FinanceAI
            </span>
          </Link>
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden text-slate-400 hover:text-white"
            onClick={onCloseSidebar}
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        <DashboardSidebarLinks onCloseSidebar={onCloseSidebar} />
        <DashboardSidebarUserProfile />
      </div>
    </div>
  );
};

export default DashboardSidebar;
