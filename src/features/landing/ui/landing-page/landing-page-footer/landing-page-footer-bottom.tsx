import Link from "next/link";
import { Button } from "@/shared/ui/@core/button";
import { ArrowUp } from "lucide-react";
import type { FC } from "react";

type Props = {
  scrollToTop: () => void;
};

const LandingPageFooterBottom: FC<Props> = ({ scrollToTop }) => (
  <div className="border-t border-slate-800/50 mt-12 pt-8">
    <div className="flex flex-col md:flex-row justify-between items-center">
      <p className="text-slate-400 text-sm">
        © {new Date().getFullYear()} FinanceAI. All rights reserved.
      </p>
      <div className="flex items-center space-x-6 mt-4 md:mt-0">
        <div className="flex space-x-6">
          {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
            (item) => (
              <Link
                key={item}
                href="#"
                className="text-slate-400 hover:text-white text-sm transition-colors"
                tabIndex={0}
                aria-label={item}
              >
                {item}
              </Link>
            )
          )}
        </div>
        <Button
          onClick={scrollToTop}
          variant="ghost"
          size="sm"
          className="text-slate-400 hover:text-white hover:bg-slate-800/50 rounded-full p-2"
          tabIndex={0}
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-4 w-4" aria-hidden="true" />
        </Button>
      </div>
    </div>
  </div>
);

export default LandingPageFooterBottom;
