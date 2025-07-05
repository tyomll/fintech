"use client";
import { useEffect, useState } from "react";
import { Form, FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, CardHeader, CardContent } from "@/shared/ui/@core/card";
import { Button } from "@/shared/ui/@core/button";
import { ArrowRight } from "lucide-react";
import { AUTH_FORM_SCHEMA } from "@/features/auth/lib/schema/form-schema";
import { useRouter, useSearchParams } from "next/navigation";
import {
  AuthTab,
  IAuthForm,
  LoginRequest,
  RegisterRequest,
} from "@/features/auth/lib/types";
import AuthFormLogo from "@/features/auth/ui/auth-form/auth-form-logo";
import AuthFormTabs from "@/features/auth/ui/auth-form/auth-form-tabs";
import AuthFormHeader from "@/features/auth/ui/auth-form/auth-form-header";
import AuthFormFields from "@/features/auth/ui/auth-form/auth-form-fields";
import AuthFormFooter from "@/features/auth/ui/auth-form/auth-form-footer";
import useLogin from "@/features/auth/model/api/mutations/use-login";
import useRegister from "@/features/auth/model/api/mutations/use-register";
import CookieService from "@/shared/services/cookie.service";
import { ACCESS_TOKEN_COOKIE_NAME } from "@/shared/lib/app";

const AuthForm = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { mutateAsync: login } = useLogin();
  const { mutateAsync: register } = useRegister();

  const defaultTab = searchParams.get("tab") || AuthTab.SignIn;
  const [activeTab, setActiveTab] = useState<AuthTab>(defaultTab as AuthTab);
  const [showPassword, setShowPassword] = useState(false);
  const isLogin = activeTab === AuthTab.SignIn;
  const authMutation = isLogin ? login : register;

  const form = useForm({
    resolver: zodResolver(AUTH_FORM_SCHEMA(activeTab)),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const { control } = form;

  const onTabChange = (tab: AuthTab) => {
    setActiveTab(tab);
    router.replace(`/auth?tab=${tab}`);
  };

  const onSubmit = async (data: { data: IAuthForm }) => {
    const body = isLogin
      ? {
          email: data.data.email,
          password: data.data.password,
        }
      : {
          name: data.data.name,
          email: data.data.email,
          password: data.data.password,
        };

    const { token, expiresAt } = await authMutation(
      body as unknown as LoginRequest | unknown as RegisterRequest
    );

    CookieService.set(ACCESS_TOKEN_COOKIE_NAME, token, {
      expires: new Date(expiresAt * 1000),
    });
    form.reset();
    router.push("/dashboard");
  };

  useEffect(() => {
    setActiveTab(defaultTab as AuthTab);
  }, [defaultTab]);

  return (
    <div className="w-full max-w-md mx-auto">
      <AuthFormLogo />
      <Card className="bg-slate-900/50 backdrop-blur-xl border border-slate-800/50 shadow-2xl shadow-blue-500/10">
        <CardHeader className="pb-0">
          <AuthFormTabs activeTab={activeTab} setActiveTab={onTabChange} />
          <AuthFormHeader activeTab={activeTab} />
        </CardHeader>
        <CardContent>
          <FormProvider {...form}>
            <Form
              control={control}
              onSubmit={(data) => onSubmit(data)}
              className="space-y-6"
            >
              <AuthFormFields
                activeTab={activeTab}
                showPassword={showPassword}
                setShowPassword={setShowPassword}
              />
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 group"
              >
                {isLogin ? "Sign In" : "Create Account"}
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Form>
          </FormProvider>
          <AuthFormFooter activeTab={activeTab} setActiveTab={onTabChange} />
        </CardContent>
      </Card>
    </div>
  );
};

export default AuthForm;
