"use client";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useState, useEffect } from "react";
import { IoSearch } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { Button } from "@/components/ui/button";

// to add
// pin fits
// add clothes
// render warerobes

type ImageMap = {
  [key: string]: string[]; // name -> array of base64 images
};

export default function ProfilePage() {
  const [input, setInput] = useState("");
  // const [output, setOutput] = useState("");
  // const [images, setImages] = useState("");
  const [imageGroups, setImageGroups] = useState<ImageMap>({});
  const [clothes, setClothes] = useState<string[]>([]);

  const handleSubmit = async (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      event.stopPropagation();
      const content = event.currentTarget.value;
      setInput(content);
      console.log(input);

      const response = await fetch(
        "http://localhost:5000/user/angus41014/fit_ask",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "angus41014", // fallback to empty string
          },
          body: JSON.stringify({ message: content }),
        }
      );

      const data: ImageMap = await response.json();
      console.log("data", data);
      setImageGroups(data);
    }
  };

  useEffect(() => {
    const getClothes = async () => {
      const response = await fetch(
        "http://localhost:5000/user/angus41014/get_all_clothes",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "angus41014", // fallback to empty string
          },
        }
      );
      const data = await response.json();
      setClothes(data);
      console.log(data);
    };

    getClothes();
  }, []);

  return (
    <div className="bg-white flex flex-col min-h-screen items-center p-1 gap-20 overflow-x-hidden">
      <Navbar />
      <div className="mt-[20vh] w-3/5 flex flex-col items-center justify-center gap-8">
        <div className="bg-black w-20 h-20 rounded-full"></div>
        <div className="text-lg">
          Hi <span className="font-bold">Name</span>, what do you feel like
          wearing today?
        </div>
        <div className="w-full flex items-center gap-2">
          <IoSearch className="h-6 w-auto" />
          <Input
            placeholder="Search any style"
            onKeyDown={handleSubmit}
            className="rounded-full bg-white h-12 border"
          ></Input>
        </div>
        <div className="grid grid-cols-2 w-50vw justify-center gap-8">
          {Object.entries(imageGroups).map(([style, images]) => (
            <div
              key={style}
              className="bg-neutral-50 p-4 rounded-2xl shadow-md"
            >
              <h2 className="text-xl font-bold mb-4">{style}</h2>
              <div className="grid grid-cols-2 gap-4 items-center">
                {images.map((imgSrc, idx) => (
                  <img
                    key={idx}
                    src={imgSrc}
                    alt={`${style} ${idx}`}
                    className="w-full h-auto rounded-lg"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
        {/* <div className="flex flex-col gap-2 w-full justify-center items-center">
          <Separator />
          <div className="text-lg font-bold">Recent Fits</div>
          <div className="flex gap-4 w-full">
            <MyCard
              title="Summer Vibes"
              description="Your favourite summer clothes"
            />
            <MyCard
              title="Clever Casual"
              description="Show off your professionalism with style"
            />
            <MyCard
              title="Night Time Stompers"
              description="Take over the night with this"
            />
          </div>
        </div> */}
        <div className="w-screen flex flex-col justify-center items-center p-10 mt-[10vh] rounded-4xl gap-4 bg-neutral-50">
          <div className="text-lg font-bold">Your Clothes</div>
          <div className="flex gap-4">
            <Button className="rounded-full">
              <FaPlus /> Add Clothes
            </Button>
            <Button className="rounded-full">
              <FaRegEdit /> Edit Clothes
            </Button>
            <Button className="rounded-full">
              <FaMinus /> Remove Clothes
            </Button>
          </div>
          <div className="flex justify-between w-3/5"></div>
          <div className="grid grid-cols-4 gap-4">
            {clothes.map((item, idx) => (
              <MyCard
                key={idx}
                title={item[0]}
                description={item[1]}
                image={item[2]}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

function MyCard({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: string;
}) {
  return (
    <Card className="w-full p-4">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="justify-center items-center flex">
        <div className="bg-muted wrounded-full"></div>
        <img className="h-72 rounded-2xl" src={image} />
      </CardContent>
    </Card>
  );
}
