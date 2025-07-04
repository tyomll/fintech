import { Stock, StockTrend } from "@/features/landing/lib/types";
import LandingPageTrendingStockCard from "@/features/landing/ui/landing-page/landing-page-trending-stocks/landing-page-trending-stock-card";
import LandingPageTrendingStocksHeader from "@/features/landing/ui/landing-page/landing-page-trending-stocks/landing-page-trending-stocks-header";

const stockData: Stock[] = [
  {
    symbol: "AAPL",
    name: "Apple Inc.",
    price: "$175.43",
    change: "+2.34%",
    changeValue: "+$4.01",
    trend: StockTrend.Up,
    confidence: 94,
    data: [
      { time: "9:00", value: 172 },
      { time: "10:00", value: 174 },
      { time: "11:00", value: 173 },
      { time: "12:00", value: 175 },
      { time: "1:00", value: 176 },
      { time: "2:00", value: 175.43 },
    ],
  },
  {
    symbol: "TSLA",
    name: "Tesla Inc.",
    price: "$248.92",
    change: "+5.67%",
    changeValue: "+$13.35",
    trend: StockTrend.Up,
    confidence: 87,
    data: [
      { time: "9:00", value: 235 },
      { time: "10:00", value: 240 },
      { time: "11:00", value: 245 },
      { time: "12:00", value: 247 },
      { time: "1:00", value: 249 },
      { time: "2:00", value: 248.92 },
    ],
  },
  {
    symbol: "BTC",
    name: "Bitcoin",
    price: "$43,256",
    change: "-1.23%",
    changeValue: "-$538",
    trend: StockTrend.Down,
    confidence: 76,
    data: [
      { time: "9:00", value: 44000 },
      { time: "10:00", value: 43800 },
      { time: "11:00", value: 43500 },
      { time: "12:00", value: 43300 },
      { time: "1:00", value: 43200 },
      { time: "2:00", value: 43256 },
    ],
  },
];

const LandingPageTrendingStocks = () => {
  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 to-slate-900/50"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <LandingPageTrendingStocksHeader />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stockData.map((stock, index) => (
            <LandingPageTrendingStockCard
              key={stock.symbol}
              stock={stock}
              animationDelay={`${index * 0.1}s`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LandingPageTrendingStocks;
