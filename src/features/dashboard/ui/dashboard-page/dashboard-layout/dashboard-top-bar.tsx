"use client";
import { Button } from "@/shared/@core/ui/button";
import { Search, Bell, Menu } from "lucide-react";

interface Props {
  onOpenSidebar: () => void;
}

const DashboardTopBar = ({ onOpenSidebar }: Props) => {
  return (
    <header className="bg-slate-900/30 backdrop-blur-xl border-b border-slate-800/50 px-4 lg:px-8 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden text-slate-400 hover:text-white"
            onClick={onOpenSidebar}
          >
            <Menu className="h-5 w-5" />
          </Button>
          <div className="hidden lg:block">
            <h1 className="text-2xl font-bold text-white">Dashboard</h1>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search stocks..."
              className="pl-10 pr-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 w-64"
            />
          </div>

          <Button
            variant="ghost"
            size="sm"
            className="text-slate-400 hover:text-white relative"
          >
            <Bell className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full"></span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default DashboardTopBar;
