import React from "react";
import DetailComponent from "../components/Detail/DetailComponent.jsx";

export default function DetailPage({ clickSnacks, setCartCount }) {
  return (
    <DetailComponent clickSnacks={clickSnacks} setCartCount={setCartCount} />
  );
}
