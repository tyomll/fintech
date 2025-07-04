import { Button } from "@/shared/ui/@core/button";

interface Props {
  onCancel: () => void;
  disabled: boolean;
}

const NewInvestmentActions: React.FC<Props> = ({ onCancel, disabled }) => (
  <div className="flex gap-4 pt-4">
    <Button
      type="button"
      variant="outline"
      onClick={onCancel}
      className="flex-1 border-slate-700/50 text-slate-300 hover:bg-slate-800/50 hover:border-slate-600/50 rounded-xl py-3"
      aria-label="Cancel"
    >
      Cancel
    </Button>
    <Button
      type="submit"
      disabled={disabled}
      className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl py-3 font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
      aria-label="Create Investment Plan"
    >
      Create Investment Plan
    </Button>
  </div>
);

export default NewInvestmentActions;
