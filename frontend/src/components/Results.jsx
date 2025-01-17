const Results = () => {
  return (
    <div className="bg-white h-[calc(90vh-3rem)] w-full flex flex-col lg:flex-row gap-6 pb-10">
      <div className="h-1/2 lg:h-full lg:w-1/2 flex justify-center items-center">
        <div className="w-3/4 h-3/4 bg-stone-100">placeholder</div>
      </div>
      <div className="h-1/2 lg:h-full lg:w-1/2 flex justify-center item-center">
        <div className="flex w-[500px] h-full justify-center items-center flex-col lg:ml-0 lg:mr-auto">
          <div className="text-[64px] font-[900] font-display tracking-[-5px] leading-tight text-center lg:text-left">
            Be more confident with fit-checker.
          </div>
          <div className="font-body mt-6 leading-tight text-center lg:text-left">
            fit-checker keeps up to date with current trends and styles. Have
            outfits you want to try out? Let fit-checker find out what&apos;s
            best with your clothes!
          </div>
          <div className="h-12 w-full mt-6 flex flex-row justify-center lg:justify-start">
            <a
              href="/"
              className="h-full w-44 bg-sky-600 text-white font-body flex justify-center items-center rounded-full font-bold"
            >
              Try it out today!
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;
