const NavBar = () => {
  return (
    <div className="sticky top-0 z-100 bg-white">
      <div className="h-12 w-full shadow-md flex items-center justify-center relative">
        <a
          href="/"
          className="w-8 h-8 bg-black rounded-full text-white text-sm absolute left-12"
        >
          logo
        </a>
        <div className="font-bold"> fit-checker </div>
        <div className="gap-12 flex font-body items-center justify-center absolute right-12">
          <a href="/">Home</a>
          <a href="/">FAQ</a>
          <a
            href="/"
            className="w-24 h-8 flex justify-center items-center rounded-full bg-black text-white font-bold shadow-md"
          >
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
