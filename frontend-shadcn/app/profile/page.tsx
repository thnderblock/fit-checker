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
import { Separator } from "@radix-ui/react-separator";
import { Toggle } from "@/components/ui/toggle";
import { useState } from "react";
// import Markdown from "react-markdown";

// to add
// pin fits
// add clothes
// render warerobes

type ImageMap = {
  [key: string]: string[]; // name -> array of base64 images
};

export default function ProfilePage() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  // const [images, setImages] = useState("");
  const [imageGroups, setImageGroups] = useState<ImageMap>({});

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
      // const res = "";
      // for (const i in data) {
      //   const formattedImages = data[i].map((img: string) => `${img}`);
      //   console.log(formattedImages);
      //   setImages(formattedImages);
      // }
      // setOutput(res);
      setImageGroups(data);
    }
  };

  return (
    <div className="bg-white flex flex-col min-h-screen items-center p-1 gap-20 overflow-x-hidden">
      <Navbar />
      <div className="mt-[20vh] w-3/5 flex flex-col items-center justify-center gap-8">
        <div className="bg-black w-20 h-20 rounded-full"></div>
        <div className="text-lg">
          Hi <span className="font-bold">Name</span>, what do you feel like
          wearing today?
        </div>
        <Input
          placeholder="Q"
          onKeyDown={handleSubmit}
          className="rounded-full bg-white h-12 border"
        ></Input>
        <div className="flex flex-col w-50vw justify-center gap-4">
          {Object.entries(imageGroups).map(([style, images]) => (
            <div key={style}>
              <h2 className="text-xl font-bold mb-4">{style}</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {images.map((imgSrc, idx) => (
                  <img
                    key={idx}
                    src={imgSrc}
                    alt={`${style} ${idx}`}
                    className="w-full h-auto rounded-lg shadow-md"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-2 w-full justify-center items-center">
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
        </div>
        <div className="w-screen flex justify-center items-center p-10 mt-[10vh] rounded-4xl">
          <div className="flex flex-col gap-4 w-3/5 justify-center items-center">
            <div className="text-lg font-bold">Your Clothes</div>
            <div className="flex gap-4 w-full">
              <Toggle>Shirts</Toggle>
              <Toggle>Long Sleeve</Toggle>
              <Toggle>Short</Toggle>
              <Toggle>Pants</Toggle>
              <Toggle>Shoes</Toggle>
            </div>
            <div className="bg-muted w-screen flex justify-center items-center flex-col p-4 gap-4">
              <div className="flex gap-4 w-3/5">
                <MyCard title="White T-Shirt" description="" />
                <MyCard title="White Polo" description="" />
                <MyCard title="Anime Shirt" description="" />
                <MyCard title="Gray Shirt" description="" />
              </div>
              <div className="flex gap-4 w-3/5">
                <MyCard title="Flannel Shirt" description="" />
                <MyCard title="Collared Shirt" description="" />
                <MyCard title="Green Shirt" description="" />
              </div>
              <div className="flex gap-4 w-3/5">
                <MyCard title="Demim Pants" description="" />
                <MyCard title="Skinny Jeans" description="" />
                <MyCard title="Calico Pants" description="" />
                <MyCard title="Black Sweatpants" description="" />
              </div>
            </div>
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
}: {
  title: string;
  description: string;
}) {
  return (
    <Card className="w-full h-72">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="justify-center items-center flex">
        <div className="bg-muted wrounded-full"></div>
      </CardContent>
    </Card>
  );
}
