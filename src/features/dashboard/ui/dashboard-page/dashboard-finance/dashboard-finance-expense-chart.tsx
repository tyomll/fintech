"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/shared/@core/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const expenseData = [
  { name: "Housing", value: 1200, color: "#3b82f6" },
  { name: "Food", value: 800, color: "#8b5cf6" },
  { name: "Transportation", value: 400, color: "#06b6d4" },
  { name: "Entertainment", value: 300, color: "#10b981" },
  { name: "Utilities", value: 250, color: "#f59e0b" },
  { name: "Other", value: 200, color: "#ef4444" },
];

const DashboardFinanceExpenseChart = () => {
  return (
    <Card className="bg-slate-900/50 backdrop-blur-sm border border-slate-800/50">
      <CardHeader>
        <CardTitle className="text-white">Expense Breakdown</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={expenseData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={5}
                dataKey="value"
              >
                {expenseData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          {expenseData.map((item, index) => (
            <div key={index} className="flex items-center space-x-2">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: item.color }}
              ></div>
              <span className="text-slate-300 text-sm">{item.name}</span>
              <span className="text-slate-400 text-sm">${item.value}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default DashboardFinanceExpenseChart;
