export enum StockTrend {
  Up = "UP",
  Down = "DOWN",
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

export type PricingPlan = {
  name: string;
  price: string;
  period: string;
  description: string;
  icon: any;
  features: string[];
  popular: boolean;
  gradient: string;
  buttonStyle: string;
};

export type ContactUsForm = {
  name: string;
  email: string;
  subject: string;
  message: string;
};
