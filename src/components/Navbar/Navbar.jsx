import React, { useContext, useEffect, useState } from "react";
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
  LogiBtn,
} from "./Navbar";
import homeLogo from "../../images/SnackPangLogo.png";
import blankProfiles from "../../images/blankProfiles.png";
import cart from "../../images/shopping.png";
import { auth, db } from "../../firebase";
import { signOut } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import { getDocs, collection } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ThemeContext } from "../../context/ThemeContext";

export default function Navbar({ userImage, setUserImage, userNick }) {
  const [isLogin, setIsLogin] = useState(false);
  const [users, setUsers] = useState("");
  const navigate = useNavigate();
  const loginUser = auth.currentUser;
  const { isDark } = useContext(ThemeContext);
  console.log(isDark);
  console.log("user", users);

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
      if (user) {
        setUserImage(auth.currentUser.photoURL);
        // setUsers(userNick);
      }
    });
  }, []);

  // console.log(userImg);
  // console.log("user :", auth.currentUser);
  return (
    <>
      <NavbarBox style={{ backgroundColor: isDark ? "black" : "#dfdfdf" }}>
        <LeftNav>
          <LeftNavLink to="/">
            <HomeLogo src={homeLogo} />
            {/* <Porduc>SnakPang</Porduc> */}
          </LeftNavLink>
          <LeftNavLink to="/admin">
            {loginUser?.email === "admin@snackpang.com" ? "상품추가" : null}
          </LeftNavLink>
        </LeftNav>

        <RightNav>
          <RightNavLink to={isLogin ? "/cartpage" : "/signin"}>
            <CartImg src={cart} />
          </RightNavLink>
          <RightNavLink to={isLogin ? "/mypage" : "/signin"}>
            <Porduc>마이페이지</Porduc>
          </RightNavLink>
          <ImgBox>
            {isLogin ? (
              // <ImgBoxImg src={!userImg ? blankProfiles : userImg} />
              <ImgBoxImg src={userImage ? userImage : blankProfiles} />
            ) : null}
            {/* <ImgBoxImg src={isLogin ? loginUser.photoURL : null}></ImgBoxImg> */}
          </ImgBox>

          {isLogin ? (
            // <LogBtn>{users.displayName}</LogBtn>
            <LogBtn>{users.displayName}</LogBtn>
          ) : (
            <RightNavLink to="/signup">회원가입</RightNavLink>
          )}

          <RightNavLink to="/signin">
            <LogiBtn
              onClick={() => {
                signOut(auth);
              }}
            >
              {isLogin ? "로그아웃" : "로그인"}
            </LogiBtn>
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
