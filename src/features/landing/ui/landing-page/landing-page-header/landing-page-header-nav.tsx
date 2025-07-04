import Link from "next/link";

const navItems = ["Trending Stocks", "Pricing", "Contact Us"];

const LandingPageHeaderNav = () => (
  <nav
    className="hidden md:flex items-center space-x-8"
    aria-label="Main Navigation"
  >
    {navItems.map((item) => (
      <Link
        key={item}
        href={`#${item.replace(" ", "-").toLowerCase()}`}
        className="relative text-slate-300 hover:text-white transition-all duration-300 group"
        tabIndex={0}
        aria-label={item}
      >
        {item}
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 group-hover:w-full transition-all duration-300"></span>
      </Link>
    ))}
  </nav>
);

export default LandingPageHeaderNav;
