import { FaPlus } from "react-icons/fa";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "./ui/input";

export default function UserFlow() {
  return (
    <>
      <div className="flex w-full justify-center font-bold text-[3rem] tracking-tighter text-center leading-[3rem]">
        Let AI figure out your best fit
      </div>
      <div className="w-full justify-center items-center flex flex-col gap-8">
        <div className="w-4/5 flex gap-3">
          <Card className="w-3/4 m-0">
            <CardContent className="text-[3rem]">01</CardContent>
            <CardContent>
              <CardTitle>Upload your waredrobe</CardTitle>
              <CardDescription>
                Add your favourite clothes to fit-checker
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="bg-black w-full flex justify-center items-center">
            <Button className="rounded-full cursor-pointer shadow-sm shadow-white">
              <FaPlus /> Add Clothes
            </Button>
          </Card>
        </div>
        <div className="w-4/5 flex gap-3">
          <Card className="bg-black w-full flex justify-center items-center">
            <Input
              placeholder="Search any style"
              className="rounded-full bg-white h-12 border w-1/2 shadow-sm shadow-white"
            ></Input>
          </Card>
          <Card className="w-3/4 m-0">
            <CardContent className="text-[3rem]">02</CardContent>
            <CardContent>
              <CardTitle>Request a style for the day</CardTitle>
              <CardDescription>
                Our AI is kept up to date with current styles and trends
              </CardDescription>
            </CardContent>
          </Card>
        </div>
        <div className="w-4/5 flex gap-3">
          <Card className="w-3/4 m-0">
            <CardContent className="text-[3rem]">03</CardContent>
            <CardContent>
              <CardTitle>A full fit is generated for you</CardTitle>
              <CardDescription>
                A full set of clothes ready to be worn by you
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="bg-black w-full flex justify-center items-center">
            <Card className="w-1/2">
              <CardHeader>
                <CardTitle className="pt-2">Summer Casual</CardTitle>
                <CardDescription></CardDescription>
              </CardHeader>
              <CardContent className="justify-center items-center flex">
                <div className="bg-muted rounded-full"></div>
              </CardContent>
            </Card>
          </Card>
        </div>
      </div>
    </>
  );
}
