import { Button } from "./ui/button";

export default function Footer() {
  return (
    <div className="bg-black w-full h-[50vh] p-0 flex items-center flex-col">
      <div className="font-bold text-[3rem] tracking-tighter text-center leading-[3rem] bg-white w-full rounded-b-4xl pb-16">
        {" "}
        Look your best, without the stress
      </div>
      <div className="text-white w-4/5 h-full flex py-8 justify-center gap-8">
        <div className="w-1/2 justify-center flex flex-col p-8">
          <div className="text-lg font-bold">fit-checker</div>
          <div>your daily fits made effortless</div>
          <Button className="w-fit mt-2">Learn More</Button>
        </div>
        <div className="w-1/2 flex justify-center items-center p-8 gap-16">
          <div>
            <div>Home</div>
            <div>FAQ</div>
            <div>Login</div>
            <br />
          </div>
          <div>
            <div>Instagram</div>
            <div>Twtiter</div>
            <div>Facebook</div>
            <div>LinkedIn</div>
          </div>
        </div>
      </div>
    </div>
  );
}
