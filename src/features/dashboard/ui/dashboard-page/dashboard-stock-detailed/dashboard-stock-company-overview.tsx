import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/shared/ui/@core/card";
import { FC } from "react";
import { DetaledStock } from "@/shared/lib/types";

interface Props {
  stock: DetaledStock;
}

const DashboardStockCompanyOverview: FC<Props> = ({ stock }) => {
  return (
    <Card className="bg-slate-900/50 backdrop-blur-sm border border-slate-800/50">
      <CardHeader>
        <CardTitle className="text-white">Company Overview</CardTitle>
      </CardHeader>
      <CardContent>
        {stock.description && (
          <p className="text-slate-300 leading-relaxed mb-6">
            {stock.description}
          </p>
        )}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stock.eps && (
            <div>
              <p className="text-slate-400 text-sm mb-1">EPS</p>
              <p className="text-white font-semibold">{stock.eps}</p>
            </div>
          )}
          {stock.dividend && (
            <div>
              <p className="text-slate-400 text-sm mb-1">Dividend</p>
              <p className="text-white font-semibold">{stock.dividend}</p>
            </div>
          )}
          {stock.dividendYield && (
            <div>
              <p className="text-slate-400 text-sm mb-1">Dividend Yield</p>
              <p className="text-white font-semibold">{stock.dividendYield}</p>
            </div>
          )}
          <div>
            <p className="text-slate-400 text-sm mb-1">Volume</p>
            <p className="text-white font-semibold">{stock.volume}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DashboardStockCompanyOverview;
