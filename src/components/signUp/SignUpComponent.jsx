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
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function SignUpComponent() {
  //useRef input값 받아오기
  const idRef = useRef(null);
  const pwRef = useRef(null);

  //회원가입
  const signUpBtn = async () => {
    console.log(idRef.current.value, pwRef.current.value);
    /* 이메일 정규표현식 */
    const emailReg = new RegExp(
      "^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$"
    );

    const passwordReg = new RegExp("");

    /* 특수문자, 영어 조합의 비밀번호 */
    /* 주민번호, 핸드폰번호 */
    /* 한글로만 이루어진 아이디, 한글+영문조합의 아이디 */

    const inputEmail = idRef.current.value;
    const inputPassword = pwRef.current.value;

    if (emailReg.test(inputEmail) === false) {
      alert("제대로 된 이메일 입력하세요");
      return;
    }

    if (!passwordReg.test(inputPassword)) {
      alert("제대로 된 이메일 입력하세요");
      return;
    }

    alert("제대로 된 이메일입니다!");

    // const user = await createUserWithEmailAndPassword(
    //   auth,
    //   idRef.current.value,
    //   pwRef.current.value
    // );
    // console.log(user);
  };

  return (
    <>
      <SignUpBox>
        <SignInput>
          <h1>회원가입</h1>

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
