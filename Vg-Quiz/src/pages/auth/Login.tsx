import { useState } from "react";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "../../config/firebase";
import GoogleIcon from "@mui/icons-material/Google";

import logo from "../../assets/logof.svg";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const googleProvider = new GoogleAuthProvider();

  const handleGoogleLogin = async () => {
    await signInWithPopup(auth, googleProvider);
  };

  const handleEmailLogin = async () => {
    await signInWithEmailAndPassword(auth, email, password);
  };

  return (
    <div className="bg-image h-screen flex justify-center items-center">
      <h1 className="text-5xl text-white absolute top-10">
        VPLANET GUESS GAME
      </h1>

      <div className="bg-white p-10 rounded-lg backdrop-opacity-10 backdrop-invert bg-white/10">
        <div className="ml-20 animate-bounce ">
          <img src={logo} alt="" />
        </div>
        <center>
          {" "}
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
        <input
          className="block w-full p-2 border border-gray-400 rounded mb-4"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="bg-slate-50 shadow-lg border-1 border-white p-2  border-2 shadow-lg flex items-center justify-center mt-2 w-64 backdrop-opacity-10 backdrop-invert bg-white/40 text-white"
          onClick={handleEmailLogin}
        >
          Sign In
        </button>

        <button
          className="bg-slate-50   ml-28 shadow-lg flex items-center mt-2  backdrop-opacity-4 backdrop-invert bg-white/10 text-white"
          onClick={handleGoogleLogin}
        >
          <GoogleIcon />
        </button>
      </div>
    </div>
  );
}
