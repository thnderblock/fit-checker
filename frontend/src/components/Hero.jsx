const Hero = () => {
  return (
    <div className="bg-white h-[calc(100vh-3rem)] w-full flex flex-row gap-6 shadow-md">
      <div className="h-full w-1/2 flex justify-center item-center">
        <div className="flex w-[500px] h-full justify-center items-center flex-col">
          <div className="text-[64px] font-bold font-display tracking-tighter leading-tight">
            Your Daily Fits, All in One Place
          </div>
          <div className="font-body mt-6 leading-tight">
            Ever stress about what to wear when leaving the house? Don’t have a
            clue what goes with what? With FitChecker, you can get bespoke fits
            tailored to your style and your closet.
          </div>
          <div className="h-12 w-full mt-6 flex flex-row">
            <a
              href="/"
              className="h-full w-32 bg-black text-white font-body flex justify-center items-center rounded-full font-bold"
            >
              Sign Up
            </a>
            <a
              href="/"
              className="h-full w-32 ml-6 border-2 border-black rounded-full flex justify-center items-center cursor-pointer font-bold"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
      <div className="h-full w-1/2 flex justify-center items-center">
        <div className="w-3/4 h-3/4 bg-slate-200 flex justify-center items-center">
          placeholder
        </div>
      </div>
    </div>
  );
};

export default Hero;
