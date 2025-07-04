"use client";
import { Button } from "@/shared/@core/ui/button";
import { ArrowUpRight } from "lucide-react";

interface Props {
  userName: string;
}

const DashboardOverviewWelcome = ({ userName }: Props) => {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">
          Welcome back, {userName}!
        </h1>
        <p className="text-slate-400">
          Here's what's happening with your investments today.
        </p>
      </div>
      <Button className="mt-4 lg:mt-0 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
        <ArrowUpRight className="mr-2 h-4 w-4" />
        New Investment
      </Button>
    </div>
  );
};

export default DashboardOverviewWelcome;
