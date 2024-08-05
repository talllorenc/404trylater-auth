import LoginForm from "@/components/Forms/LoginForm";

const LoginPage = () => {
  return (
    <div
      style={{ maxWidth: "calc(100vw - 2.5rem)" }}
      className="bg-white mx-auto p-8 rounded-xl overflow-hidden text-black"
    >
      <div className="flex flex-col items-center justify-center">
        <p className="text-lg font-bold">Sign in to 404TryLater</p>
        <p className="text-[#585858]">
          Welcome back! Please sign in to continue
        </p>
      </div>

      <LoginForm />
    </div>
  );
};

export default LoginPage;
