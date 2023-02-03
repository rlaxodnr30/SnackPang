import React, { useEffect, useState } from "react";
import {
  HomeLogo,
  LeftNav,
  NavbarBox,
  LeftNavLink,
  RightNav,
  CartImg,
  LogBtn,
  Porduc,
  RightNavLink,
} from "./Navbar";
import homeLogo from "../../images/image 2.png";
import cart from "../../images/shopping.png";
import { auth, db } from "../../firebase";
import { signOut } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import { getDocs, collection } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Navbar() {
  const [isLogin, setIsLogin] = useState(false);
  const [users, setUsers] = useState("");
  const [render, setRender] = useState("");
  const navigate = useNavigate();
  const loginUser = auth.currentUser;

  // auth.currentUser
  //------------
  useEffect(() => {
    const userState = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLogin(true);
      } else {
        setIsLogin(false);
      }
      setUsers(user);
      // console.log(user);
      // console.log(users);
    });
  }, []);

  return (
    <>
      <NavbarBox>
        <LeftNav>
          <LeftNavLink to="/">
            <HomeLogo src={homeLogo} />
            {/* <Porduc>SnakPang</Porduc> */}
          </LeftNavLink>
        </LeftNav>

        <RightNav>
          <RightNavLink to="/cartpage">
            <CartImg src={cart} />
          </RightNavLink>
          <RightNavLink to="/mypage">
            <Porduc>마이페이지</Porduc>
          </RightNavLink>
          <ImgBox>
            <ImgBoxImg
              src={
                isLogin ? (
                  loginUser.photoURL
                ) : (
                  <ImgBoxImg style={{ display: "none" }} />
                )
              }
            ></ImgBoxImg>
          </ImgBox>

          <RightNavLink to="/signup">
            <LogBtn>{isLogin ? users.displayName : "회원가입"}</LogBtn>
          </RightNavLink>
          <RightNavLink to="/signin">
            <LogBtn
              onClick={() => {
                signOut(auth);
              }}
            >
              {isLogin ? "로그아웃" : "로그인"}
            </LogBtn>
          </RightNavLink>
        </RightNav>
      </NavbarBox>
    </>
  );
}

export const ImgBox = styled.div`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: white;
`;
export const ImgBoxImg = styled.img`
  width: 30px;
  height: 30px;
  background-color: #dfdfdf;
  border-radius: 15px;
  background-size: cover;
`;
export const ImgNone = styled.img`
  display: none;
`;
