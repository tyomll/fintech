import DashboardStockDetailedPage from "@/features/dashboard/ui/dashboard-page/dashboard-stock-detailed/dashboard-stock-detailed-page";

interface Props {
  params: Promise<{ symbol: string }>;
}
const page = async ({ params }: Props) => {
  const { symbol } = await params;
  return <DashboardStockDetailedPage symbol={symbol} />;
};

export default page;
