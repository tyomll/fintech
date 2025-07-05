import { StockTrend } from "@/features/landing/lib/types";

export type AnyObject = Record<string, unknown>;

export interface IQueryData<T> {
  data: T;
}

export interface User {
  _id: string;
  email: string;
  name: string;
  createdAt: string;
  updatedAt: string;
}

export interface Stock {
  symbol: string;
  name: string;
  price: string;
  change: string;
  changeValue: string;
  trend: StockTrend;
  data: { time: string; value: number }[];
}

export interface SearchStock {
  exchange: string;
  shortname: string;
  quoteType: string;
  symbol: string;
  index: string;
  score: number;
  typeDisp: string;
  longname: string;
  exchDisp: string;
  sector: string;
  sectorDisp: string;
  industry: string;
  industryDisp: string;
}

export interface DetaledStock {
  change: string;
  changeValue: string;
  currency: string;
  data: {
    time: string;
    value: number;
    open: number;
    high: number;
    low: number;
    close: number;
    volume: number;
  }[];
  dayHigh: string;
  dayLow: string;
  exchange: string;
  fiftyTwoWeekHigh: string;
  fiftyTwoWeekLow: string;
  lastUpdate: string;
  name: string;
  price: string;
  symbol: string;
  timezone: string;
  trend: StockTrend;
  volume: number;
}

export interface PredictionAccuracy {
  economicIndicators: number;
  financialHealth: number;
  industryTrends: number;
  marketSentiment: number;
  technicalAnalysis: number;
}

export enum StockDirection {
  Bullish = "bullish",
  Bearish = "bearish",
}

export interface AIStockPrediction {
  confidence: number;
  direction: StockDirection;
  keyInsights: string[];
  predictionAccuracy: PredictionAccuracy;
  riskFactors: string[];
  targetPrice: number;
  timeHorizon: string;
}
