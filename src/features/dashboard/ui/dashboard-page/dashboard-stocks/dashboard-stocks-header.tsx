interface Props {
  title?: string;
  description?: string;
}

const DashboardStocksHeader = ({
  title = "Stocks",
  description = "Search and track your favorite stocks with AI-powered insights.",
}: Props) => {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">{title}</h1>
        <p className="text-slate-400">{description}</p>
      </div>
    </div>
  );
};

export default DashboardStocksHeader;
