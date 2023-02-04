import React from "react";
import MypageComponent from "../components/Mypage/MypageComponent.jsx";

export default function Mypage({ setUserImg, userImg }) {
  return <MypageComponent userImg={userImg} setUserImg={setUserImg} />;
}
