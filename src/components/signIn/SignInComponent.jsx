import React, { useContext, useRef, useState } from "react";
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
  Text,
} from "./SignInComponent";
import { useNavigate } from "react-router-dom";
import { auth, provider, providergit } from "../../firebase.js";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import googles from "../../images/googleicon.png";
import github from "../../images/githubicon.png";
import snckPang from "../../images/image 1.png";
import { ThemeContext } from "../../context/ThemeContext";
import Loading from "../Loading/Loading";

export default function SignInComponent() {
  const { isDark } = useContext(ThemeContext);
  const navigate = useNavigate();
  const idRef = useRef(null);
  const pwRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [inVal, setInVal] = useState(true);
  const [imerroMsg, setImErroMsg] = useState("");
  const [pwerroMsg, setPwErroMsg] = useState("");
  const loginUser = auth.currentUser;
  console.log("user", loginUser);

  //로그인
  const singIN = async () => {
    //이메일 정규식
    const emailReg = new RegExp(
      "^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$"
    );
    //패스워드 정규식
    const passwordReg = /^[A-Za-z0-9]{8,20}$/;

    const inputId = idRef.current.value;
    const inputPw = pwRef.current.value;

    if (emailReg.test(inputId) === false) {
      alert("이메일을 확인해주세요!");
      return;
    }
    if (passwordReg.test(inputPw) === false) {
      alert("패스워드를 확인해주세요");
      return;
    }
    try {
      setLoading(true);
      const login = await signInWithEmailAndPassword(
        auth,
        idRef.current.value,
        pwRef.current.value
      );
      alert("로그인 성공");
      navigate("/");
      setLoading(false);
    } catch {
      setLoading(false);
      alert("로그인 실패");
    }
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

  //현재 이메일 확인
  const handleEmail = (e) => {
    const nowId = e.target.value;
    const idRegex =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    if (!idRegex.test(nowId)) {
      setImErroMsg("*이메일 형식에 맞춰서 작성해주세요.");
    } else {
      setImErroMsg("");
    }
  };
  //현재 패스워드 확인
  const handlePw = (e) => {
    const nowPw = e.target.value;
    const pwRegex = /^[A-Za-z0-9]{8,20}$/;
    if (!pwRegex.test(nowPw)) {
      setPwErroMsg(
        "*비밀번호는 영문 대소문자, 숫자를 혼합하여 8~20자로 입력해주세요"
      );
    } else {
      setPwErroMsg("");
    }
  };

  return (
    <>
      {loading === true ? <Loading /> : null}
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
                onChange={handleEmail}
                ref={idRef}
                placeholder="snackpang@snackpang.com"
                type="text"
              />
            </InputempwBox>
            <Text>{imerroMsg}</Text>
          </div>
          <div>
            <InputTitle>패스워드</InputTitle>
            <InputempwBox>
              <Inputempw
                onChange={handlePw}
                ref={pwRef}
                type="password"
                placeholder="비밀번호를 입력해주세요."
              />
            </InputempwBox>
          </div>
          <Text>{pwerroMsg}</Text>

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
          <ButtonBox>
            <ButtonSign
              onClick={() => {
                navigate("/signup");
              }}
              type="button"
            >
              회원가입
            </ButtonSign>
          </ButtonBox>
        </SignInput>
      </SignUpBox>
    </>
  );
}
