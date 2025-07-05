import { ACCESS_TOKEN_COOKIE_NAME } from "@/shared/lib/app";
import CookieService from "@/shared/services/cookie.service";
import { Avatar, AvatarFallback, AvatarImage } from "@/shared/ui/@core/avatar";
import { Button } from "@/shared/ui/@core/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/shared/ui/@core/dropdown-menu";
import { CreditCard, LogOut, Settings, User } from "lucide-react";
import { useRouter } from "next/navigation";
import useMe from "@/features/dashboard/model/api/queries/use-me";

const DashboardSidebarUserProfile = () => {
  const router = useRouter();
  const { data } = useMe();
  const me = data?.user;

  const onLogout = () => {
    CookieService.remove(ACCESS_TOKEN_COOKIE_NAME);
    router.push("/");
  };

  return (
    <div className="p-4 border-t border-slate-800/50">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="w-full justify-start space-x-3 p-3 hover:bg-slate-800/50 rounded-xl"
          >
            <Avatar className="h-8 w-8">
              <AvatarImage
                src="/placeholder.svg?height=32&width=32"
                alt="User"
              />
              <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                {me?.name?.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 text-left">
              <p className="text-sm font-medium text-white">{me?.name}</p>
              <p className="text-xs text-slate-400">{me?.email}</p>
            </div>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className="w-56 bg-slate-900/95 backdrop-blur-xl border-slate-800/50"
          align="end"
        >
          <DropdownMenuLabel className="text-slate-300">
            My Account
          </DropdownMenuLabel>
          <DropdownMenuSeparator className="bg-slate-800/50" />
          <DropdownMenuItem className="text-slate-300 hover:bg-slate-800/50 hover:text-white">
            <User className="mr-2 h-4 w-4" />
            Profile
          </DropdownMenuItem>
          <DropdownMenuItem className="text-slate-300 hover:bg-slate-800/50 hover:text-white">
            <CreditCard className="mr-2 h-4 w-4" />
            Billing
          </DropdownMenuItem>
          <DropdownMenuItem className="text-slate-300 hover:bg-slate-800/50 hover:text-white">
            <Settings className="mr-2 h-4 w-4" />
            Settings
          </DropdownMenuItem>
          <DropdownMenuSeparator className="bg-slate-800/50" />
          <DropdownMenuItem
            className="text-red-400 hover:bg-red-500/10 hover:text-red-300"
            onClick={onLogout}
          >
            <LogOut className="mr-2 h-4 w-4" />
            Log out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default DashboardSidebarUserProfile;
