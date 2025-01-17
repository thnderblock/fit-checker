const Steps = () => {
  return (
    <div className="bg-zinc-100 h-[50vh] w-full flex flex-col lg:flex-row justify-center items-center gap-4 lg:gap-16">
      <Card Number="01" Text="Upload images of your clothes." />
      <Card Number="02" Text="Set your styling preferences." />
      <Card Number="03" Text="fit-checker will generate fits to your liking." />
    </div>
  );
};

// eslint-disable-next-line react/prop-types
const Card = ({ Text, Number }) => {
  return (
    <div className="h-[12vh] lg:h-[30vh] bg-white w-[25vh] rounded-lg relative shadow-lg">
      <div className="absolute top-4 left-4 font-[900] font-display text-6xl tracking-tighter">
        {Number}
      </div>
      <div className="absolute top-4 left-24 lg:bottom-4 lg:px-4 lg:top-auto lg:left-auto font-inter">
        {Text}
      </div>
    </div>
  );
};

export default Steps;
