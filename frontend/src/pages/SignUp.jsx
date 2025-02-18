import { Link } from "react-router-dom";
import { FaUser, FaLock } from "react-icons/fa";
import NavBar from "../components/NavBar";

const SignUp = () => {
  return (
    <div>
      <NavBar />
      <div className="h-[calc(100vh-3rem)] flex justify-center items-center">
        <div className="flex flex-col gap-4 bg-slate-300">
          <div className="font-display font-bold text-4xl tracking-wider">
            Login
          </div>
          <div className="flex bg-red-300">
            <input type="text" placeholder="Username" />
            <FaUser />
          </div>
          <div className="flex bg-green-300">
            <input type="password" placeholder="Password" />
            <FaLock />
          </div>
          <div className="bg-blue-300">
            <button type="submit">Login</button>
          </div>
          <div>
            Don&apos;t have an account?{" "}
            <Link to="/signup" className="text-blue-600 underline">
              Register
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
