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
import { IoClose } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { ThreeDot } from "react-loading-indicators";
import { Label } from "@/components/ui/label";

// to add
// pin fits
// add clothes

type ImageMap = {
  [key: string]: string[]; // name -> array of base64 images
};

export default function ProfilePage() {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [showClothes, setShowClothes] = useState(false);
  const [imageGroups, setImageGroups] = useState<ImageMap>({});
  const [clothes, setClothes] = useState<string[]>([]);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState("");

  const handleSubmit = async (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      event.stopPropagation();
      const content = event.currentTarget.value;
      setInput(content);
      setLoading(true);
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
      setLoading(false);
    }
  };
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

  useEffect(() => {
    getClothes();
  }, []);

  const handleForm = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(title, description, file);

    const response = await fetch(
      "http://localhost:5000/user/angus41014/register_clothes",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "angus41014", // fallback to empty string
        },
        body: JSON.stringify({
          email: title,
          description: description,
          image: file,
        }),
      }
    );

    const data = await response.json();
    console.log("data", data);
    getClothes();
  };

  function imageFileToBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = () => {
        resolve(reader.result as string); // base64 string
      };

      reader.onerror = (error) => {
        reject(error);
      };

      reader.readAsDataURL(file); // triggers the load event
    });
  }

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      const base64 = await imageFileToBase64(file);
      setFile(base64);
      // console.log("Base64 string:", base64);
      // Now you can send this to the backend or preview it
    } catch (error) {
      console.error("Failed to convert image:", error);
    }
  };

  return (
    <div className="bg-white flex flex-col min-h-screen items-center p-1 gap-20 overflow-x-hidden">
      <Navbar />
      <div className="mt-[20vh] w-3/5 flex flex-col items-center justify-center gap-8">
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
            onKeyDown={handleSubmit}
            className="rounded-full bg-white h-12 border"
          ></Input>
          <IoClose
            className="h-6 w-auto cursor-pointer"
            onClick={() => setImageGroups({})}
          />
        </div>
        {loading && (
          <ThreeDot color="#000000" size="medium" text="loading" textColor="" />
        )}
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
        <div className="w-screen flex flex-col justify-center items-center p-10 mt-[10vh] rounded-4xl gap-4 bg-neutral-50 transition-all duration-100">
          <div className="text-lg font-bold">Your Waredrobe</div>
          <div className="flex gap-4">
            <Button
              className="rounded-full cursor-pointer"
              onClick={() => setShowClothes((p) => !p)}
            >
              <FaPlus /> Add Clothes
            </Button>
            <Button className="rounded-full cursor-pointer">
              <FaRegEdit /> Edit Clothes
            </Button>
            <Button className="rounded-full cursor-pointer">
              <FaMinus /> Remove Clothes
            </Button>
          </div>
          {showClothes && (
            <div className="bg-black w-full h-100 rounded-4xl flex flex-col">
              <IoClose
                className="text-white h-10 w-10 cursor-pointer mr-2 ml-auto mt-2"
                onClick={() => setShowClothes(false)}
              />
              <form
                onSubmit={handleForm}
                className="space-y-4 p-4 w-1/2 mx-auto text-white"
              >
                <div>
                  <Label htmlFor="title" className="pb-2 pl-2">
                    Type
                  </Label>
                  <Input
                    id="title"
                    value={title}
                    placeholder="T-shirt, pants etc..."
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>

                <div>
                  <Label htmlFor="description" className="pb-2 pl-2">
                    Description
                  </Label>
                  <Input
                    id="description"
                    value={description}
                    placeholder="Sky-blue, button-up T-shirt"
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>

                <div>
                  <Label htmlFor="file" className="pb-2 pl-2">
                    Upload Image
                  </Label>
                  <Input
                    id="file"
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                  />
                </div>

                <Button
                  type="submit"
                  className="bg-white hover:bg-neutral-200 text-black"
                >
                  Submit
                </Button>
              </form>
            </div>
          )}
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
        <CardTitle className="pt-2">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="justify-center items-center flex">
        <div className="bg-muted wrounded-full"></div>
        <img className="h-72 rounded-2xl" src={image} />
      </CardContent>
    </Card>
  );
}
