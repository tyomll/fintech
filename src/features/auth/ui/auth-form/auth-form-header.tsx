import type { FC } from "react";
import { AuthTab } from "@/features/auth/lib/types";

type Props = {
  activeTab: AuthTab;
};

const AuthFormHeader: FC<Props> = ({ activeTab }) => (
  <div className="text-center mb-6">
    <h1 className="text-2xl font-bold text-white mb-2">
      {activeTab === AuthTab.SignIn ? "Welcome Back" : "Create Account"}
    </h1>
    <p className="text-slate-400">
      {activeTab === AuthTab.SignIn
        ? "Sign in to your account to continue"
        : "Join thousands of investors using AI-powered insights"}
    </p>
  </div>
);

export default AuthFormHeader;
