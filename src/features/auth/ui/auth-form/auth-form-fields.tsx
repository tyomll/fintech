import { Controller, useFormContext } from "react-hook-form";
import { Input } from "@/shared/ui/@core/input";
import { Label } from "@/shared/ui/@core/label";
import { Mail, Lock, User, Eye, EyeOff } from "lucide-react";
import type { FC } from "react";
import { AuthTab, IAuthForm } from "@/features/auth/lib/types";

type Props = {
  activeTab: AuthTab;
  showPassword: boolean;
  setShowPassword: (show: boolean) => void;
};

const AuthFormFields: FC<Props> = ({
  activeTab,
  showPassword,
  setShowPassword,
}) => {
  const {
    control,
    formState: { errors },
  } = useFormContext<IAuthForm>();

  return (
    <>
      {activeTab === AuthTab.SignUp && (
        <div className="space-y-2">
          <Label htmlFor="name" className="text-slate-300 font-medium">
            Full Name
          </Label>
          <div className="relative">
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  id="name"
                  type="text"
                  placeholder="Enter your full name"
                  className="pl-10 bg-slate-800/50 border-slate-700/50 text-white placeholder-slate-400 focus:border-blue-500/50 focus:ring-blue-500/20 rounded-xl h-12"
                  required
                />
              )}
            />
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
          </div>
          {errors.name && (
            <p className="text-red-700 text-sm">{errors.name.message}</p>
          )}
        </div>
      )}
      <div className="space-y-2">
        <Label htmlFor="email" className="text-slate-300 font-medium">
          Email Address
        </Label>
        <div className="relative">
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                id="email"
                type="email"
                placeholder="Enter your email"
                className="pl-10 bg-slate-800/50 border-slate-700/50 text-white placeholder-slate-400 focus:border-blue-500/50 focus:ring-blue-500/20 rounded-xl h-12"
                required
              />
            )}
          />
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
        </div>
        {errors.email && (
          <p className="text-red-700 text-sm">{errors.email.message}</p>
        )}
      </div>
      <div className="space-y-2">
        <Label htmlFor="password" className="text-slate-300 font-medium">
          Password
        </Label>
        <div className="relative">
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="pl-10 pr-10 bg-slate-800/50 border-slate-700/50 text-white placeholder-slate-400 focus:border-blue-500/50 focus:ring-blue-500/20 rounded-xl h-12"
                required
              />
            )}
          />
          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="cursor-pointer absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-white transition-colors"
          >
            {showPassword ? (
              <EyeOff className="h-5 w-5" />
            ) : (
              <Eye className="h-5 w-5" />
            )}
          </button>
        </div>
        {errors.password && (
          <p className="text-red-700 text-sm">{errors.password.message}</p>
        )}
      </div>
    </>
  );
};

export default AuthFormFields;
