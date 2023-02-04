import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  MainWrap,
  Carousel,
  CarouselInner,
  SnacksImg,
  ProducImg,
  ProducImgBox,
  SnackCard,
  SnackName,
  SnackPrice,
} from "./HomePage";
import Swing from "../../images/swingChip.jpg";
import Sun from "../../images/sunchip.png";
import Dodo from "../../images/Nacho.jpg";
import Banner from "../../images/Banner.png";
import styled from "styled-components";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";
import DetailComponent from "../Detail/DetailComponent.jsx";

export default function Home({ clickSnacks, setClickSnacks }) {
  // console.log(clickSnacks);
  const [snacks, setSnacks] = useState([]);
  // console.log("snacks :", snacks);
  const snckcollectionRef = collection(db, "product");
  const navigate = useNavigate();
  useEffect(() => {
    const getData = async () => {
      const data = await getDocs(snckcollectionRef);
      // console.log("data: ", data);
      // const snackData = [];
      // console.log(data);

      // data.forEach((doc) => {
      //   snackData.push({
      //     id: doc.data().id,
      //     name: doc.data().name,
      //     price: doc.data().price,
      //     image: doc.data().image,
      //   });
      // });
      // setSnacks(snackData);
      // console.log(data.data());
      setSnacks(
        data.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().name,
          price: doc.data().price,
          image: doc.data().image,
        }))
      );
    };
    getData();
  }, []);
  return (
    <div>
      <Window>
        <FlexBox>
          <ImgDiv
            style={{
              backgroundImage: `url('https://firebasestorage.googleapis.com/v0/b/pro2-45859.appspot.com/o/SnackPang%2Fss.jpg?alt=media&token=73e68be0-de19-4b0c-a803-66a0758d5110')`,
            }}
          ></ImgDiv>
          <ImgDiv
            style={{
              backgroundImage: `url('https://firebasestorage.googleapis.com/v0/b/pro2-45859.appspot.com/o/SnackPang%2FNacho.jpg?alt=media&token=cb3b1dc1-c921-4f63-a232-5e32c8bc5b5f')`,
            }}
          ></ImgDiv>
          <ImgDiv
            style={{
              backgroundImage: `url('https://firebasestorage.googleapis.com/v0/b/pro2-45859.appspot.com/o/SnackPang%2Fsunchip.png?alt=media&token=e3aad0b4-2c27-46f6-a961-3fa20a9da7b9')`,
            }}
          ></ImgDiv>
        </FlexBox>
      </Window>

      <ProducImgBox>
        {snacks.map((r) => {
          return (
            <SnackCard key={r.id} id={r.id}>
              <ProducImg
                onClick={(e) => {
                  navigate("/detail");
                  if (r.image === e.target.src) {
                    return setClickSnacks({
                      id: r.id,
                      name: r.name,
                      image: r.image,
                      price: r.price,
                    });
                  }
                  console.log("stateSnack :", clickSnacks);
                  // setHomeSnackUrl(e.target.src);
                }}
                src={r.image}
              />
              <SnackName>상품명:{r.name}</SnackName>
              <SnackPrice>판매가:{r.price}</SnackPrice>
            </SnackCard>
          );
        })}
      </ProducImgBox>
    </div>
  );
}
export const Window = styled.div`
  background: coral;
  width: 350px;
  height: 250px;

  overflow: hidden;
`;
export const FlexBox = styled.div`
  display: flex;
`;
export const ImgDiv = styled.div`
  width: 350px;
  height: 250px;
  background-position: 50% 50%; //이미지를 중앙 위치하게 해준다!
  background-size: contain; // 컨테인 크기에 맞춰서 이미지가  나옴 나머지 부분은 이미지가 반복되면서 짤려서 나온다
  background-repeat: no-repeat; //반복하는 이미지를 안나오게하고 원래 배경이 나오게 해준다!
  flex: none; //flex: 0 0 auto 동일하며 컨테이너의 크기에 관계 없다 // 기본값으로 하면 작은 창안에 사진들이 욱여넣어진다!
`;
