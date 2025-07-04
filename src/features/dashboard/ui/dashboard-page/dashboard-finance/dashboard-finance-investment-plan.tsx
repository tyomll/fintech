import { Progress } from "@/shared/ui/@core/progress";

interface Props {
  name: string;
  target: number;
  current: number;
  progress: number;
}

const DashboardFinanceInvestmentPlan = ({
  name,
  target,
  current,
  progress,
}: Props) => {
  return (
    <div className="p-4 bg-slate-800/30 rounded-xl">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-white font-medium">{name}</h3>
        <span className="text-slate-400 text-sm">
          ${current.toLocaleString()} / ${target.toLocaleString()}
        </span>
      </div>
      <Progress value={progress} className="h-2 mb-2" />
      <div className="flex items-center justify-between text-sm">
        <span className="text-slate-400">{progress}% complete</span>
        <span className="text-slate-300">
          ${(target - current).toLocaleString()} remaining
        </span>
      </div>
    </div>
  );
};

export default DashboardFinanceInvestmentPlan;
