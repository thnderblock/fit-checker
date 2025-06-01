import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import UserFlow from "@/components/user-flow";

export default function Home() {
  return (
    <div className="bg-white flex flex-col min-h-screen items-center p-1 gap-20 overflow-x-hidden">
      <Navbar />
      <Hero />
      <UserFlow />
      <Footer />
    </div>
  );
}
