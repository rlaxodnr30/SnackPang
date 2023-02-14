import React, { useState } from "react";
import styled from "styled-components";
import {
  AiFillCloseCircle,
  AiOutlineMinus,
  AiOutlinePlus,
} from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";

export default function ModalProduct({ setModal, modal }) {
  const loginUser = auth.currentUser;
  console.log(loginUser);
  const navigate = useNavigate();
  const [count, setCount] = useState(1);
  return (
    <>
      <ModalBoxKing>
        <ModalBox>
          <ModalContent>
            <CloseBtn
              onClick={() => {
                setModal(!modal);
              }}
            ></CloseBtn>
            <h1>홈런볼</h1>
            <CountBox>
              <CountBtn
                onClick={() => {
                  if (count > 1) {
                    setCount((prev) => prev - 1);
                  }
                }}
              >
                <AiOutlineMinus />
              </CountBtn>
              <Count>{count}</Count>
              <CountBtn
                onClick={() => {
                  setCount((prev) => prev + 1);
                }}
              >
                <AiOutlinePlus />
              </CountBtn>
            </CountBox>
            <ImgBox>
              <Img src="aa.png" />
            </ImgBox>
            <Price>가격 : 2200원</Price>
            <TotalPrice>합계 : 2200원</TotalPrice>
          </ModalContent>
          <CartBtnBox>
            <CartBtn
              onClick={() => {
                alert("장바구니에 담겼습니다!");
              }}
            >
              장바구니
            </CartBtn>
          </CartBtnBox>
        </ModalBox>
      </ModalBoxKing>
    </>
  );
}

const CartBtn = styled.button`
  width: 100%;
  height: 60px;
  border: none;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  float: left;
  cursor: pointer;
  &:hover {
    background-color: black;
  }
`;
const CartBtnBox = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
  overflow: hidden;
