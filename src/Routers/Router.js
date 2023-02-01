import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdminComponent from '../components/Admin/AdminComponent.jsx';
import Navbar from '../components/Navbar/Navbar.jsx';
import CartPage from '../pages/CartPage.jsx';
import DetailPage from '../pages/DetailPage.jsx';
import Home from '../pages/Home';
import Mypage from '../pages/Mypage';
import Product from '../pages/Product';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

export default function Router() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/mypage' element={<Mypage />} />
        <Route path='/product' element={<Product />} />
        <Route path='/cartpage' element={<CartPage />} />
        <Route path='/detail' element={<DetailPage />} />
        <Route path='/Admin' element={<AdminComponent />} />
      </Routes>
    </BrowserRouter>
  );
}
