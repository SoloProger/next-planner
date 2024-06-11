import AuthForm from "../proceses/auth/ui/AuthForm";

function AuthPage() {
  return (
    <section className="flex jc-center ai-center h-vh-100">
      <div className="p-35 border-1 border-radius-4 border-gray wp-600 flex-col gap-34">
        <h2 className="header-semibold-4 text-center">Авторизация</h2>
        <AuthForm />
      </div>
    </section>
  );
}

export default AuthPage;
