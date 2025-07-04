import { StockTrend } from "@/features/landing/lib/types";

export enum Activity {
  Bought = "Bought",
  Sold = "Sold",
}

export enum TransactionType {
  Income = "Income",
  Expense = "Expense",
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

export enum InvestmentType {
  Stocks = "stocks",
  Bonds = "bonds",
  ETF = "etf",
  Crypto = "crypto",
}

export enum RiskLevel {
  Low = "low",
  Medium = "medium",
  High = "high",
}

export interface NewInvestmentFormData {
  name: string;
  type: InvestmentType | "";
  amount: string;
  targetAmount: string;
  timeframe: string;
  riskLevel: RiskLevel | "";
  description: string;
}
