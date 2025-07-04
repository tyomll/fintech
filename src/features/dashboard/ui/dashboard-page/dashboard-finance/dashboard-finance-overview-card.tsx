import { Card, CardContent } from "@/shared/@core/ui/card";
import { TrendingUp, TrendingDown } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { StockTrend } from "@/features/landing/lib/types";

interface Props {
  title: string;
  value: string;
  change: string;
  trend: StockTrend;
  icon: LucideIcon;
  iconBgColor: string;
  iconColor: string;
  changeColor: string;
}

const DashboardFinanceOverviewCard = ({
  title,
  value,
  change,
  trend,
  icon: Icon,
  iconBgColor,
  iconColor,
  changeColor,
}: Props) => {
  return (
    <Card className="bg-slate-900/50 backdrop-blur-sm border border-slate-800/50">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-slate-400 text-sm font-medium">{title}</p>
            <p className="text-2xl font-bold text-white mt-1">{value}</p>
            <div className="flex items-center mt-2">
              {trend === StockTrend.Up ? (
                <TrendingUp className="h-4 w-4 text-green-400 mr-1" />
              ) : (
                <TrendingDown className="h-4 w-4 text-red-400 mr-1" />
              )}
              <span className={`text-sm font-medium ${changeColor}`}>
                {change}
              </span>
            </div>
          </div>
          <div className={`${iconBgColor} p-3 rounded-xl`}>
            <Icon className={`h-6 w-6 ${iconColor}`} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DashboardFinanceOverviewCard;
