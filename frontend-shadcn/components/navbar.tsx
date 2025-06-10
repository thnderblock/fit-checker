import Link from "next/link";
import { Button } from "./ui/button";
import { IoLogIn } from "react-icons/io5";
import { IoHome } from "react-icons/io5";
import { MdOutlineQuestionMark } from "react-icons/md";
import { IoShirt } from "react-icons/io5";

export default function Navbar() {
  return (
    <div className="z-20 px-4 py-2 bg-transparent bg-opacity-85 backdrop-blur-3xl flex w-3/4 rounded-full shadow-xl justify-between fixed top-2">
      <div className="flex items-center font-semibold">
        <Link href={"/"}>
          <Button className="rounded-full">
            <IoShirt /> fit-checker
          </Button>
        </Link>
      </div>
      <div className="gap-2 flex items-center">
        <Link href={"/"}>
          <Button variant={"ghost"} className="font-semibold cursor-pointer">
            <IoHome /> Home
          </Button>
        </Link>
        <Button variant={"ghost"} className="font-semibold cursor-pointer">
          <MdOutlineQuestionMark /> FAQ
        </Button>
        <Link href={"/login"}>
          <Button className="font-semibold rounded-full p-5 cursor-pointer flex ml-3">
            <IoLogIn />
            Login
          </Button>
        </Link>
      </div>
    </div>
  );
}
