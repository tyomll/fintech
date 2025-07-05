"use client";
import { Activity } from "@/features/dashboard/lib/types";
import { DashboardOverviewActivityItem } from "@/features/dashboard/ui/dashboard-page/dashboard-overview";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/shared/ui/@core/card";

const recentActivity = [
  {
    action: Activity.Bought,
    stock: "AAPL",
    shares: 10,
    price: "$175.43",
    time: "2 hours ago",
  },
  {
    action: Activity.Sold,
    stock: "TSLA",
    shares: 5,
    price: "$248.92",
    time: "1 day ago",
  },
  {
    action: Activity.Bought,
    stock: "MSFT",
    shares: 15,
    price: "$378.85",
    time: "2 days ago",
  },
];

const DashboardOverviewRecentActivity = () => {
  return (
    <Card className="bg-slate-900/50 backdrop-blur-sm border border-slate-800/50">
      <CardHeader>
        <CardTitle className="text-white">Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recentActivity.map((activity, index) => (
            <DashboardOverviewActivityItem
              key={index}
              action={activity.action}
              stock={activity.stock}
              shares={activity.shares}
              price={activity.price}
              time={activity.time}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default DashboardOverviewRecentActivity;
