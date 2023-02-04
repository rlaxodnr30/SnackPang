import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminComponent from "../components/Admin/AdminComponent.jsx";
import Navbar from "../components/Navbar/Navbar.jsx";
import CartPage from "../pages/CartPage.jsx";
import DetailPage from "../pages/DetailPage.jsx";
import Home from "../pages/Home";
import Mypage from "../pages/Mypage";
import Product from "../pages/Product";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Footer from "../components/Footer/Footer.jsx";
export default function Router() {
  const [userImg, setUserImg] = useState("");
  const [clickSnacks, setClickSnacks] = useState([]);
  return (
    <BrowserRouter>
      <Navbar setUserImg={setUserImg} userImg={userImg} />
      <Routes>
        <Route
          path="/"
          element={
            <Home setClickSnacks={setClickSnacks} clickSnacks={clickSnacks} />
          }
        />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route
          path="/mypage"
          element={<Mypage setUserImg={setUserImg} userImg={userImg} />}
        />
        <Route path="/product" element={<Product />} />
        <Route path="/cartpage" element={<CartPage />} />
        <Route
          path="/detail"
          element={<DetailPage clickSnacks={clickSnacks} />}
        />
        <Route path="/Admin" element={<AdminComponent />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
