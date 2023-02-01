import React from 'react';
import {
  MainWrap,
  ImgWrap,
  Img,
  SnackName,
  SnackFont,
  BottomWrap,
  ReviewWrap,
  ReviewBox,
  TitleWrap,
  TitleInput,
  ContentWrap,
  ContentInput,
  BtnWrap,
  Btn,
} from './DetailComponent';
import testSnack from '../../images/testSnack.png';
export default function DetailComponent() {
  return (
    <MainWrap>
      <ImgWrap>
        <Img src={testSnack}></Img>
      </ImgWrap>
      {/* 여기 까지 상단 */}
      <SnackName>
        <SnackFont>과자 이름</SnackFont>
      </SnackName>
      {/* 여기 까지 중간           */}
      <BottomWrap>
        <ReviewWrap>
          <ReviewBox>리뷰: 과자가 맛이 없어요 닉네임 수정/삭제</ReviewBox>
        </ReviewWrap>
        <TitleWrap>
          <TitleInput placeholder='제목을 입력하세요.'></TitleInput>
        </TitleWrap>
        <ContentWrap>
          <ContentInput placeholder='내용을 입력하세요.'></ContentInput>
        </ContentWrap>
        <BtnWrap>
          <Btn>입력</Btn>
        </BtnWrap>
      </BottomWrap>
      {/* 여기 까지 하단           */}
    </MainWrap>
  );
}
