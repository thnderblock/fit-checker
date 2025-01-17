const NavBar = () => {
  return (
    <div className="sticky top-0 z-100 bg-white">
      <div className="h-12 w-full shadow-md lg:flex items-center justify-center relative">
        <a
          href="/"
          className="w-8 h-8 bg-black rounded-full text-white text-sm absolute left-12 mt-2 lg:mt-0"
        >
          logo
        </a>
        <div className="font-bold hidden lg:block"> fit-checker </div>
        <div className="gap-12 lg:flex font-body items-center justify-center absolute right-12">
          <a href="/" className="hidden lg:block">
            Home
          </a>
          <a href="/" className="hidden lg:block">
            FAQ
          </a>
          <a
            href="/"
            className="w-24 h-8 flex justify-center items-center rounded-full bg-sky-600 text-white font-bold shadow-md mt-2 lg:mt-0"
          >
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
