import { Button } from "@/shared/ui/@core/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/shared/ui/@core/card";
import { FC } from "react";
import { EyeIcon, SearchIcon, StarIcon } from "lucide-react";
import { SearchStock } from "@/shared/lib/types";

interface Props {
  searchResults: SearchStock[];
  clearSearch: () => void;
}

const DashboardStocksSearchResults: FC<Props> = ({
  searchResults,
  clearSearch,
}) => {
  if (!searchResults?.length) {
    return (
      <Card className="bg-slate-900/50 backdrop-blur-sm border border-slate-800/50">
        <CardHeader>
          <CardTitle className="text-white flex items-center justify-between">
            <span>Search Results (0)</span>
            <Button
              variant="ghost"
              size="sm"
              onClick={clearSearch}
              className="text-slate-400 hover:text-white"
              aria-label="Clear search results"
            >
              Clear
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-12">
            <SearchIcon
              className="h-12 w-12 text-slate-600 mx-auto mb-4"
              aria-hidden="true"
            />
            <h3 className="text-lg font-medium text-slate-400 mb-2">
              No stocks found
            </h3>
            <p className="text-slate-500">
              Try searching for a different symbol, company name, or sector.
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-slate-900/50 backdrop-blur-sm border border-slate-800/50">
      <CardHeader>
        <CardTitle className="text-white flex items-center justify-between">
          <span>Search Results ({searchResults.length})</span>
          <Button
            variant="ghost"
            size="sm"
            onClick={clearSearch}
            className="text-slate-400 hover:text-white"
            aria-label="Clear search results"
          >
            Clear
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {searchResults.map((result) => (
            <div
              key={result.symbol}
              className="flex items-center justify-between p-4 bg-slate-800/30 rounded-xl hover:bg-slate-800/50 transition-colors group focus:outline-none focus:ring-2 focus:ring-yellow-400"
              tabIndex={0}
              aria-label={`Stock: ${result.symbol}, ${result.shortname}, ${result.typeDisp}, ${result.exchDisp}`}
              role="button"
            >
              <div className="w-20 h-20 px-2 rounded-xl bg-slate-700 flex items-center justify-center mr-4">
                <span className="text-white font-bold truncate text-sm select-all">
                  {result.symbol}
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-1">
                  <p className="text-white font-medium truncate">
                    {result.shortname || result.longname}
                  </p>
                  <span className="text-xs border border-slate-600 rounded px-2 py-0.5 text-slate-400 uppercase">
                    {result.typeDisp}
                  </span>
                </div>
                <div className="flex items-center gap-4 text-xs text-slate-400 flex-wrap">
                  <span>{result.exchDisp}</span>
                  <span>{result.sectorDisp}</span>
                  <span>{result.industryDisp}</span>
                </div>
              </div>
              <div className="flex items-center space-x-2 ml-4">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-slate-400 hover:text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity"
                  aria-label="Watch stock"
                >
                  <StarIcon className="h-4 w-4" aria-hidden="true" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-slate-700/50 text-slate-300 hover:bg-slate-800/50 opacity-0 group-hover:opacity-100 transition-opacity bg-transparent"
                  aria-label="View stock"
                >
                  <EyeIcon className="h-4 w-4 mr-1" aria-hidden="true" />
                  View
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default DashboardStocksSearchResults;
