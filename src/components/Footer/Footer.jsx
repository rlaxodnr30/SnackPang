import React from "react";
import styled from "styled-components";
import snack from "../../images/image 1.png";
import { FooterBox, FooterBoxDetail, Snackpang } from "./Footer";
export default function Footer() {
  return (
    <>
      <FooterBox>
        <FooterBoxDetail>
          <Snackpang src={snack} />
          <hr />
          <span>
            SnackPang(주)대표 : 조재원사업자등록번호 : 111-22-32345
            통신판매업신고 : 제2022-진건퇴계원-0142호개인정보 보호책임자 :
            김스낵(SnackPang@dev.com) 고객만족센터 : 000-1234-5678
            [문의전클릭]팩스 : 02-1234-5678 카카오톡 ID : SnackPang 사업장
            소재지 : 12129 서울특별시 강남구 테헤란로 123 스낵타워 2층 Copyright
            © SnackPang, All rights reserved.
          </span>
        </FooterBoxDetail>
      </FooterBox>
    </>
  );
}
