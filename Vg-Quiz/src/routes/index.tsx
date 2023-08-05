import React from "react";
import { Routes, Route } from "react-router-dom";
import GamePage from "../pages/welcomepage";
import LoginPage from "../pages/auth/Login";
import SignUpPage from "../pages/auth/Signup";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<GamePage />} />
      <Route path="/auth/login" element={<LoginPage />} />
      <Route path="/auth/signup" element={<SignUpPage />} />
    </Routes>
  );
};

export default AppRoutes;
//hello
