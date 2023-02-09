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
import {
  addDoc,
  collection,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import ms from "../../images/ms.jpg";
import styled from "styled-components";
export default function DetailComponent({ homeSnackUrl, clickSnacks }) {
  const [count, setCount] = useState(1);
  const [reviewContent, setReviewContent] = useState("");
  const [reviewList, setReviewList] = useState([]);
  const navigate = useNavigate();
  // console.log("rev:", clickSnacks);
  console.log("user:", auth.currentUser);
  const loginUser = auth.currentUser;
  console.log("click:", clickSnacks);
  console.log("revList:", reviewList);

  // const snackDoc = doc(db, 'cartProduct')

  const inCartBtn = async () => {
    if (loginUser === null) {
      alert("로그인이 필요합니다");
      navigate("/signin");
    } else {
      const cartData = await getDocs(collection(db, "cartProduct"));
      // 장바구니에 추가한다.
      // 예를 들어서 썬칩을 추가한다.
      // 기존에 장바구니에 썬칩이 있는지 없는지 확인을 한다. (x)
      // 만약 썬칩이 없다면, 그냥 썬칩을 추가하면 된다. (x)
      // 만약 이미 장바구니에 썬칩이 있다면, 그 썬칩의 개수에 추가할 개수만 더한다.
      let incartProduct = false; // 이미 장바구니에있다는걸 표시
      let incartProductId = null; // 이미장바구니에 있는과자아이디 표시
      let incartProductCount = 0; // 이미장바구니에있는과자수량

      // 반복문이랑 똑같음.
      cartData.docs.forEach((doc) => {
        if (clickSnacks.name === doc.data().name) {
          console.log(clickSnacks.name, doc.data().name);
          incartProduct = true;
          incartProductId = doc.id;
          incartProductCount = doc.data().count;
          return;
        }
      });

      if (incartProduct === true) {
        // 이미 있는 애의 수량에서 추가할 수량을 더해주고
        // const snackDocRef = doc(db, "id", 이미장바구니에있는과자아이디);

        // await updateDoc(snackDocRef, {
        //   ...snackDocRef,
        //   count: count + 이미장바구니에있는과자수량,
        // });
        alert("이미 장바구니에 있습니다!");
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
      // console.log("id : ", doc.id);
      // console.log("name : ", doc.data().name);
      // console.log("price : ", doc.data().price);
      // console.log("count : ", doc.data().count);
      // console.log("userId : ", doc.data().userId);

      console.log(cartData);
    }
  };
  const addReivew = async () => {
    const goReview = await addDoc(collection(db, "userReview"), {
      content: reviewContent,
      userId: loginUser.uid,
      date: new Date(),
      displayName: loginUser.displayName,
      snackName: clickSnacks.name,
      imageUrl: clickSnacks.image,
      userImg: loginUser.photoURL,
    });
    alert("소중한 리뷰 감사합니다!");
    navigate("/");
  };

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
          snackName: doc.data().snackName,
          userImg: doc.data().userImg,
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
                  if (count > 1) {
                    setCount((prev) => prev - 1);
                  }
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
          <h2>상품리뷰</h2>
          <div
            style={{
              border: "1px solid gray",
              borderRadius: "5px",
              padding: "5px",
              width: "800px",
              height: "500px",
              backgroundColor: "white",
              marginTop: "40px",
            }}
          >
            {reviewList.map((item) => {
              if (item.snackName === clickSnacks.name) {
                return (
                  <ReviewBigBox>
                    <div style={{ width: "150px" }}>
                      <UserProfileImgBox>
                        <ProfileImg src={loginUser.photoURL} />
                      </UserProfileImgBox>
                      <div>
                        <UserReviewName>{loginUser.displayName}</UserReviewName>
                      </div>
                      <Date>2023.02.09</Date>
                      <ProductName>{item.snackName}</ProductName>
                    </div>
                    <ContentBox>
                      <Content>{item.content}</Content>
                    </ContentBox>
                  </ReviewBigBox>
                );
              }
            })}

            {/* <table style={{ width: "100%" }}>
              <thead>
                <tr>
                  <th>닉네임</th>
                  <th>리뷰내용</th>
                  <th>날짜</th>
                </tr>
              </thead>
              <tr>
                {reviewList.map((item) => {
                  if (item.snackName === clickSnacks.name) {
                    return (
                      <>
                        <img
                          style={{
                            width: "40",
                            height: "40px",
                          }}
                          src={item.userImg}
                        />
                        <td>{item.displayName}</td>
                        <td>{item.content}</td>
                      </>
                    );
                  }
                })}
              </tr>
            </table> */}
          </div>
        </div>
        <h3>상품리뷰작성</h3>
        <div>
          <input
            required
            placeholder="리뷰를 남겨주세요."
            style={{
              width: "800px",
              height: "50px",
              fontSize: "18px",
              marginTop: "10px",
            }}
            onChange={(e) => {
              setReviewContent(e.target.value);
            }}
          />
        </div>
        <div>
          <ReviewClickBtn onClick={addReivew}>등록</ReviewClickBtn>
        </div>
      </div>
    </MainWrap>
  );
}

//리뷰 창css
const ReviewBigBox = styled.div`
  border-bottom: 1px solid lightgray;
  display: flex;
`;

const UserProfileImgBox = styled.div`
  float: left;
  width: 40px;
  height: 40px;
  margin-right: 6px;
  border-radius: 50%;
  overflow: hidden;
`;
const ProfileImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const UserReviewName = styled.span`
  /* display: inline-block; */
  height: 16px;
  vertical-align: middle;
  font-size: 5px;
  font-weight: 700;
  color: #111;
  letter-spacing: 0;
`;
const Date = styled.div`
  /* display: inline-block; */
  vertical-align: top;
  padding-top: 3px;
  font-size: 12px;
  color: #555;
`;
const ProductName = styled.div`
  /* display: inline-block; */
  width: 100%;
  margin-top: 5px;
  font-size: 12px;
  color: #888;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
const ContentBox = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;
const Content = styled.span`
  margin-left: 10px;
  text-align: center;
  font-size: 15px;
`;
//

//등록버튼 //
const ReviewClickBtn = styled.button`
  padding: 20px;
  width: 300px;
  border-radius: 20px;
  margin-top: 40px;
  margin-bottom: 40px;
  font-size: 18px;
  color: white;
  border-radius: 10px;
  font-weight: bold;
  background-color: #ff5880;
  cursor: pointer;
`;
