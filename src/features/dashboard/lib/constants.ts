import { BarChart3, LayoutDashboard, Settings, Wallet } from "lucide-react";

export const SIDEBAR_ITEMS = [
  {
    title: "Overview",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Stocks",
    href: "/dashboard/stocks",
    icon: BarChart3,
  },
  {
    title: "Finance",
    href: "/dashboard/finance",
    icon: Wallet,
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
];
