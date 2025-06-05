import { LoginForm } from "@/components/login-form";
import Navbar from "@/components/navbar";
import { IoShirt } from "react-icons/io5";

export default function LoginPage() {
  return (
    <div className="bg-muted flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <Navbar />
      <div className="flex w-full max-w-sm flex-col gap-6">
        <a href="#" className="flex items-center gap-2 self-center font-medium">
          <IoShirt />
          fit-checker.
        </a>
        <LoginForm />
      </div>
    </div>
  );
}
