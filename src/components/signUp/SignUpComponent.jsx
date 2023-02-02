import React, { useRef, useState } from "react";
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
} from "./SignUpComponent";
import googles from "../../images/googleicon.png";
import github from "../../images/githubicon.png";
import { auth } from "../../firebase.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function SignUpComponent() {
  //useRef input값 받아오기
  const idRef = useRef(null);
  const pwRef = useRef(null);
  const nameRef = useRef(null);
  const navigate = useNavigate();

  //회원가입
  const signUpBtn = async () => {
    // console.log(
    //   idRef.current.value,
    //   pwRef.current.value,
    //   nameRef.current.value
    // );
    /* 이메일 정규표현식 */
    const emailReg = new RegExp(
      "^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$"
    );
    /* 패스워드 정규식 */
    const passwordReg = new RegExp("");
    /* 닉네임 정규식 */
    const nameReg = new RegExp("^(?=.*[a-z0-9가-힣])[a-z0-9가-힣]{2,8}$");
    /* 특수문자, 영어 조합의 비밀번호 */
    /* 주민번호, 핸드폰번호 */
    /* 한글로만 이루어진 아이디, 한글+영문조합의 아이디 */

    const inputEmail = idRef.current.value;
    const inputPassword = pwRef.current.value;
    const inputname = nameRef.current.value;

    if (emailReg.test(inputEmail) === false) {
      alert("제대로 된 이메일 입력하세요");
      return;
    }

    if (passwordReg.test(inputPassword) === false) {
      alert("제대로 된 패스워드를 입력하세요");
      return;
    }

    if (nameReg.test(inputname) === false) {
      alert("닉네임 2자 이상 8자 이하로 입력하세요");
      return;
    }

    alert("회원가입이 완료 되었습니다!!");

    const user = await createUserWithEmailAndPassword(
      auth,
      idRef.current.value,
      pwRef.current.value,
      (auth.displayName = nameRef.current.value)
    );
    // console.log(user);
    const userLogin = await signInWithEmailAndPassword(
      auth,
      idRef.current.value,
      pwRef.current.value,
      nameRef.current.value
    );
    // console.log(userLogin);
    navigate("/");
  };

  return (
    <>
      <SignUpBox>
        <SignInput>
          <h1>회원가입</h1>
          <div>
            <InputTitle>닉네임</InputTitle>
            <InputempwBox>
              <Inputempw
                ref={nameRef}
                placeholder="닉네임을 입력해주세요!"
                type="text"
              />
            </InputempwBox>
          </div>

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
            <ButtonSign onClick={signUpBtn} type="submit">
              회원가입
            </ButtonSign>
          </ButtonBox>
          <SocialBtnBox>
            <ButtonSocial type="button">
              <SocialIcon src={github} />
              깃헙 로그인
            </ButtonSocial>
          </SocialBtnBox>
          <SocialBtnBox>
            <ButtonSocial type="button">
              <SocialIcon src={googles} />
              구글 로그인
            </ButtonSocial>
          </SocialBtnBox>
        </SignInput>
      </SignUpBox>
    </>
  );
}
