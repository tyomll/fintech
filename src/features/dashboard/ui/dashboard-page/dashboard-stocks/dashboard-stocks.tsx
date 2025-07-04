"use client";
import { useState } from "react";
import DashboardStocksHeader from "./dashboard-stocks-header";
import DashboardStocksSearch from "./dashboard-stocks-search";
import DashboardStocksWatchlist from "./dashboard-stocks-watchlist";
import DashboardStocksTrending from "./dashboard-stocks-trending";

const DashboardStocksPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="space-y-8">
      <DashboardStocksHeader />
      <DashboardStocksSearch
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />
      <DashboardStocksWatchlist />
      <DashboardStocksTrending />
    </div>
  );
};

export default DashboardStocksPage;
