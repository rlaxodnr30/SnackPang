import React, { useRef, useState } from 'react';
import { MainWrap, NameInput } from './AdminComponent';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import { storage } from '../../firebase';
import { getDownloadURL } from 'firebase/storage';
import { ref, uploadBytes } from 'firebase/storage';
import { v4 as uuidv4 } from 'uuid';
import sun from '../../images/sunchip.png';
export default function AdminComponent() {
  const nameRef = useRef(null);
  const priceRef = useRef(null);
  const imgRef = useRef(null);
  const imgRefUrl = useRef(null);
  // const [imgVal, setImgval] = useState(null);

  const addProduct = async () => {
    // console.log(
    //   nameRef.current.value,
    //   priceRef.current.value,
    //   imgRef.current.value
    // );

    const docRef = await addDoc(collection(db, 'product'), {
      id: uuidv4(),
      name: nameRef.current.value,
      price: priceRef.current.value,
      image: imgRefUrl.current?.url,
    });
  };

  const uploadIm = async () => {
    console.log(imgRef.current.files);
    const uploadFile = await uploadBytes(
      ref(storage, `/SnackPang/${imgRef.current.files[0].name}`),
      imgRef.current.files[0]
    );
    console.log(uploadFile);
    const imgUrl = await getDownloadURL(uploadFile.ref);
    console.log(imgUrl);
    imgRefUrl.current = { url: imgUrl };
  };

  return (
    <MainWrap>
      <NameInput>
        <label htmlFor='name'>상품 이름</label>
        <input ref={nameRef} id='name'></input>
      </NameInput>
      <div>
        <label htmlFor='price'>상품 가격</label>
        <input ref={priceRef} type='number' id='price'></input>
      </div>
      <div>
        <label htmlFor='img'>상품 이미지</label>
        <input onChange={uploadIm} ref={imgRef} id='img' type='file'></input>
      </div>
      <button onClick={addProduct}> 상품 등록하기 </button>
    </MainWrap>
  );
}
