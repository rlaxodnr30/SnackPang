import React from 'react';
import { MainWrap, NameInput } from './AdminComponent';

export default function AdminComponent() {
  return (
    <MainWrap>
      <NameInput>
        <label htmlFor='name'>상품 이름</label>
        <input id='name'></input>
      </NameInput>
      <div>
        <label htmlFor='price'>상품 가격</label>
        <input id='price'></input>
      </div>
      <div>
        <label htmlFor='img'>상품 이미지</label>
        <input id='img' type='file'></input>
      </div>
    </MainWrap>
  );
}
