import { Button } from "./ui/button";
import { Input } from "./ui/input";
import Link from "next/link";
import { IoLogIn } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { FaUser } from "react-icons/fa";

export default function Hero() {
  return (
    <>
      <div className="mt-[20vh] justify-center items-center flex flex-col gap-8 w-180">
        <div className="z-10 font-bold text-[5rem] tracking-tighter text-center leading-[5rem]">
          Your Daily Fits Made
          <span className="italic">
            {" "}
            Effortless, <span className="underline">Everyday.</span>
          </span>
        </div>
        <div className="z-10 text-center ">
          Never worry about what you wear again with fit checker. With a bespoke
          AI agent that learns what you like to wear, you&apos;ll get stylish
          fits instantly.
        </div>
        <div className="z-10 flex gap-2 justify-center items-center">
          <Link href={"/login"}>
            <Button className="rounded-full p-5 shadow-xl cursor-pointer">
              <IoLogIn />
              Login
            </Button>
          </Link>
          <Button className="rounded-full p-5 shadow-xl" variant={"outline"}>
            Learn More <FaArrowRight />
          </Button>
        </div>
      </div>
      <div className="w-4/5 h-[70vh] rounded-xl flex items-center bg-black flex-col pt-4 shadow-xl">
        <div className="bg-white w-3/4 h-screen mt-12 rounded-t-xl p-4">
          <div className="w-full flex flex-col justify-center items-center gap-8 p-8">
            <div className="bg-black w-20 h-20 rounded-full flex justify-center items-center">
              <FaUser className="text-white w-12 h-12" />
            </div>
            <div className="text-lg">
              Hi <span className="font-bold">User</span>, what do you feel like
              wearing today?
            </div>
            <div className="w-full flex items-center gap-2">
              <IoSearch className="h-6 w-auto" />
              <Input
                placeholder="Search any style"
                className="rounded-full bg-white h-12 border"
              ></Input>
              <IoClose className="h-6 w-auto cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
