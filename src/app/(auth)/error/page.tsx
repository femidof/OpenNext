import { ErrorCard } from "@/components/auth/error-card";

const AuthErrorPage = () => {
  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <ErrorCard />
    </div>
  );
};

export default AuthErrorPage;
