import React from "react";
import styled from "styled-components";

export default function MarketingModal({ setOpenModal }) {
  return (
    <ModalWrap
      onClick={() => {
        setOpenModal(false);
      }}
    >
      <ModalBox>
        <CloseBtn
          onClick={() => {
            setOpenModal(false);
          }}
        ></CloseBtn>
        <H3>마케팅 정보 수신동의 확인안내</H3>
        <Text>
          서비스 제공 및 이용과 관련하여 ㈜Snack(이하, '회사'라 합니다)이 취득한
          개인정보는 "통신비밀보호법", "전기통신사업법" 및 "정보통신망 이용촉진
          및 정보보호 등에 관한 법률" 등 정보통신서비스제공자가 준수하여야 할
          관련 법령상의 개인정보 보호 규정을 준수합니다.
        </Text>
        <Text>
          1. 고객이 수집 및 이용에 동의한 개인정보를 활용하여, 전자적 전송
          매체(SMS/SNS/MMS/e-mail/App Push. 등 다양한 전송 매체)를 통하여,
          ㈜뉴엠 및 제3자의 상품 또는 서비스에 대한 개인 맞춤형 광고 정보를
          전송할 수 있습니다.
        </Text>
        <Text>
          2. 고객이 본 수신 동의를 철회하고자 할 경우 고객센터를 통하여 수신
          동의 철회 요청을 할 수 있습니다.
        </Text>
        <ImportText>※ 이벤트 문의 및 동의철회 : 1515-2121</ImportText>
        <Text>
          ※ 본 동의는 ＂학습과정 및 이벤트 응모"의 선택적 정보 제공을 위한
          개인정보 수집/이용에 대한 동의로서, 동의하지 않으시면 이용 및 이벤트
          응모가 불가합니다. ※ 법령에 따른 개인정보의 수집/이용, 계약의
          이행/편의 증진을 위한 개인정보 처리위탁 및 개인정보 처리와 관련된 일반
          사항은 “㈜Snack"의 개인정보처리방침에 따릅니다. (시행일) 이 약관은
          2023년 03월 15일부터 시행합니다.
        </Text>
        <Text>
          회사는 이용자의 개인정보를 고지 및 동의 받은 사항에 따라 수집∙이용
          목적이 달성되기 전 또는 이용자의 탈퇴 요청이 있기 전까지 해당 정보를
          보유합니다. 다만, 아래의 사유로 인하여 보관이 필요한 경우 외부와
          차단된 별도 DB 또는 테이블에 분리 보관 됩니다. 가. 온라인/모바일
          서비스 제공을 위해 수집한 회원가입 정보 : 회원탈퇴 시까지 나. 관련
          법령에 의한 개인정보 보유 1) 통신비밀보호법 서비스 이용기록, 접속로그,
          접속IP정보 : 3개월 2) 전자상거래 등에서의 소비자보호에 관한 법률
          표시∙광고에 관한 기록 : 6개월 계약 또는 청약철회 등에 관한 기록 : 5년
          대금결제 및 재화등의 공급에 관한 기록 : 5년 소비자의 불만 또는
          분쟁처리에 관한 기록 : 3년 3) 부가가치세법 세금계산서, 영수증 등
          거래내역 관련 정보 : 5년
        </Text>
      </ModalBox>
    </ModalWrap>
  );
}
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
  /* position: relative;
  overflow: hidden;
  box-sizing: border-box;
  top: 37px;
  left: 205px;
  width: 500px;
  height: 390px;
  overflow: visible !important;
  background-color: white;
  text-align: left;
  border-radius: 3px;
  box-shadow: 0 20px 60px -2px rgb(27 33 58 / 40%);
  padding: 0; */

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  z-index: 100;
  border: 1px solid;
  border-radius: 10px;
  /* display: flex; */
  /* justify-content: center; */
  /* align-items: center; */
  width: 500px;
  height: 500px;
  padding: 5px;
  overflow-y: auto;
`;
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
