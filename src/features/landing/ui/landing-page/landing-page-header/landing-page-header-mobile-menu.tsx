import Link from "next/link";
import { Button } from "@/shared/@core/ui/button";
import type { FC } from "react";

const navItems = ["Features", "Pricing", "About", "Contact"];

type LandingPageHeaderMobileMenuProps = {
  handleClose: () => void;
};

const LandingPageHeaderMobileMenu: FC<LandingPageHeaderMobileMenuProps> = ({
  handleClose,
}) => (
  <div className="md:hidden py-6 border-t border-slate-800/50 bg-slate-950/95 backdrop-blur-xl rounded-b-2xl">
    <nav className="flex flex-col space-y-4" aria-label="Mobile Navigation">
      {navItems.map((item) => (
        <Link
          key={item}
          href={`#${item.toLowerCase()}`}
          className="text-slate-300 hover:text-white transition-colors px-4 py-2 rounded-xl hover:bg-slate-800/50"
          tabIndex={0}
          aria-label={item}
          onClick={handleClose}
        >
          {item}
        </Link>
      ))}
      <div className="flex flex-col space-y-3 pt-4 px-4">
        <Button
          variant="ghost"
          className="text-slate-300 hover:text-white justify-start"
          tabIndex={0}
          aria-label="Sign In"
          onClick={handleClose}
        >
          Sign In
        </Button>
        <Button
          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white justify-start"
          tabIndex={0}
          aria-label="Sign Up"
          onClick={handleClose}
        >
          Sign Up
        </Button>
      </div>
    </nav>
  </div>
);

export default LandingPageHeaderMobileMenu;
