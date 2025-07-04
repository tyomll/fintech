import { Button } from "@/shared/@core/ui/button";
import Link from "next/link";
import { AuthTab } from "@/features/auth/lib/types";

const LandingPageHeaderAuth = () => (
  <div className="hidden md:flex items-center space-x-4">
    <Link href={`/auth?tab=${AuthTab.SignIn}`}>
      <Button
        variant="ghost"
        className="text-slate-300 hover:text-white hover:bg-slate-800/50"
        tabIndex={0}
        aria-label="Sign In"
      >
        Sign In
      </Button>
    </Link>
    <Link href={`/auth?tab=${AuthTab.SignUp}`}>
      <Button
        className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
        tabIndex={0}
        aria-label="Sign Up"
      >
        Sign Up
      </Button>
    </Link>
  </div>
);

export default LandingPageHeaderAuth;
