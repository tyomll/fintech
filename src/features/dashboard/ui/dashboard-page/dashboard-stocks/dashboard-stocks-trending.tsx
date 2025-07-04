import { DashboardStocksTrendingCard } from "@/features/dashboard/ui/dashboard-page/dashboard-stocks";
import { StockTrend } from "@/features/landing/lib/types";

const trendingStocks = [
  {
    symbol: "AAPL",
    name: "Apple Inc.",
    price: "$175.43",
    change: "+2.34%",
    changeValue: "+$4.01",
    trend: StockTrend.Up,
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
    symbol: "MSFT",
    name: "Microsoft Corp.",
    price: "$378.85",
    change: "+1.23%",
    changeValue: "+$4.61",
    trend: StockTrend.Up,
    data: [
      { time: "9:00", value: 375 },
      { time: "10:00", value: 377 },
      { time: "11:00", value: 376 },
      { time: "12:00", value: 378 },
      { time: "1:00", value: 379 },
      { time: "2:00", value: 378.85 },
    ],
  },
  {
    symbol: "GOOGL",
    name: "Alphabet Inc.",
    price: "$142.56",
    change: "-0.89%",
    changeValue: "-$1.28",
    trend: StockTrend.Down,
    data: [
      { time: "9:00", value: 144 },
      { time: "10:00", value: 143 },
      { time: "11:00", value: 142 },
      { time: "12:00", value: 143 },
      { time: "1:00", value: 142 },
      { time: "2:00", value: 142.56 },
    ],
  },
  {
    symbol: "AMZN",
    name: "Amazon.com Inc.",
    price: "$156.78",
    change: "+3.45%",
    changeValue: "+$5.23",
    trend: StockTrend.Up,
    data: [
      { time: "9:00", value: 152 },
      { time: "10:00", value: 154 },
      { time: "11:00", value: 155 },
      { time: "12:00", value: 157 },
      { time: "1:00", value: 158 },
      { time: "2:00", value: 156.78 },
    ],
  },
  {
    symbol: "NVDA",
    name: "NVIDIA Corp.",
    price: "$875.23",
    change: "+7.89%",
    changeValue: "+$64.12",
    trend: StockTrend.Up,
    data: [
      { time: "9:00", value: 810 },
      { time: "10:00", value: 830 },
      { time: "11:00", value: 850 },
      { time: "12:00", value: 870 },
      { time: "1:00", value: 880 },
      { time: "2:00", value: 875.23 },
    ],
  },
];

const DashboardStocksTrending = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-6">Trending Stocks</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {trendingStocks.map((stock) => (
          <DashboardStocksTrendingCard
            key={stock.symbol}
            symbol={stock.symbol}
            name={stock.name}
            price={stock.price}
            change={stock.change}
            changeValue={stock.changeValue}
            trend={stock.trend}
            data={stock.data}
          />
        ))}
      </div>
    </div>
  );
};

export default DashboardStocksTrending;
