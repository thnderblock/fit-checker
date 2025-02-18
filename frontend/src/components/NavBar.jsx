import { Link } from "react-router-dom";
import { IoShirtSharp } from "react-icons/io5";

const NavBar = () => (
  <div className="sticky top-0 z-[100] bg-white">
    <div className="h-12 w-full shadow-md lg:flex items-center justify-center relative">
      <Link
        to="/"
        className=" h-8 absolute left-12 mt-2 lg:mt-0 flex justify-between items-center gap-2"
      >
        <IoShirtSharp className="text-sky-600 h-8 pb-[2px]" />
        <div className="font-bold font-body"> fit-checker</div>
      </Link>
      <div className="gap-12 lg:flex font-body items-center justify-center absolute right-12">
        <Link to="/" className="hidden lg:block">
          Home
        </Link>
        <Link to="/faq" className="hidden lg:block">
          FAQ
        </Link>
        <Link
          to="/signup"
          className="w-24 h-8 flex justify-center items-center rounded-full bg-sky-600 text-white font-bold shadow-md mt-2 lg:mt-0"
        >
          Sign Up
        </Link>
      </div>
    </div>
  </div>
);

export default NavBar;
