"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/shared/ui/@core/card";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";

const monthlyData = [
  { month: "Jan", income: 5000, expenses: 3200 },
  { month: "Feb", income: 5200, expenses: 3100 },
  { month: "Mar", income: 4800, expenses: 3400 },
  { month: "Apr", income: 5500, expenses: 3300 },
  { month: "May", income: 5300, expenses: 3150 },
  { month: "Jun", income: 5600, expenses: 3250 },
];

const DashboardFinanceIncomeChart = () => {
  return (
    <Card className="bg-slate-900/50 backdrop-blur-sm border border-slate-800/50">
      <CardHeader>
        <CardTitle className="text-white">Income vs Expenses</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={monthlyData}>
              <XAxis
                dataKey="month"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#94a3b8", fontSize: 12 }}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#94a3b8", fontSize: 12 }}
              />
              <Bar dataKey="income" fill="#10b981" radius={[4, 4, 0, 0]} />
              <Bar dataKey="expenses" fill="#ef4444" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default DashboardFinanceIncomeChart;
