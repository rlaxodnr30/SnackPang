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
  // const [userImg, setUserImg] = useState("");
  const [clickSnacks, setClickSnacks] = useState([]);
  const [userNick, setUserNick] = useState("");
  const [userImage, setUserImage] = useState("");
  const [users, setUsers] = useState("");
  const [loading, setLoading] = useState(true);
  console.log("clickSnack", clickSnacks);
  return (
    <BrowserRouter>
      <Navbar
        setUserImage={setUserImage}
        userImage={userImage}
        userNick={userNick}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              setClickSnacks={setClickSnacks}
              clickSnacks={clickSnacks}
              loading={loading}
              setLoading={setLoading}
            />
          }
        />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route
          path="/mypage"
          element={
            <Mypage
              userNick={userNick}
              setUserNick={setUserNick}
              setUserImage={setUserImage}
              userImage={userImage}
            />
          }
        />
        <Route path="/product" element={<Product />} />
        <Route path="/cartpage" element={<CartPage />} />
        <Route
          path="/detail/:id"
          element={<DetailPage clickSnacks={clickSnacks} />}
        />
        <Route path="/admin" element={<AdminComponent />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
