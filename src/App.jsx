import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";

import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Player from "./pages/Player/Player";
import { auth } from "./firebase"; // ✅ import your auth instance

 import { ToastContainer, toast } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css'

function AppRoutes() {
  const navigate = useNavigate();

  useEffect(() => {
    // ✅ subscribe once
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("Logged In");
        navigate("/");
      } else {
        console.log("Logged Out");
        navigate("/login");
      }
    });

    // ✅ cleanup listener on unmount
    return () => unsubscribe();
  }, [navigate]);

  return (
    <>
    <ToastContainer theme="dark" />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/player/:id" element={<Player />} />
    </Routes>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
