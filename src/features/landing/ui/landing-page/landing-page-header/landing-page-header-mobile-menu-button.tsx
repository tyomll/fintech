import { Menu, X } from "lucide-react";
import type { FC } from "react";

type LandingPageHeaderMobileMenuButtonProps = {
  isMenuOpen: boolean;
  handleToggle: () => void;
};

const LandingPageHeaderMobileMenuButton: FC<
  LandingPageHeaderMobileMenuButtonProps
> = ({ isMenuOpen, handleToggle }) => (
  <button
    className="md:hidden text-slate-300 hover:text-white p-2 rounded-xl hover:bg-slate-800/50 transition-colors"
    onClick={handleToggle}
    tabIndex={0}
    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
  >
    {isMenuOpen ? (
      <X className="h-6 w-6" aria-hidden="true" />
    ) : (
      <Menu className="h-6 w-6" aria-hidden="true" />
    )}
  </button>
);

export default LandingPageHeaderMobileMenuButton;
