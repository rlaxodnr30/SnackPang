import React from "react";
import MypageComponent from "../components/Mypage/MypageComponent.jsx";

export default function Mypage({
  setUserImage,
  userImage,
  userNick,
  setUserNick,
}) {
  return (
    <MypageComponent
      userImage={userImage}
      setUserImage={setUserImage}
      userNick={userNick}
      setUserNick={setUserNick}
    />
  );
}
