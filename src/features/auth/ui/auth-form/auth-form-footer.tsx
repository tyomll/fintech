import Link from "next/link";
import type { FC } from "react";
import { AuthTab } from "@/features/auth/lib/types";

type Props = {
  activeTab: AuthTab;
  setActiveTab: (tab: AuthTab) => void;
};

const AuthFormFooter: FC<Props> = ({ activeTab, setActiveTab }) => (
  <>
    <div className="mt-6 text-center">
      <p className="text-sm text-slate-400">
        {activeTab === AuthTab.SignIn
          ? "Don't have an account? "
          : "Already have an account? "}
        <button
          onClick={() =>
            setActiveTab(
              activeTab === AuthTab.SignIn ? AuthTab.SignUp : AuthTab.SignIn
            )
          }
          className="text-blue-400 hover:text-blue-300 font-medium transition-colors cursor-pointer"
          tabIndex={0}
          aria-label={activeTab === AuthTab.SignIn ? "Sign up" : "Sign in"}
        >
          {activeTab === AuthTab.SignIn ? "Sign up" : "Sign in"}
        </button>
      </p>
    </div>
    {activeTab === AuthTab.SignUp && (
      <div className="mt-4 text-center">
        <p className="text-xs text-slate-500">
          By creating an account, you agree to our{" "}
          <Link
            href="/"
            className="text-blue-400 hover:text-blue-300 transition-colors"
            tabIndex={0}
            aria-label="Terms of Service"
          >
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link
            href="/"
            className="text-blue-400 hover:text-blue-300 transition-colors"
            tabIndex={0}
            aria-label="Privacy Policy"
          >
            Privacy Policy
          </Link>
        </p>
      </div>
    )}
    <div className="text-center mt-6">
      <Link
        href="/"
        className="text-sm text-slate-400 hover:text-white transition-colors inline-flex items-center"
        tabIndex={0}
        aria-label="Back to Home"
      >
        ← Back to Home
      </Link>
    </div>
  </>
);

export default AuthFormFooter;
