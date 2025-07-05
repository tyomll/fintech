import { DetaledStock } from "@/shared/lib/types";
import { create } from "zustand";

interface DashboardStore {
  selectedStock: DetaledStock | null;
  setSelectedStock: (stock: DetaledStock | null) => void;
  stockChartRange: string;
  setStockChartRange: (range: string) => void;
  stockChartInterval: string;
  setStockChartInterval: (interval: string) => void;
}

export const useDashboardStore = create<DashboardStore>((set) => ({
  selectedStock: null,
  setSelectedStock: (stock) => set({ selectedStock: stock }),
  stockChartInterval: "1m",
  setStockChartInterval: (interval) => set({ stockChartInterval: interval }),
  stockChartRange: "1d",
  setStockChartRange: (range) => set({ stockChartRange: range }),
}));
