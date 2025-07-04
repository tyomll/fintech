"use client";

import { Activity } from "@/features/dashboard/lib/types";

interface Props {
  action: Activity;
  stock: string;
  shares: number;
  price: string;
  time: string;
}

const DashboardOverviewActivityItem = ({
  action,
  stock,
  shares,
  price,
  time,
}: Props) => {
  return (
    <div className="flex items-center justify-between p-4 bg-slate-800/30 rounded-xl">
      <div className="flex items-center space-x-4">
        <div
          className={`w-2 h-2 rounded-full ${
            action === "Bought" ? "bg-green-400" : "bg-red-400"
          }`}
        ></div>
        <div>
          <p className="text-white font-medium">
            {action} {shares} shares of {stock}
          </p>
          <p className="text-slate-400 text-sm">{time}</p>
        </div>
      </div>
      <div className="text-right">
        <p className="text-white font-medium">{price}</p>
        <p className="text-slate-400 text-sm">per share</p>
      </div>
    </div>
  );
};

export default DashboardOverviewActivityItem;
