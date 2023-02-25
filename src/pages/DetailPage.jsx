import React from "react";
import DetailComponent from "../components/Detail/DetailComponent.jsx";

export default function DetailPage({ clickSnacks, setCartCount, userNick }) {
  return (
    <DetailComponent
      clickSnacks={clickSnacks}
      setCartCount={setCartCount}
      userNick={userNick}
    />
  );
}
