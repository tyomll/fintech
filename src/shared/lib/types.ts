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
