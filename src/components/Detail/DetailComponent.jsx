import React, { useEffect, useState } from "react";
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
import { addDoc, collection, getDocs } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { async } from "@firebase/util";
export default function DetailComponent({ homeSnackUrl, clickSnacks }) {
  const [count, setCount] = useState(1);
  const [reviewContent, setReviewContent] = useState("");
  const [reviewList, setReviewList] = useState([]);
  const navigate = useNavigate();
  console.log("rev:", clickSnacks);
  console.log("revlist", reviewList.imgurl);
  const idx = reviewList.findIndex((item) => {
    return reviewList.imgurl === clickSnacks.image;
  });
  console.log("idx: ", idx);
  const loginUser = auth.currentUser;
  console.log("click:", clickSnacks);
  const inCartBtn = async () => {
    if (loginUser === null) {
      alert("로그인이 필요합니다");
      navigate("/signin");
    } else {
      const docRef = await addDoc(collection(db, "cartProduct"), {
        userId: loginUser.uid,
        id: uuidv4(),
        name: clickSnacks.name,
        price: clickSnacks.price,
        count: { count },
      });
      alert("장바구니에 담겼습니다!");
    }
  };
  const addReivew = async () => {
    const goReview = await addDoc(collection(db, "userReview"), {
      content: reviewContent,
      userId: loginUser.uid,
      date: new Date(),
      displayName: loginUser.displayName,
      imageUrl: clickSnacks.image,
    });
    alert("소중한 리뷰 감사합니다!");
  };

  getReview.docs.map(() => {
    return;
  });

  useEffect(() => {
    const getReviews = async () => {
      const getReview = await getDocs(collection(db, "userReview"));
      setReviewList(
        getReview.docs.map((doc) => ({
          id: doc.id,
          content: doc.data().content,
          date: doc.data().date,
          userId: doc.data().userId,
          displayName: doc.data().displayName,
          imgurl: clickSnacks.image,
        }))
      );
    };
    getReviews();
  }, []);

  return (
    <MainWrap>
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div>
            <img src={clickSnacks.image} />
          </div>
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
              backgroundColor: "white",
              marginTop: "40px",
            }}
          >
            <table style={{ width: "100%" }}>
              <thead>
                <tr>
                  <th>닉네임</th>
                  <th>리뷰내용</th>
                  <th>날짜</th>
                </tr>
              </thead>
              <tr>{}</tr>
            </table>
          </div>
        </div>
        <div>
          <input
            required
            placeholder="리뷰를 남겨주세요."
            style={{
              width: "1000px",
              height: "90px",
              fontSize: "50px",
              marginTop: "40px",
            }}
            onChange={(e) => {
              setReviewContent(e.target.value);
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
            onClick={addReivew}
          >
            등록
          </button>
        </div>
      </div>
    </MainWrap>
  );
}
