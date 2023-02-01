import React, { useRef } from "react";
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
import googles from "../../images/googleicon.png";
import github from "../../images/githubicon.png";
import snckPang from "../../images/image 1.png";

export default function SignInComponent() {
  const idRef = React.useRef();
  const pwRef = React.useRef();
  return (
    <>
      <SignUpBox>
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
            <ButtonSign type="submit">로그인</ButtonSign>
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
