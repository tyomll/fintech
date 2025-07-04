export enum StockTrend {
  Up = "up",
  Down = "down",
}

export enum CategoryName {
  Technology = "Technology",
  Finance = "Finance",
  Healthcare = "Healthcare",
  Energy = "Energy",
  Consumer = "Consumer",
  Utilities = "Utilities",
  Industrials = "Industrials",
  Materials = "Materials",
}

export interface Category {
  name: CategoryName;
  color: string;
}

export interface Stock {
  symbol: string;
  name: string;
  price: string;
  change: string;
  trend: StockTrend;
}
