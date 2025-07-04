export enum StockTrend {
  Up = "up",
  Down = "down",
}

export type DataPoint = { time: string; value: number };
export type Stock = {
  symbol: string;
  name: string;
  price: string;
  change: string;
  changeValue: string;
  trend: StockTrend;
  confidence: number;
  data: DataPoint[];
};
