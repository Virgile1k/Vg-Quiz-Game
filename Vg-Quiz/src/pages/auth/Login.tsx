import { useState } from "react";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "../../config/firebase";
import GoogleIcon from "@mui/icons-material/Google";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { toast, ToastContainer } from "react-toastify"; // Import the toast functionality
import "react-toastify/dist/ReactToastify.css"; // Import the toast styles
import logo from "../../assets/logof.svg";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const googleProvider = new GoogleAuthProvider();

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      toast.success("Logged in with Google successfully!");
    } catch (error) {
      toast.error("Failed to log in with Google.");
    }
  };

  const handleEmailLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("Logged in with email and password successfully!");
    } catch (error) {
      toast.error("Failed to log in with email and password.");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div className="bg-image h-screen flex justify-center items-center">
      <h1 className="text-5xl text-white absolute top-10">
        VPLANET GUESS GAME
      </h1>

      <div className="bg-white p-10 rounded-lg backdrop-opacity-10 backdrop-invert bg-white/10 mt-20">
        <div className="ml-20 animate-bounce ">
          <img src={logo} alt="" />
        </div>
        <center>
          <h2 className="text-5xl text-white  mb-5">Login</h2>
        </center>
        <label className="text-white">Email</label>
        <input
          className="block w-full p-2 border border-gray-400 rounded mb-4"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label className="text-white">Password</label>
        <div className="relative">
          <input
            className="block w-full p-2 border border-gray-400 rounded mb-4"
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span
            className="absolute top-3 right-3 cursor-pointer"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? <VisibilityOff /> : <Visibility />}
          </span>
        </div>

        <button
          className="bg-slate-50 shadow-lg border-1 border-white p-2  border-2 shadow-lg flex items-center justify-center mt-2 w-64 backdrop-opacity-10 backdrop-invert bg-white/40 text-white"
          onClick={handleEmailLogin}
        >
          Sign In
        </button>
        <a href="/auth/signup" className="text-white"> Don't Have Account?SignUp</a>

        <button
          className="bg-slate-50   ml-28 shadow-lg flex items-center mt-2  backdrop-opacity-4 backdrop-invert bg-white/10 text-white"
          onClick={handleGoogleLogin}
        >
          <GoogleIcon />
        </button>
      </div>

      <ToastContainer position="bottom-right" />
    </div>
  );
}
