import React, { useContext, useEffect, useState } from "react";
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
import snackMain from "../../images/snackMain.mp4";
import styled from "styled-components";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";
import DetailComponent from "../Detail/DetailComponent.jsx";
import { ThemeContext } from "../../context/ThemeContext";
import Loding from "../Loding/Loding";

export default function Home({
  clickSnacks,
  setClickSnacks,
  loading,
  setLoading,
}) {
  const { isDark } = useContext(ThemeContext);
  const [showButton, setShowButton] = useState(false);
  const [snacks, setSnacks] = useState([]);
  // console.log("snacks :", snacks);
  const snckcollectionRef = collection(db, "product");
  const navigate = useNavigate();
  console.log(loading);

  const scrollTop = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const showButtonClick = () => {
      if (window.scrollY > 800) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    window.addEventListener("scroll", showButtonClick);
    return () => {
      window.removeEventListener("scroll", showButtonClick);
    };
  }, []);

  // 홈페이지에 있을때만 실행되는 것.
  useEffect(() => {
    setLoading(true);
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
    setLoading(false);
  }, []);
  return (
    <div>
      {loading ? <Loding /> : null}
      <div
        style={{
          backgroundColor: isDark ? "black" : "#d5d5d3",
          color: isDark ? "white" : "black",
        }}
      >
        <video
          style={{ width: "100%" }}
          src={snackMain}
          muted
          autoPlay
          loop
        ></video>
        <HomeImg
          style={{
            backgroundImage: "url(/backImg.jpg)",
          }}
        ></HomeImg>

        <ProducImgBox>
          {snacks.map((r) => {
            return (
              <SnackCard key={r.id} id={r.id}>
                <ProducImg
                  onClick={(e) => {
                    navigate(`/detail/${r.id}`);
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
                <SnackPrice>판매가:{r.price}원</SnackPrice>
              </SnackCard>
            );
          })}
          {showButton && (
            <StMoveTopButton onClick={scrollTop}>︿</StMoveTopButton>
          )}
        </ProducImgBox>
      </div>
    </div>
  );
}

export const HomeImg = styled.div`
  background-size: cover;
  width: 100%;
  height: 500px;
`;
const StMoveTopButton = styled.div`
  height: 60px;
  width: 60px;
  position: fixed;
  bottom: 150px;
  right: 100px;
  z-index: 1;
  border: none;
  outline: none;
  background: gray;
  color: white;
  cursor: pointer;
  border-radius: 30px;
  font-size: 18px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 800px) {
    display: none;
  }
`;
