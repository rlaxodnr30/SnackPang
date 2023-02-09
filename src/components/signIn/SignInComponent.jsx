import React, { useContext, useRef } from "react";
import styled from "styled-components";
import {
  InputTitle,
  SignInput,
  SignUpBox,
  InputempwBox,
  Inputempw,
  ButtonBox,
  ButtonSign,
  ButtonSocial,
  SocialBtnBox,
  SocialIcon,
  LogoImg,
} from "./SignInComponent";
import { useNavigate } from "react-router-dom";
import { auth, provider, providergit } from "../../firebase.js";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import googles from "../../images/googleicon.png";
import github from "../../images/githubicon.png";
import snckPang from "../../images/image 1.png";
import { ThemeContext } from "../../context/ThemeContext";

export default function SignInComponent() {
  const { isDark } = useContext(ThemeContext);
  const navigate = useNavigate();
  const idRef = useRef(null);
  const pwRef = useRef(null);
  //로그인
  const singIN = async () => {
    const login = await signInWithEmailAndPassword(
      auth,
      idRef.current.value,
      pwRef.current.value
    );
    alert("로그인 성공");
    console.log(login);
    navigate("/");
  };
  //구글로그인
  const googlelogin = async () => {
    try {
      const googlelog = await signInWithPopup(auth, provider);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  //깃 로그인
  const gitlogin = async () => {
    try {
      const gitlog = await signInWithPopup(auth, providergit);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <SignUpBox
        style={{
          backgroundColor: isDark ? "black" : "white",
          color: isDark ? "white" : "black",
        }}
      >
        <SignInput>
          <LogoImg src={snckPang} />

          <div>
            <InputTitle>이메일주소</InputTitle>
            <InputempwBox>
              <Inputempw
                ref={idRef}
                placeholder="snackpang@snackpang.com"
                type="text"
              />
            </InputempwBox>
          </div>
          <div>
            <InputTitle>패스워드</InputTitle>
            <InputempwBox>
              <Inputempw
                ref={pwRef}
                type="password"
                placeholder="비밀번호를 입력해주세요."
              />
            </InputempwBox>
          </div>
          <ButtonBox>
            <ButtonSign onClick={singIN} type="submit">
              로그인
            </ButtonSign>
          </ButtonBox>
          <SocialBtnBox>
            <ButtonSocial onClick={gitlogin} type="button">
              <SocialIcon src={github} />
              깃헙 로그인
            </ButtonSocial>
          </SocialBtnBox>
          <SocialBtnBox>
            <ButtonSocial onClick={googlelogin} type="button">
              <SocialIcon src={googles} />
              구글 로그인
            </ButtonSocial>
          </SocialBtnBox>
        </SignInput>
      </SignUpBox>
    </>
  );
}
