import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/shared/ui/@core/card";
import { Badge } from "@/shared/ui/@core/badge";
import { Progress } from "@/shared/ui/@core/progress";
import {
  Brain,
  Target,
  Activity,
  BarChart3,
  Info,
  TrendingUp,
  AlertTriangle,
} from "lucide-react";
import { FC } from "react";
import useStockPrediction from "@/features/dashboard/model/api/queries/use-stock-prediction";
import { StockDirection } from "@/shared/lib/types";

interface Props {
  symbol: string;
}

const DashboardStockAIPrediction: FC<Props> = ({ symbol }) => {
  const { data, isLoading } = useStockPrediction(symbol);
  const prediction = data?.prediction;

  const getConfidenceColor = (confidence?: number) => {
    if (!confidence) return "text-slate-400";
    if (confidence >= 80) return "text-green-400";
    if (confidence >= 60) return "text-yellow-400";
    return "text-red-400";
  };

  const getDirectionColor = (direction?: StockDirection) => {
    if (!direction) return "text-slate-400";
    return direction === StockDirection.Bullish
      ? "text-green-400"
      : "text-red-400";
  };

  const accuracyFactors = prediction
    ? [
        {
          name: "Technical Analysis",
          value: prediction.predictionAccuracy.technicalAnalysis,
        },
        {
          name: "Market Sentiment",
          value: prediction.predictionAccuracy.marketSentiment,
        },
        {
          name: "Economic Indicators",
          value: prediction.predictionAccuracy.economicIndicators,
        },
        {
          name: "Financial Health",
          value: prediction.predictionAccuracy.financialHealth,
        },
        {
          name: "Industry Trends",
          value: prediction.predictionAccuracy.industryTrends,
        },
      ]
    : [];

  if (isLoading) {
    return <DashboardStockAIPredictionSkeleton />;
  }

  if (!prediction) {
    return null;
  }

  return (
    <Card className="bg-slate-900/50 backdrop-blur-sm border border-slate-800/50">
      <CardHeader>
        <CardTitle className="text-white flex items-center">
          <Brain className="h-6 w-6 text-blue-400 mr-3" />
          AI Market Prediction
          <Badge
            variant="outline"
            className="ml-3 bg-blue-500/20 text-blue-400 border-blue-500/30"
          >
            Beta
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-slate-800/30 rounded-xl">
            <div className="flex items-center justify-center mb-3">
              <Target className="h-8 w-8 text-blue-400" />
            </div>
            <p className="text-slate-400 text-sm mb-1">Target Price</p>
            <p className="text-2xl font-bold text-white">
              ${prediction?.targetPrice}
            </p>
            <p className="text-slate-400 text-xs">{prediction?.timeHorizon}</p>
          </div>

          <div className="text-center p-6 bg-slate-800/30 rounded-xl">
            <div className="flex items-center justify-center mb-3">
              <Activity className="h-8 w-8 text-green-400" />
            </div>
            <p className="text-slate-400 text-sm mb-1">Direction</p>
            <p
              className={`text-2xl font-bold capitalize ${getDirectionColor(
                prediction?.direction
              )}`}
            >
              {prediction?.direction}
            </p>
            <p className="text-slate-400 text-xs">Market outlook</p>
          </div>

          <div className="text-center p-6 bg-slate-800/30 rounded-xl">
            <div className="flex items-center justify-center mb-3">
              <BarChart3 className="h-8 w-8 text-purple-400" />
            </div>
            <p className="text-slate-400 text-sm mb-1">AI Confidence</p>
            <p
              className={`text-2xl font-bold ${getConfidenceColor(
                prediction?.confidence
              )}`}
            >
              {prediction?.confidence}%
            </p>
            <p className="text-slate-400 text-xs">Prediction accuracy</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <h4 className="text-white font-semibold mb-4 flex items-center">
              <Info className="h-5 w-5 text-blue-400 mr-2" />
              Analysis Factors
            </h4>
            <div className="space-y-4">
              {accuracyFactors.map((factor, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-300 text-sm">
                      {factor.name}
                    </span>
                    <span className="text-sm font-medium text-slate-400">
                      {factor.value}%
                    </span>
                  </div>
                  <Progress value={factor.value} className="h-2" />
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 flex items-center">
              <TrendingUp className="h-5 w-5 text-green-400 mr-2" />
              Key Insights
            </h4>
            <div className="space-y-3">
              {prediction?.keyInsights.map((insight, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 p-3 bg-slate-800/30 rounded-lg"
                >
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-slate-300 text-sm">{insight}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4 flex items-center">
            <AlertTriangle className="h-5 w-5 text-yellow-400 mr-2" />
            Risk Factors
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {prediction?.riskFactors.map((risk, index) => (
              <div
                key={index}
                className="p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg"
              >
                <p className="text-slate-300 text-sm">{risk}</p>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const DashboardStockAIPredictionSkeleton = () => {
  return (
    <>
      <style jsx>{`
        @keyframes loading {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
      `}</style>
      <Card className="bg-slate-900/50 backdrop-blur-sm border border-slate-800/50">
        <CardHeader>
          <CardTitle className="text-white flex items-center">
            <div className="w-6 h-6 bg-blue-400 rounded-lg mr-3 animate-pulse"></div>
            <span>AI Market Prediction</span>
            <Badge
              variant="outline"
              className="ml-3 bg-blue-500/20 text-blue-400 border-blue-500/30"
            >
              Beta
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center justify-center py-16 space-y-6">
            <div className="relative">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center animate-pulse">
                <Brain className="h-10 w-10 text-blue-400 animate-bounce" />
              </div>
              <div className="absolute -top-2 -right-2 w-3 h-3 bg-blue-400 rounded-full animate-ping"></div>
              <div
                className="absolute -bottom-2 -left-2 w-2 h-2 bg-purple-400 rounded-full animate-ping"
                style={{ animationDelay: "0.5s" }}
              ></div>
              <div
                className="absolute top-1/2 -right-4 w-2 h-2 bg-green-400 rounded-full animate-ping"
                style={{ animationDelay: "1s" }}
              ></div>
            </div>

            <div className="text-center space-y-3">
              <h3 className="text-xl font-semibold text-white animate-pulse">
                Waiting for AI Prediction
              </h3>
              <p className="text-slate-400 max-w-md">
                Our AI is analyzing market data and generating insights for
                you...
              </p>
            </div>

            <div className="w-64 h-2 bg-slate-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 rounded-full"
                style={{
                  animation: "loading 2s ease-in-out infinite",
                  backgroundSize: "200% 100%",
                  backgroundPosition: "left",
                }}
              ></div>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-8">
              {[
                { label: "Analyzing", icon: "📊" },
                { label: "Processing", icon: "🧠" },
                { label: "Predicting", icon: "🎯" },
              ].map((item, index) => (
                <div key={index} className="text-center space-y-2">
                  <div
                    className="text-2xl animate-bounce"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    {item.icon}
                  </div>
                  <p className="text-sm text-slate-400 animate-pulse">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 bg-slate-800/30 rounded-lg border border-slate-700/50 max-w-lg">
              <p className="text-slate-400 text-xs text-center">
                <strong>AI Analysis in Progress:</strong> Our advanced
                algorithms are processing market data, technical indicators, and
                sentiment analysis to provide you with accurate predictions.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default DashboardStockAIPrediction;
