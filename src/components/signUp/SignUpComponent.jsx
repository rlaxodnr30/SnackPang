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
  CheckAll,
  CheckList,
  Text,
  H4,
  AgreeBox,
  CheckBoxText,
  CheckBoxTextCho,
  CheckLabel,
  CheckLabelAll,
} from "./SignUpComponent";
import { auth } from "../../firebase.js";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Loading from "../Loading/Loading";

export default function SignUpComponent() {
  const [loading, setLoading] = useState(false);
  //useRef input값 받아오기
  const idRef = useRef(null);
  const pwRef = useRef(null);
  const nameRef = useRef(null);
  const navigate = useNavigate();
  const [imerroMsg, setImErroMsg] = useState("");
  const [pwerroMsg, setPwErroMsg] = useState("");
  const [nierroMsg, setNiErroMsg] = useState("");
  const [allCheck, setAllCheck] = useState(false);
  const [ageCheck, setAgeCheck] = useState(false);
  const [useCheck, setUseCheck] = useState(false);
  const [marketingCheck, setMarketingCheck] = useState(false);

  const allBtnHandle = () => {
    if (allCheck === false) {
      setAllCheck(true);
      setAgeCheck(true);
      setUseCheck(true);
      setMarketingCheck(true);
    } else {
      setAllCheck(false);
      setAgeCheck(false);
      setUseCheck(false);
      setMarketingCheck(false);
    }
  };
  const ageBtnHandle = () => {
    if (ageCheck === false) {
      setAgeCheck(true);
    } else {
      setAgeCheck(false);
    }
  };
  const useBtnHandle = () => {
    if (useCheck === false) {
      setUseCheck(true);
    } else {
      setUseCheck(false);
    }
  };
  const marketBtnHandle = () => {
    if (marketingCheck === false) {
      setMarketingCheck(true);
    } else {
      setMarketingCheck(false);
    }
  };
  //회원가입
  const signUpBtn = async () => {
    // setLoading(true);
    /* 이메일 정규표현식 */
    const emailReg = new RegExp(
      "^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$"
    );
    /* 패스워드 정규식 */
    const passwordReg = /^[A-Za-z0-9]{8,20}$/;
    /* 닉네임 정규식 */
    const nameReg = new RegExp("^(?=.*[a-z0-9가-힣])[a-z0-9가-힣]{2,8}$");

    const inputEmail = idRef.current.value;
    const inputPassword = pwRef.current.value;
    const inputname = nameRef.current.value;

    if (emailReg.test(inputEmail) === false) {
      alert("제대로 된 이메일 입력하세요");
      return;
    }

    if (passwordReg.test(inputPassword) === false) {
      alert("비밀번호 형식을 확인해주세요");
      return;
    }

    if (nameReg.test(inputname) === false) {
      alert("닉네임 2자 이상 8자 이하로 입력하세요");
      return;
    }
    if (ageCheck === false || useCheck === false) {
      alert("필수항목을 체크해주세요!");
      return;
    }

    alert("회원가입이 완료 되었습니다!!");

    const user = await createUserWithEmailAndPassword(
      auth,
      idRef.current.value,
      pwRef.current.value
      // (auth.displayName = nameRef.current.value)
    ).then(() => {
      if (auth.currentUser)
        updateProfile(auth?.currentUser, {
          displayName: inputname,
          // photoURL: profileUrl,
        });
      // console.log(auth);
    });
    const userLogin = await signInWithEmailAndPassword(
      auth,
      idRef.current.value,
      pwRef.current.value
      // nameRef.current.value
    );
    setLoading(false);
    navigate("/");
  };

  // 현재 이메일 확인 문자
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
  //현재 닉네임 확인 문자
  const handleNick = (e) => {
    const nowNic = e.target.value;
    const nicRegex = /^(?=.*[a-z0-9가-힣])[a-z0-9가-힣]{2,8}$/;
    if (!nicRegex.test(nowNic)) {
      setNiErroMsg("*2자 이상 8자 이하로 작성해주세요.");
    } else {
      setNiErroMsg("");
    }
  };
  //현재 패스워드 확인 문자
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
      <SignUpBox>
        <SignInput>
          <h1>회원가입</h1>
          <div>
            <InputTitle>닉네임</InputTitle>
            <InputempwBox>
              <Inputempw
                onChange={handleNick}
                ref={nameRef}
                placeholder="닉네임을 입력해주세요!"
                type="text"
              />
            </InputempwBox>
            <Text>{nierroMsg}</Text>
          </div>

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
              <Text>
                {pwerroMsg}
                {/* *비밀번호는 영문 대소문자, 숫자를 혼합하여 8~20자로 입력해주세요 */}
              </Text>
            </InputempwBox>
          </div>
          <AgreeBox>
            <H4>약관동의</H4>
            <CheckAll>
              <input
                onChange={allBtnHandle}
                checked={allCheck}
                id="check1"
                type="checkbox"
              />
              <CheckLabelAll for="check1">전체동의</CheckLabelAll>
            </CheckAll>
            <CheckList>
              <input
                onChange={ageBtnHandle}
                checked={ageCheck}
                id="check2"
                type="checkbox"
              />
              <CheckLabel for="check2">
                만 14세 이상입니다 <CheckBoxText>(필수)</CheckBoxText>
              </CheckLabel>
            </CheckList>
            <CheckList>
              <input
                onChange={useBtnHandle}
                checked={useCheck}
                id="check3"
                type="checkbox"
              />
              <CheckLabel for="check3">
                이용약관<CheckBoxText>(필수)</CheckBoxText>
              </CheckLabel>
            </CheckList>
            <CheckList>
              <input
                onChange={marketBtnHandle}
                checked={marketingCheck}
                id="check4"
                type="checkbox"
              />
              <CheckLabel for="check4">
                마케팅동의<CheckBoxTextCho>(선택)</CheckBoxTextCho>
              </CheckLabel>
            </CheckList>
          </AgreeBox>
          <ButtonBox>
            <ButtonSign
              style={{
                background: `${
                  ageCheck === true && useCheck === true
                    ? "#3ea5f5"
                    : "lightgray"
                }`,
              }}
              onClick={signUpBtn}
              type="submit"
            >
              회원가입
            </ButtonSign>
          </ButtonBox>
        </SignInput>
      </SignUpBox>
    </>
  );
}
