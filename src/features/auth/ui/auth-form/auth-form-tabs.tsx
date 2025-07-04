import type { FC } from "react";
import { AuthTab } from "@/features/auth/lib/types";

type Props = {
  activeTab: AuthTab;
  setActiveTab: (tab: AuthTab) => void;
};

const AuthFormTabs: FC<Props> = ({ activeTab, setActiveTab }) => {
  return (
    <div className="flex bg-slate-800/50 rounded-xl p-1 mb-6">
      <button
        onClick={() => setActiveTab(AuthTab.SignIn)}
        className={`flex-1 py-3 px-4 text-sm font-medium rounded-lg transition-all duration-300 cursor-pointer ${
          activeTab === AuthTab.SignIn
            ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
            : "text-slate-400 hover:text-white hover:bg-slate-700/50"
        }`}
        tabIndex={0}
        aria-label="Sign In Tab"
      >
        Sign In
      </button>
      <button
        onClick={() => setActiveTab(AuthTab.SignUp)}
        className={`flex-1 py-3 px-4 text-sm font-medium rounded-lg transition-all duration-300 cursor-pointer ${
          activeTab === AuthTab.SignUp
            ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
            : "text-slate-400 hover:text-white hover:bg-slate-700/50"
        }`}
        tabIndex={0}
        aria-label="Sign Up Tab"
      >
        Sign Up
      </button>
    </div>
  );
};

export default AuthFormTabs;
