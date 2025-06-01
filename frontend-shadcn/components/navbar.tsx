import Link from "next/link";
import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <div className="z-20 px-4 py-2 bg-transparent bg-opacity-85 backdrop-blur-3xl flex w-3/4 rounded-full shadow-xl justify-between fixed top-2">
      <div className="flex items-center font-semibold ">
        <Button className="rounded-full">/fit-checker</Button>
      </div>
      <div className="gap-2 flex items-center">
        <Link href={"/"}>
          <Button variant={"ghost"} className="font-semibold">
            O Home
          </Button>
        </Link>
        <Button variant={"ghost"} className="font-semibold">
          O FAQ
        </Button>
        <Link href={"/login"}>
          <Button className="font-semibold rounded-full p-5">O Login</Button>
        </Link>
      </div>
    </div>
  );
}
