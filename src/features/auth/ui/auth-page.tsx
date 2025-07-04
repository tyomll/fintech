import AuthForm from "@/features/auth/ui/auth-form/auth-form";

const AuthPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center p-4">
      <AuthForm />
    </div>
  );
};

export default AuthPage;
