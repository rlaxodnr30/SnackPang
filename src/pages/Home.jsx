import React from "react";
import styled from "styled-components";

export default function Home() {
  return (
    <>
      <ProductImgBox></ProductImgBox>
    </>
  );
}

export const ProductImgBox = styled.div`
  width: 100%;
  height: 300px;
  background-color: blueviolet;
`;
