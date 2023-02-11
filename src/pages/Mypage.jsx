import React from "react";
import MypageComponent from "../components/Mypage/MypageComponent.jsx";

export default function Mypage({ setUserImage, userImage }) {
  return <MypageComponent userImage={userImage} setUserImage={setUserImage} />;
}
