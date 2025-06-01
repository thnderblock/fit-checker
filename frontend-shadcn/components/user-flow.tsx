import { Card, CardContent, CardDescription, CardTitle } from "./ui/card";

export default function UserFlow() {
  return (
    <>
      <div className="flex w-full justify-center font-bold text-[3rem] tracking-tighter text-center leading-[3rem]">
        Let AI figure out your best fit
      </div>
      <div className="w-full justify-center items-center flex flex-col gap-8">
        <MyCard
          title="Upload your waredrobe"
          subtitle="Add your favourite clothes to fit-checker"
          number="01"
        ></MyCard>
        <MyCardFlipped
          title="Request a style for the day"
          subtitle="Our AI is kept up to date with current styles and trends"
          number="02"
        ></MyCardFlipped>
        <MyCard
          title="A full fit is generated for you"
          subtitle="A full set of clothes ready to be worn by you"
          number="03"
        ></MyCard>
      </div>
    </>
  );
}

function MyCard({
  title,
  subtitle,
  number,
}: {
  title: string;
  subtitle: string;
  number: string;
}) {
  return (
    <div className="w-4/5 flex gap-3">
      <Card className="w-3/4 m-0">
        <CardContent className="text-[3rem]">{number}</CardContent>
        <CardContent>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{subtitle}</CardDescription>
        </CardContent>
      </Card>
      <Card className="bg-black w-full flex justify-center items-center">
        <div className="bg-white w-30 h-30 rounded-full"> </div>
      </Card>
    </div>
  );
}

function MyCardFlipped({
  title,
  subtitle,
  number,
}: {
  title: string;
  subtitle: string;
  number: string;
}) {
  return (
    <div className="w-4/5 flex gap-3">
      <Card className="bg-black w-full flex justify-center items-center">
        <div className="bg-white w-20 h-20 rounded-full"> </div>
      </Card>
      <Card className="w-3/4 m-0">
        <CardContent className="text-[3rem]">{number}</CardContent>
        <CardContent>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{subtitle}</CardDescription>
        </CardContent>
      </Card>
    </div>
  );
}
