import React, { useState } from "react";
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
} from "./DetailComponent";
import { db, auth } from "../../firebase";
import { v4 as uuidv4 } from "uuid";
import { addDoc, collection } from "firebase/firestore";
export default function DetailComponent({ homeSnackUrl, clickSnacks }) {
  const [count, setCount] = useState(1);
  const loginUser = auth.currentUser;
  console.log("login:", clickSnacks);
  const inCartBtn = async () => {
    const docRef = await addDoc(collection(db, "cartProduct"), {
      userId: loginUser.uid,
      id: uuidv4(),
      name: clickSnacks.name,
      price: clickSnacks.price,
      count: { count },
    });
    alert("장바구니에 담겼습니다!");
  };
  return (
    <MainWrap>
      <div>
        <div style={{ display: "flex" }}>
          <img src={clickSnacks.image} />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: "45%",
              padding: "20px",
            }}
          >
            <span
              style={{ fontSize: "42px", fontWeight: "bold", margin: "20px" }}
            >
              {clickSnacks.name}
            </span>
            <span style={{ fontSize: "24px", fontWeight: "bold" }}>
              <button
                style={{
                  border: "none",
                  backgroundColor: "white",
                  cursor: "pointer",
                }}
                onClick={() => {
                  setCount((prev) => prev - 1);
                }}
              >
                -
              </button>
              수량
              <button
                style={{
                  border: "none",
                  backgroundColor: "white",
                  cursor: "pointer",
                }}
                onClick={() => {
                  setCount((prev) => prev + 1);
                }}
              >
                +
              </button>
            </span>
            <span style={{ fontSize: "24px", fontWeight: "bold" }}>
              {count}
            </span>
            <span
              style={{
                fontSize: "32px",
                fontWeight: "bold",
                borderBottom: "1px solid lightgray",
              }}
            >
              {clickSnacks.price}
            </span>
            <hr />
            <span style={{ fontSize: "20px" }}>구매제한</span>
            <span
              style={{
                borderBottom: "1px solid gray",
                margin: "20px",
                fontSize: "20px",
              }}
            >
              배송비 : 2500원 / 택배
            </span>
            <span
              style={{ fontSize: "42px", fontWeight: "bold", margin: "20px" }}
            >
              TOTAL : {clickSnacks.price} 원
            </span>
            <button
              style={{
                padding: "20px",
                width: "200px",
                color: "white",
                backgroundColor: "#ff5880",
                borderRadius: "10px",
                fontSize: "18px",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              바로구매
            </button>
            <button
              style={{
                padding: "20px",
                width: "200px",
                color: "white",
                backgroundColor: "#ff5880",
                borderRadius: "10px",
                fontSize: "18px",
                fontWeight: "bold",
                cursor: "pointer",
                marginTop: "10px",
              }}
              onClick={inCartBtn}
            >
              장바구니
            </button>
          </div>
        </div>
      </div>

      {/* 여기부터 리뷰박스 와 인풋 버튼 */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          marginTop: "20px",
        }}
      >
        <div
          style={{
            border: "none",
            borderBottom: "1px solid black",
            width: "95%",
            margin: "10px",
          }}
        />
        <div>
          <div
            style={{
              border: "1px solid green",
              width: "800px",
              height: "500px",
              backgroundColor: "#d3d3d3",
              marginTop: "40px",
            }}
          ></div>
        </div>
        <div>
          <input
            placeholder="리뷰를 남겨주세요."
            style={{
              width: "1000px",
              height: "90px",
              fontSize: "50px",
              marginTop: "40px",
            }}
          />
        </div>
        <div>
          <button
            style={{
              padding: "20px",
              width: "300px",
              borderRadius: "20px",
              marginTop: "40px",
              marginBottom: "40px",
              fontSize: "18px",
              color: "white",
              borderRadius: "10px",
              fontWeight: "bold",
              backgroundColor: "#ff5880",
              cursor: "pointer",
            }}
          >
            등록
          </button>
        </div>
      </div>
    </MainWrap>
  );
}
