import React from "react";
import styled from "styled-components";
import HomePage from "../components/HomePage/HomePage.jsx";
export default function Home({ setClickSnacks, clickSnacks }) {
  return <HomePage setClickSnacks={setClickSnacks} clickSnacks={clickSnacks} />;
}
