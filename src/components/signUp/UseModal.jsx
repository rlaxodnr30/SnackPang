import React from "react";
import styled from "styled-components";

export default function UseModal({ setOpenUseModal }) {
  return (
    <ModalWrap
      onClick={() => {
        setOpenUseModal(false);
      }}
    >
      <ModalBox>
        <CloseBtn
          onClick={() => {
            setOpenUseModal(false);
          }}
        ></CloseBtn>
        <H3>서비스 이용약관</H3>
        <Text>
          <Focus>제1조(목적)</Focus> 이 약관은 (유)SnackPang(전자거래 사업자)이
          운영하는 홈페이지(이하 "스낵몰"이라 한다)에서 제공하는 인터넷 관련
          서비스(이하 "서비스"라 한다)를 이용함에 있어 (유)SnackPang와 이용자의
          권리·의무 및 책임사항을 규정함을 목적으로 합니다. ※ 「PC통신 등을
          이용하는 전자거래에 대해서도 그 성질에 반하지 않는 한 이 약관을
          준용합니다」
        </Text>
        <Text>
          <Focus>제2조(정의)</Focus> ① "스낵몰" 이란 사업자가 재화 또는 용역을
          이용자에게 제공하기 위하여 컴퓨터 등 정보통신설비를 이용하여 재화 또는
          용역을 거래할 수 있도록 설정한 가상의 영업장을 말하며, 아울러 스낵몰을
          운영하는 사업자의 의미로도 사용합니다. ② "이용자"란 "스낵몰"에
          접속하여 이 약관에 따라 "스낵몰"이 제공하는 서비스를 받는 회원 및
          비회원을 말합니다. ③ "회원"이라 함은 "스낵몰"에 개인정보를 제공하여
          회원등록을 한 자로서, "스낵몰"의 정보를 지속적으로 제공받으며,
          "스낵몰"이 제공하는 서비스를 계속적으로 이용할 수 있는 자를 말합니다.
          ④ "비회원"이라 함은 회원에 가입하지 않고 "스낵몰"이 제공하는 서비스를
          이용하는 자를 말합니다.
        </Text>
        <Text>
          <Focus>제3조 (약관의 명시와 개정)</Focus> ① "스낵몰"은 이 약관의
          내용과 상호, 영업소 소재지, 대표자의 성명, 사업자등록번호,
          연락처(전화, 팩스, 전자우편 주소 등) 등을 이용자가 알 수 있도록
          사이트의 초기 서비스화면(전면)에 게시합니다. ② "스낵몰"은 약관의 규제
          등에 관한 법률, 전자거래기본법, 전자서명법, 정보통신망 이용촉진 등에
          관한 법률, 방문판매 등에 관한법률, 소비자보호법 등 관련법을 위배하지
          않는 범위에서 이 약관을 개정할 수 있습니다. ③ "스낵몰"이 약관을 개정할
          경우에는 적용일자 및 개정사유를 명시하여 현행약관과 함께 홈페이지의
          초기화면에 그 적용일자 7일 이전부터 적용일자 전일까지 공지합니다. ④
          "스낵몰"이 약관을 개정할 경우에는 그 개정약관은 그 적용일자 이후에
          체결되는 계약에만 적용되고 그 이전에 이미 체결된 계약에 대해서는 개정
          전의 약관조항이 그대로 적용됩니다. 다만 이미 계약을 체결한 이용자가
          개정약관 조항의 적용을 받기를 원하는 뜻을 제3항에 의한 개정약관의
          공지기간 내에 "스낵몰"에 송신하여 "스낵몰"의 동의를 받은 경우에는
          개정약관 조항이 적용됩니다. ⑤ 이 약관에서 정하지 아니한 사항과 이
          약관의 해석에 관하여는 정부가 제정한 전자거래소비자보호지침 및
          관계법령 또는 상관례에 따릅니다.
        </Text>
        <ImportText>
          ※ "스낵몰"은 이용자가 구매한 재화에 대해 배송수단, 수단별 배송비용
          부담자, 수단별 배송기간 등을 명시합니다. 만약 "스낵몰"의 고의·과실로
          약정 배송기간을 초과한 경우에는 그로 인한 이용자의 손해를 배상합니다.
        </ImportText>
        <Text>
          "스낵몰"은 이용자가 구매 신청한 재화 또는 용역이 품절 등의 사유로
          재화의 인도 또는 용역의 제공을 할 수 없을 때에는 지체 없이 그 사유를
          이용자에게 통지하고, 사전에 재화 또는 용역의 대금을 받은 경우에는
          대금을 받은 날부터 3일 이내에, 그렇지 않은 경우에는 그
          사유발생일로부터 3일 이내에 계약해제 및 환급절차를 취합니다.
        </Text>
        <Text>
          ① "스낵몰"은 이용자의 정보 수집시 구매계약 이행에 필요한 최소한의
          정보를 수집합니다. 다음 사항을 필수사항으로 하며 그 외 사항은
          선택사항으로 합니다. 1. 희망ID(회원의 경우) 2. 비밀번호(회원의 경우)
          3. 이름 4. 별명 5. E-MAIL 6. 주소 7. 전화번호 8. 휴대번호 9.
          메일링서비스 10. SMS 수신여부
        </Text>
      </ModalBox>
    </ModalWrap>
  );
}
const ModalWrap = styled.div`
  z-index: 1500;
  display: block;
  background: rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const CloseBtn = styled.button`
  width: 78px;
  height: 40px;
  border: none;
  background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIxLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IuugiOydtOyWtF8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiCgkgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNDAgNDAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQwIDQwOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2NsaXAtcGF0aDp1cmwoI1NWR0lEXzJfKTt9Cgkuc3Qxe2NsaXAtcGF0aDp1cmwoI1NWR0lEXzRfKTt9Cgkuc3Qye2NsaXAtcGF0aDp1cmwoI1NWR0lEXzZfKTt9CgkKCQkuc3Qze2NsaXAtcGF0aDp1cmwoI1NWR0lEXzhfKTtmaWxsOm5vbmU7c3Ryb2tlOiNGRkZGRkY7c3Ryb2tlLXdpZHRoOjQ7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjEwO30KPC9zdHlsZT4KPGc+Cgk8Zz4KCQk8ZGVmcz4KCQkJPGVsbGlwc2UgaWQ9IlNWR0lEXzFfIiB0cmFuc2Zvcm09Im1hdHJpeCgwLjcwNzEgLTAuNzA3MSAwLjcwNzEgMC43MDcxIC04LjI4NDMgMjApIiBjeD0iMjAiIGN5PSIyMCIgcng9IjIwIiByeT0iMjAiLz4KCQk8L2RlZnM+CgkJPGNsaXBQYXRoIGlkPSJTVkdJRF8yXyI+CgkJCTx1c2UgeGxpbms6aHJlZj0iI1NWR0lEXzFfIiAgc3R5bGU9Im92ZXJmbG93OnZpc2libGU7Ii8+CgkJPC9jbGlwUGF0aD4KCQk8ZyBjbGFzcz0ic3QwIj4KCQkJPGRlZnM+CgkJCQk8cmVjdCBpZD0iU1ZHSURfM18iIHg9Ii0xMTY1LjMiIHk9Ii0zNzEuMyIgd2lkdGg9IjE5MjAiIGhlaWdodD0iMTU2NiIvPgoJCQk8L2RlZnM+CgkJCTxjbGlwUGF0aCBpZD0iU1ZHSURfNF8iPgoJCQkJPHVzZSB4bGluazpocmVmPSIjU1ZHSURfM18iICBzdHlsZT0ib3ZlcmZsb3c6dmlzaWJsZTsiLz4KCQkJPC9jbGlwUGF0aD4KCQkJPHJlY3QgeD0iLTUiIHk9Ii01IiB0cmFuc2Zvcm09Im1hdHJpeCgwLjcwNzEgLTAuNzA3MSAwLjcwNzEgMC43MDcxIC04LjI4NDMgMjApIiBjbGFzcz0ic3QxIiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiLz4KCQk8L2c+Cgk8L2c+Cgk8Zz4KCQk8ZGVmcz4KCQkJPHBhdGggaWQ9IlNWR0lEXzVfIiBkPSJNMjAsMTguNGwtNS43LTUuN2MtMC40LTAuNC0xLTAuNC0xLjQsMGMtMC40LDAuNC0wLjQsMSwwLDEuNGw1LjcsNS43bC01LjcsNS43Yy0wLjQsMC40LTAuNCwxLDAsMS40CgkJCQljMC40LDAuNCwxLDAuNCwxLjQsMGw1LjctNS43bDUuNyw1LjdjMC40LDAuNCwxLDAuNCwxLjQsMGMwLjQtMC40LDAuNC0xLDAtMS40bC01LjctNS43bDUuNy01LjdjMC40LTAuNCwwLjQtMSwwLTEuNAoJCQkJYy0wLjQtMC40LTEtMC40LTEuNCwwTDIwLDE4LjR6Ii8+CgkJPC9kZWZzPgoJCTxjbGlwUGF0aCBpZD0iU1ZHSURfNl8iPgoJCQk8dXNlIHhsaW5rOmhyZWY9IiNTVkdJRF81XyIgIHN0eWxlPSJvdmVyZmxvdzp2aXNpYmxlOyIvPgoJCTwvY2xpcFBhdGg+CgkJPGcgY2xhc3M9InN0MiI+CgkJCTxkZWZzPgoJCQkJPHJlY3QgaWQ9IlNWR0lEXzdfIiB4PSItMTE2NS4zIiB5PSItMzcxLjMiIHdpZHRoPSIxOTIwIiBoZWlnaHQ9IjE1NjYiLz4KCQkJPC9kZWZzPgoJCQk8Y2xpcFBhdGggaWQ9IlNWR0lEXzhfIj4KCQkJCTx1c2UgeGxpbms6aHJlZj0iI1NWR0lEXzdfIiAgc3R5bGU9Im92ZXJmbG93OnZpc2libGU7Ii8+CgkJCTwvY2xpcFBhdGg+CgkJCTxwYXRoIGNsYXNzPSJzdDMiIGQ9Ik0yMCwxOC40bC01LjctNS43Yy0wLjQtMC40LTEtMC40LTEuNCwwYy0wLjQsMC40LTAuNCwxLDAsMS40bDUuNyw1LjdsLTUuNyw1LjdjLTAuNCwwLjQtMC40LDEsMCwxLjQKCQkJCWMwLjQsMC40LDEsMC40LDEuNCwwbDUuNy01LjdsNS43LDUuN2MwLjQsMC40LDEsMC40LDEuNCwwYzAuNC0wLjQsMC40LTEsMC0xLjRsLTUuNy01LjdsNS43LTUuN2MwLjQtMC40LDAuNC0xLDAtMS40CgkJCQljLTAuNC0wLjQtMS0wLjQtMS40LDBMMjAsMTguNHoiLz4KCQk8L2c+Cgk8L2c+CjwvZz4KPC9zdmc+Cg==)
    no-repeat;
  margin-left: calc(100% - 20px);
  margin-top: -20px;
  position: relative;
  z-index: 1;
  left: -20px;
  top: 22px;
  cursor: pointer;
`;

export const H3 = styled.h3`
  padding: 0;
  margin: 0;
  line-height: 20px;
  font-size: 16px;
  color: #333;
  display: block;
  font-size: 1.17em;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
`;
const Focus = styled.div`
  font-weight: bold;
  color: black;
`;
const P = styled.p`
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
`;
export const Text = styled.div`
  color: #646464;
`;
const ImportText = styled.div`
  font-weight: bold;
`;
const ModalBox = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(1);
  background-color: white;
  z-index: 100;
  border: 1px solid;
  border-radius: 10px;
  height: 500px;
  padding: 5px;
  overflow-y: auto;
  width: 50%;
`;
