import AuthForm from "@/app/components/AuthForm/auth-form";

export const metadata = {
  title: "Dynamic Travel - Sign up to open account",
  description: "Sign up to Dynamic Travel for better exeperience",
};

export default function page() {
  return (
    <>
      <AuthForm />
    </>
  );
}
