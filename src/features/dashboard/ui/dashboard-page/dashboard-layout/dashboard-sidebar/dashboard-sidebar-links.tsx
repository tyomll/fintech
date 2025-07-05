import { SIDEBAR_ITEMS } from "@/features/dashboard/lib/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  onCloseSidebar: () => void;
}

const DashboardSidebarLinks = ({ onCloseSidebar }: Props) => {
  const pathname = usePathname();

  return (
    <nav className="flex-1 p-4 space-y-2">
      {SIDEBAR_ITEMS.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 group ${
              isActive
                ? "bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-white border border-blue-500/30"
                : "text-slate-400 hover:text-white hover:bg-slate-800/50"
            }`}
            onClick={onCloseSidebar}
          >
            <item.icon
              className={`h-5 w-5 ${
                isActive ? "text-blue-400" : "group-hover:text-blue-400"
              }`}
            />
            <span className="font-medium">{item.title}</span>
          </Link>
        );
      })}
    </nav>
  );
};

export default DashboardSidebarLinks;
