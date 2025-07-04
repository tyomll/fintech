import { Button } from "@/shared/@core/ui/button";

const LandingPageHeaderAuth = () => (
  <div className="hidden md:flex items-center space-x-4">
    <Button
      variant="ghost"
      className="text-slate-300 hover:text-white hover:bg-slate-800/50"
      tabIndex={0}
      aria-label="Sign In"
    >
      Sign In
    </Button>
    <Button
      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
      tabIndex={0}
      aria-label="Sign Up"
    >
      Sign Up
    </Button>
  </div>
);

export default LandingPageHeaderAuth;
