import shirt from "../images/shirt.png";

const Hero = () => {
  return (
    <div className="bg-white h-[calc(90vh-3rem)] w-full flex flex-col lg:flex-row gap-6">
      <div className="h-1/2 lg:h-full lg:w-1/2 flex justify-center item-center">
        <div className="flex w-[500px] h-full justify-center items-center flex-col lg:mr-0 lg:ml-auto">
          <div className="text-[64px] font-[900] font-display tracking-[-5px] leading-tight text-center lg:text-left">
            Your Daily Fits, All in One Place
          </div>
          <div className="font-body mt-6 leading-tight text-center lg:text-left">
            Ever stress about what to wear when leaving the house? Don’t have a
            clue what goes with what? With FitChecker, you can get bespoke fits
            tailored to your style and your closet.
          </div>
          <div className="h-12 w-full mt-6 flex flex-row justify-center lg:justify-start">
            <a
              href="/"
              className="h-full w-32 bg-sky-600 text-white font-body flex justify-center items-center rounded-full font-bold"
            >
              Sign Up
            </a>
            <a
              href="/"
              className="h-full w-32 ml-6 border-2 border-black rounded-full flex justify-center items-center font-bold"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      <div className="h-1/2 lg:h-full lg:w-1/2 flex justify-center items-center">
        <img
          src={shirt}
          alt="shirt"
          className="h-full lg:h-3/4 object-contain lg:ml-10 lg:mr-auto"
        />
      </div>
    </div>
  );
};

export default Hero;