`;
const Img = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 150px;
`;
const ImgBox = styled.div`
  position: absolute;
  left: 35%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 150px;
`;
const Price = styled.h3`
  margin-top: 150px;
`;
const TotalPrice = styled.p`
  position: absolute;
  left: 70%;
  bottom: 10%;
  font-size: 20px;
  font-weight: bold;
`;
const CountBtn = styled.button`
  width: 40px;
  height: 40px;
  border: 1px solid #e1dedf;
  background-color: #fff;
  display: block;
  float: left;
  cursor: pointer;
  &:hover {
    background-color: black;
    color: white;
  }
`;
const Count = styled.div`
  width: 200px;
  height: 40px;
  border: 1px solid lightgray;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
`;
const CountBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const CloseBtn = styled.button`
  width: 78px;
  height: 40px;
  border: none;
  background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIxLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IuugiOydtOyWtF8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiCgkgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNDAgNDAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQwIDQwOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2NsaXAtcGF0aDp1cmwoI1NWR0lEXzJfKTt9Cgkuc3Qxe2NsaXAtcGF0aDp1cmwoI1NWR0lEXzRfKTt9Cgkuc3Qye2NsaXAtcGF0aDp1cmwoI1NWR0lEXzZfKTt9CgkKCQkuc3Qze2NsaXAtcGF0aDp1cmwoI1NWR0lEXzhfKTtmaWxsOm5vbmU7c3Ryb2tlOiNGRkZGRkY7c3Ryb2tlLXdpZHRoOjQ7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjEwO30KPC9zdHlsZT4KPGc+Cgk8Zz4KCQk8ZGVmcz4KCQkJPGVsbGlwc2UgaWQ9IlNWR0lEXzFfIiB0cmFuc2Zvcm09Im1hdHJpeCgwLjcwNzEgLTAuNzA3MSAwLjcwNzEgMC43MDcxIC04LjI4NDMgMjApIiBjeD0iMjAiIGN5PSIyMCIgcng9IjIwIiByeT0iMjAiLz4KCQk8L2RlZnM+CgkJPGNsaXBQYXRoIGlkPSJTVkdJRF8yXyI+CgkJCTx1c2UgeGxpbms6aHJlZj0iI1NWR0lEXzFfIiAgc3R5bGU9Im92ZXJmbG93OnZpc2libGU7Ii8+CgkJPC9jbGlwUGF0aD4KCQk8ZyBjbGFzcz0ic3QwIj4KCQkJPGRlZnM+CgkJCQk8cmVjdCBpZD0iU1ZHSURfM18iIHg9Ii0xMTY1LjMiIHk9Ii0zNzEuMyIgd2lkdGg9IjE5MjAiIGhlaWdodD0iMTU2NiIvPgoJCQk8L2RlZnM+CgkJCTxjbGlwUGF0aCBpZD0iU1ZHSURfNF8iPgoJCQkJPHVzZSB4bGluazpocmVmPSIjU1ZHSURfM18iICBzdHlsZT0ib3ZlcmZsb3c6dmlzaWJsZTsiLz4KCQkJPC9jbGlwUGF0aD4KCQkJPHJlY3QgeD0iLTUiIHk9Ii01IiB0cmFuc2Zvcm09Im1hdHJpeCgwLjcwNzEgLTAuNzA3MSAwLjcwNzEgMC43MDcxIC04LjI4NDMgMjApIiBjbGFzcz0ic3QxIiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiLz4KCQk8L2c+Cgk8L2c+Cgk8Zz4KCQk8ZGVmcz4KCQkJPHBhdGggaWQ9IlNWR0lEXzVfIiBkPSJNMjAsMTguNGwtNS43LTUuN2MtMC40LTAuNC0xLTAuNC0xLjQsMGMtMC40LDAuNC0wLjQsMSwwLDEuNGw1LjcsNS43bC01LjcsNS43Yy0wLjQsMC40LTAuNCwxLDAsMS40CgkJCQljMC40LDAuNCwxLDAuNCwxLjQsMGw1LjctNS43bDUuNyw1LjdjMC40LDAuNCwxLDAuNCwxLjQsMGMwLjQtMC40LDAuNC0xLDAtMS40bC01LjctNS43bDUuNy01LjdjMC40LTAuNCwwLjQtMSwwLTEuNAoJCQkJYy0wLjQtMC40LTEtMC40LTEuNCwwTDIwLDE4LjR6Ii8+CgkJPC9kZWZzPgoJCTxjbGlwUGF0aCBpZD0iU1ZHSURfNl8iPgoJCQk8dXNlIHhsaW5rOmhyZWY9IiNTVkdJRF81XyIgIHN0eWxlPSJvdmVyZmxvdzp2aXNpYmxlOyIvPgoJCTwvY2xpcFBhdGg+CgkJPGcgY2xhc3M9InN0MiI+CgkJCTxkZWZzPgoJCQkJPHJlY3QgaWQ9IlNWR0lEXzdfIiB4PSItMTE2NS4zIiB5PSItMzcxLjMiIHdpZHRoPSIxOTIwIiBoZWlnaHQ9IjE1NjYiLz4KCQkJPC9kZWZzPgoJCQk8Y2xpcFBhdGggaWQ9IlNWR0lEXzhfIj4KCQkJCTx1c2UgeGxpbms6aHJlZj0iI1NWR0lEXzdfIiAgc3R5bGU9Im92ZXJmbG93OnZpc2libGU7Ii8+CgkJCTwvY2xpcFBhdGg+CgkJCTxwYXRoIGNsYXNzPSJzdDMiIGQ9Ik0yMCwxOC40bC01LjctNS43Yy0wLjQtMC40LTEtMC40LTEuNCwwYy0wLjQsMC40LTAuNCwxLDAsMS40bDUuNyw1LjdsLTUuNyw1LjdjLTAuNCwwLjQtMC40LDEsMCwxLjQKCQkJCWMwLjQsMC40LDEsMC40LDEuNCwwbDUuNy01LjdsNS43LDUuN2MwLjQsMC40LDEsMC40LDEuNCwwYzAuNC0wLjQsMC40LTEsMC0xLjRsLTUuNy01LjdsNS43LTUuN2MwLjQtMC40LDAuNC0xLDAtMS40CgkJCQljLTAuNC0wLjQtMS0wLjQtMS40LDBMMjAsMTguNHoiLz4KCQk8L2c+Cgk8L2c+CjwvZz4KPC9zdmc+Cg==)
    no-repeat;
  margin-left: calc(100% - 20px);
  margin-top: -20px;
  position: relative;
  z-index: 1;
  cursor: pointer;
`;
const ModalContent = styled.div`
  text-align: center;
`;
const ModalBoxKing = styled.div`
  position: fixed;
  box-sizing: border-box;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.2);
  z-index: 999;
  opacity: 1;
  background: rgba(0, 0, 0, 0.65) !important;
  height: 100% !important;
`;
const ModalBox = styled.div`
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
  top: 37px;
  left: 205px;
  width: 500px;
  height: 390px;
  overflow: visible !important;
  background-color: white;
  text-align: left;
  border-radius: 3px;
  box-shadow: 0 20px 60px -2px rgb(27 33 58 / 40%);
  padding: 0;
`;
