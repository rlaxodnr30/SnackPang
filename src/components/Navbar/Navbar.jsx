import React, { useState } from 'react';
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
} from './Navbar';
import homeLogo from '../../images/image 2.png';
import cart from '../../images/shopping.png';

export default function Navbar() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <>
      <NavbarBox>
        <LeftNav>
          <LeftNavLink to='/'>
            <HomeLogo src={homeLogo} />
            {/* <Porduc>SnakPang</Porduc> */}
          </LeftNavLink>
        </LeftNav>

        <RightNav>
          <RightNavLink to='/cartpage'>
            <CartImg src={cart} />
          </RightNavLink>
          <RightNavLink to='/mypage'>
            <Porduc>마이페이지</Porduc>
          </RightNavLink>
          <RightNavLink to='/signup'>
            <LogBtn>{isLogin ? '닉네임' : '회원가입'}</LogBtn>
          </RightNavLink>
          <RightNavLink to='/signin'>
            <LogBtn>{isLogin ? '로그아웃' : '로그인'}</LogBtn>
          </RightNavLink>
        </RightNav>
      </NavbarBox>
    </>
  );
}
