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
  CartCount,
} from "./Navbar";
import homeLogo from "../../images/SnackPangLogo.png";
import blankProfiles from "../../images/blankProfiles.png";
import cart from "../../images/shopping.png";
import { auth, db } from "../../firebase";
import { signOut } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import { getDocs, collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ThemeContext } from "../../context/ThemeContext";

export default function Navbar({
  userImage,
  setUserImage,
  userNick,
  cartCount,
  setCartCount,
}) {
  const [isLogin, setIsLogin] = useState(false);
  const [users, setUsers] = useState("");
  const [carts, setCarts] = useState([]);
  const navigate = useNavigate();
  const loginUser = auth.currentUser;
  const { isDark } = useContext(ThemeContext);
  // const dates = new Date()
  // const [count, setCount] = useState(0);
  // console.log("user", users);
  // console.log("carts", carts);

  // auth.currentUser
  useEffect(() => {
    const getData = async () => {
      const snckcollectionRef = collection(db, "cartProduct");
      const data = await getDocs(snckcollectionRef);
      setCarts(
        data.docs.map((doc) => ({
          id: doc.id,
          userId: doc.data().userId,
          name: doc.data().name,
          price: doc.data().price,
          count: doc.data().count.count,
        }))
      );
    };
    // setCount(CartTotal);
    getData();
  }, [isLogin]);
  // console.log("carts", carts);

  useEffect(() => {
    const userCartCount = carts
      .filter((item) => item?.userId === auth.currentUser?.uid)
      .map((item) => {
        return item.count;
      });

    const CartTotal = userCartCount.reduce((acc, cur) => {
      return acc + cur;
    }, 0);

    setCartCount(CartTotal);
  }, [carts]);

  // 로그인 유저의 장바구니 총수량

  // console.log("userCartCount :", userCartCount);
  // // 로그인유저의  과자 총합

  // console.log("cartTotal:", CartTotal);
  // sessionStorage.setItem("total", CartTotal);
  // sessionStorage.removeItem("total");
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
            {loginUser ? (
              <CartCount>
                {/* {sessionStorage.getItem("total", CartTotal)} */}
                {cartCount}
              </CartCount>
            ) : null}
            {/* <CartCount>{cartCount}</CartCount> */}
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
                if (loginUser) {
                  signOut(auth);
                  setCartCount(0);
                }
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
