import { Button } from "@/shared/ui/@core/button";

interface Props {
  onCancel: () => void;
  onSubmit: (e: React.FormEvent) => void;
  selectedStocks: string[];
}

const AddStockActions: React.FC<Props> = ({
  onCancel,
  onSubmit,
  selectedStocks,
}) => (
  <form
    className="flex gap-4 pt-4 border-t border-slate-800/50"
    onSubmit={onSubmit}
  >
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
      disabled={selectedStocks.length === 0}
      className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl py-3 font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
      aria-label="Add selected stocks to watchlist"
    >
      Add {selectedStocks.length} Stock{selectedStocks.length !== 1 ? "s" : ""}{" "}
      to Watchlist
    </Button>
  </form>
);

export default AddStockActions;
