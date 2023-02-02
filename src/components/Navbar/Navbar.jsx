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
import { auth } from "../../firebase";
import { signOut } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import { async } from "@firebase/util";

export default function Navbar() {
  const [isLogin, setIsLogin] = useState(false);
  const [users, setUsers] = useState("");
  const logoutBtn = async () => {
    const logoutuser = await signOut(auth);
  };
  useEffect(() => {
    const userState = onAuthStateChanged(
      auth,
      (user) => {
        if (user) {
          setIsLogin(true);
        } else {
          setIsLogin(false);
        }
        setUsers(user);
      },
      []
    );
  });

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
          <RightNavLink to="/signup">
            <LogBtn>{isLogin ? users.displayName : "회원가입"}</LogBtn>
          </RightNavLink>
          <RightNavLink to="/signin">
            <LogBtn onClick={logoutBtn}>
              {isLogin ? "로그아웃" : "로그인"}
            </LogBtn>
          </RightNavLink>
        </RightNav>
      </NavbarBox>
    </>
  );
}
