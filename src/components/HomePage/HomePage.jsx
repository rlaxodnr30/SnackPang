import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
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
import snackMain from "../../images/snackMain.mp4";
import styled from "styled-components";
import { db } from "../../firebase";
import { collection, getDocs, limit, orderBy, query } from "firebase/firestore";
import DetailComponent from "../Detail/DetailComponent.jsx";
import { ThemeContext } from "../../context/ThemeContext";
import Loading from "../Loading/Loading";
import ProductHome from "./ProductHome";
import SimpleSlider from "./Slide";
import { useSelector } from "react-redux";

export default function Home({
  setCartCount,
  clickSnacks,
  setClickSnacks,
  loading,
  setLoading,
}) {
  const { isDark } = useContext(ThemeContext);
  const [showButton, setShowButton] = useState(false);
  const [inputVal, setInutVal] = useState("");
  const [snacks, setSnacks] = useState([]);
  const today = useSelector((state) => state.time);

  // console.log("snacks :", snacks);

  const snckcollectionRef = collection(db, "product");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInutVal(e.target.value);
  };
  // 과자 검색 기능 필터
  const searched = snacks.filter((item) => item.name.includes(inputVal));

  //스크롤 최상단으로 이동 스크롤
  const scrollTop = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };
  //스크롤 y값이 800보다 크면 생성
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
      {loading ? <Loading /> : null}
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
        >
          <SimpleSlider></SimpleSlider>
          {/* <HomeTextBox>
            <span style={{ fontSize: "24px", color: "beige" }}>
              평일 오후 4시까지 주문/결제된 건에 대하여 당일 배송!!
            </span>
            <br></br>
            <div style={{ marginTop: "60px" }}>
              <span style={{ fontSize: "20px" }}>
                발송량이 많아 오후 4시 이후 주문 건은 당일발송이 어려운 점 양해
                바랍니다. (단, 재고 및 주문폭주에 따라 발송이 지연될 수 있으며,
                이 경우 결제하신 순서대로 발송됩니다.) 발송 후 평균 1일 이내
                수령 가능하며, 송장번호로 위치추적이 가능합니다. 택배사의
                사정(제주도 및 도서산간지역 포함)에 따라 다소 지연될 수
                있습니다. 묶음배송의 경우 상품 별 출고지에 따라 묶음배송이
                불가하거나 별도로 발송될 수 있으며, 1~2일 발송이 지연될 수도
                있습니다. 서울/경기 지역의 경우 퀵발송이 가능(착불)하며,
                필요하신 경우 고객만족센터로 문의주세요.
              </span>
            </div>
          </HomeTextBox> */}
        </HomeImg>

        <SearchInputBox>
          <SearchInput
            placeholder="찾으시는 과자를 검색해주세요!"
            onChange={handleChange}
          />
          <BsSearch style={{ marginLeft: "10px" }} />
        </SearchInputBox>

        <ProducImgBox style={{ marginTop: "30px" }}>
          {searched.map((r) => {
            return (
              <ProductHome
                setCartCount={setCartCount}
                r={r}
                setClickSnacks={setClickSnacks}
                clickSnacks={clickSnacks}
                key={r.id}
              />
            );
          })}
        </ProducImgBox>

        <ProducImgBox style={{ marginTop: "30px" }}>
          {snacks.map((r) => {
            return (
              <ProductHome
                r={r}
                setClickSnacks={setClickSnacks}
                clickSnacks={clickSnacks}
                key={r.id}
              />
            );
          })}
        </ProducImgBox>
        {showButton && (
          <StMoveTopButton onClick={scrollTop}>︿</StMoveTopButton>
        )}
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
  &:hover {
    color: black;
  }
  @media screen and (max-width: 800px) {
    display: none;
  }
`;
export const HomeTextBox = styled.div`
  margin-left: 40px;
  font-weight: bold;
  width: 400px;
  height: 100%;
  padding-top: 50px;
  text-align: center;
  color: white;
`;
export const SearchInput = styled.input`
  border: none;
  width: 30%;
  height: 30px;
  border-radius: 15px;
  font-size: 16px;
  margin-left: 5px;
  &::placeholder {
    color: #93938c;
  }
  &:hover {
    background-color: beige;
  }

  &:focus {
    color: #363636;
    border: 1px solid gray;
    outline: none;
  }
`;
export const SearchInputBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
`;
