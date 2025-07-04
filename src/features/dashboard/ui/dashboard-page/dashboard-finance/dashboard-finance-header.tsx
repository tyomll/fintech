import { Button } from "@/shared/@core/ui/button";
import { Plus } from "lucide-react";

interface Props {
  title?: string;
  description?: string;
}

const DashboardFinanceHeader = ({
  title = "Finance Management",
  description = "Track your income, expenses, and investment goals.",
}: Props) => {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">{title}</h1>
        <p className="text-slate-400">{description}</p>
      </div>
      <Button className="mt-4 lg:mt-0 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
        <Plus className="mr-2 h-4 w-4" />
        Add Transaction
      </Button>
    </div>
  );
};

export default DashboardFinanceHeader;
