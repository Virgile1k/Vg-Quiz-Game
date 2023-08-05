import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "../../config/firebase";
import GoogleIcon from "@mui/icons-material/Google";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { toast, ToastContainer } from "react-toastify"; // Import the toast functionality
import "react-toastify/dist/ReactToastify.css"; // Import the toast styles
import logo from "../../assets/logof.svg";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [number, setNumber] = useState("");
  const [username, setUsername] = useState("");

  const googleProvider = new GoogleAuthProvider();

  const handleSignUpWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      toast.success("Signed up with Google successfully!");
    } catch (error) {
      toast.error("Failed to sign up with Google.");
    }
  };

  const handleEmailSignUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      toast.success("Signed up with email and password successfully!");
    } catch (error) {
      toast.error("Failed to sign up with email and password.");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div className="bg-image h-screen flex justify-center items-center">
      <h1 className="text-5xl text-white absolute top-2">VPLANET GUESS GAME</h1>

      <div className="bg-white p-10 rounded-lg backdrop-opacity-10 backdrop-invert bg-white/10 mt-10">
        <div className="ml-28 animate-bounce ">
          <img src={logo} alt="" />
        </div>
        <center>
          <h2 className="text-5xl text-white mb-5">SignUp</h2>
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
        <label className="text-white">Number</label>
        <PhoneInput
          country={"us"} // Set default country code (you can change it to any other code like "gb", "in", etc.)
          value={number}
          onChange={(value) => setNumber(value)}
          inputClass="block w-full p-2 border border-gray-400 rounded mb-2"
        />
        <label className="text-white">Username</label>
        <input
          className="block w-full p-2 border border-gray-400 rounded mb-2"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <button
          className="bg-slate-50 shadow-lg border-1 border-white p-2  border-2 shadow-lg flex items-center justify-center mt-2  w-full backdrop-opacity-10 backdrop-invert bg-white/40 text-white"
          onClick={handleEmailSignUp}
        >
            Signup
        </button>
        <a href="/auth/login" className="text-white">Have Account?Login</a>
        <div className="flex justify-center">
          <button
            className="bg-slate-50 shadow-lg flex items-center mt-2 backdrop-opacity-4 backdrop-invert bg-white/10 text-white"
            onClick={handleSignUpWithGoogle}
          >
            <GoogleIcon />
          </button>
        </div>
      </div>

      <ToastContainer position="bottom-right" />
    </div>
  );
}
