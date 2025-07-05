import Modal from "@/shared/ui/modals/modal";
import { useState } from "react";
import {
  AddStockCategories,
  AddStockList,
  AddStockSearchBar,
  AddStockSelectedList,
  AddStockActions,
} from "@/features/dashboard/ui/dashboard-page/dashboard-stocks/modals";
import { Category, CategoryName, Stock } from "@/features/dashboard/lib/types";
import { StockTrend } from "@/features/landing/lib/types";

const categories: Category[] = [
  { name: CategoryName.Technology, color: "bg-blue-500/20 text-blue-400" },
  { name: CategoryName.Finance, color: "bg-green-500/20 text-green-400" },
  { name: CategoryName.Healthcare, color: "bg-pink-500/20 text-pink-400" },
  { name: CategoryName.Energy, color: "bg-yellow-500/20 text-yellow-400" },
];

const popularStocks: Stock[] = [
  {
    symbol: "AAPL",
    name: "Apple Inc.",
    price: "$172.34",
    change: "+2.34%",
    trend: StockTrend.Up,
  },
  {
    symbol: "GOOGL",
    name: "Alphabet Inc.",
    price: "$2,835.12",
    change: "-1.12%",
    trend: StockTrend.Down,
  },
  {
    symbol: "AMZN",
    name: "Amazon.com Inc.",
    price: "$3,334.69",
    change: "+0.89%",
    trend: StockTrend.Up,
  },
  {
    symbol: "TSLA",
    name: "Tesla Inc.",
    price: "$709.67",
    change: "-0.45%",
    trend: StockTrend.Down,
  },
];

const AddStockModal = ({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStocks, setSelectedStocks] = useState<string[]>([]);

  const handleAddStock = (symbol: string) => {
    if (!selectedStocks.includes(symbol)) {
      setSelectedStocks([...selectedStocks, symbol]);
    }
  };

  const handleRemoveStock = (symbol: string) => {
    setSelectedStocks(selectedStocks.filter((s) => s !== symbol));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSelectedStocks([]);
    setSearchQuery("");
    onOpenChange(false);
  };

  const filteredStocks = popularStocks.filter(
    (stock) =>
      stock.symbol.toLowerCase().includes(searchQuery.toLowerCase()) ||
      stock.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Modal open={open} onOpenChange={onOpenChange} title="Add Stocks">
      <div className="space-y-6 mt-6">
        <AddStockSearchBar
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />
        <AddStockCategories categories={categories} />
        <AddStockSelectedList
          selectedStocks={selectedStocks}
          onRemove={handleRemoveStock}
        />
        <AddStockList
          stocks={filteredStocks}
          selectedStocks={selectedStocks}
          onAdd={handleAddStock}
          onRemove={handleRemoveStock}
        />
        <AddStockActions
          onCancel={() => onOpenChange(false)}
          onSubmit={handleSubmit}
          selectedStocks={selectedStocks}
        />
      </div>
    </Modal>
  );
};

export default AddStockModal;
