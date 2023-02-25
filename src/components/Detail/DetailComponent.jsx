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
  deleteDoc,
  doc,
  getDocs,
  limit,
  onSnapshot,
  orderBy,
  query,
  startAfter,
  updateDoc,
} from "firebase/firestore";
import { useNavigate, useParams } from "react-router-dom";

import styled from "styled-components";
import DetailReview from "./DetailReview";
import { async } from "@firebase/util";
export default function DetailComponent({
  userNick,
  homeSnackUrl,
  clickSnacks,
  setCartCount,
}) {
  const [count, setCount] = useState(1);
  const [reviewContent, setReviewContent] = useState("");
  const [reviewList, setReviewList] = useState([]);
  // const [reviewCount, setReviewCount] = useState(reviewCount)  리뷰개수
  const navigate = useNavigate();
  //현재날짜
  const dates = new window.Date();
  const year = dates.getFullYear();
  const month = ("0" + (dates.getMonth() + 1)).slice(-2);
  const day = ("0" + dates.getDate()).slice(-2);
  const dateStr = year + "-" + month + "-" + day;
  // 시간
  const hours = ("0" + dates.getHours()).slice(-2);
  const minutes = ("0" + dates.getMinutes()).slice(-2);
  const seconds = ("0" + dates.getSeconds()).slice(-2);
  const timeStr = hours + ":" + minutes + ":" + seconds;
  const today = dateStr + "  " + timeStr;
  // console.log(today);
  //
  const [snack, setSnack] = useState({});
  const [snacks, setSnacks] = useState([]);
  const [lastReview, setLastReview] = useState(null);

  const snckcollectionRef = collection(db, "product");
  const { id } = useParams();

  const loginUser = auth.currentUser;

  useEffect(() => {
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

    // 리스트에서 현재 페이지에 있는 과자의 정보만 빼야함
    // snack.filter(item => item.name === 현재페이지과자이름)
    // localhost:3000/detail/과자아이디
  }, []);

  useEffect(() => {
    const findSnack = snacks.find((item) => {
      return item.id === id;
    });

    setSnack(findSnack);

    // filter => [ {과자정보} ]
    // find => { 과자정보 }
  }, [snacks]);

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

      // // // 반복문이랑 똑같음.
      cartData.docs.forEach((doc) => {
        if (
          clickSnacks.name === doc.data().name &&
          auth.currentUser.uid === doc.data().userId
        ) {
          incartProduct = true;
          incartProductId = doc.id;
          incartProductCount = doc.data().count;
          return;
        }
      });
      console.log("asd", incartProductId, incartProductCount.count);
      if (incartProduct === true) {
        // 이미 있는 애의 수량에서 추가할 수량을 더해주고
        const snackDocRef = doc(db, "cartProduct", incartProductId);
        await updateDoc(snackDocRef, {
          // ...snackDocRef,
          count: { ...count, count: incartProductCount.count + count }, //이미있는수를더함
        });
        alert("장바구니에 담겼습니다!");
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
    }
    setCartCount((prev) => prev + count);
  };
  //리뷰작성
  const addReivew = async () => {
    //로그인 유저가 아니면 리뷰작성 x alert 창이 뜸
    if (!loginUser) {
      alert("로그인이 필요합니다.");
      return;
    }
    if (reviewContent === "" || reviewContent.trim().length === 0) {
      alert("리뷰를 작성해주세요!");
      return;
    }
    // 저 userId로 firebase에서 찾아서 가져오는 거

    const goReview = await addDoc(collection(db, "userReview"), {
      content: reviewContent,
      userId: loginUser?.uid,
      userImage: loginUser?.photoURL,
      datenow: today,
      // time: window.Date.now(),
      // datenow: `${new window.Date().getFullYear()}-${
      //   new window.Date().getMonth() + 1
      // }-${new window.Date().getDate()} ${timeStr} `,
      displayName: loginUser?.displayName,
      snackName: clickSnacks?.name,
      imageUrl: clickSnacks?.image,
      userImg: loginUser?.photoURL,
    });
    alert("소중한 리뷰 감사합니다!");
  };
  // 데이터 리뷰가져오기
  useEffect(() => {
    const getReviews = async () => {
      const q = query(collection(db, "userReview"), orderBy("datenow", "desc"));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const review = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setReviewList(review);
      });
      return unsubscribe;
    };
    getReviews();
  }, []);

  // Test  *********** 페이지네이션 적용 !
  // const [testData, setTestData] = useState([]);
  // const [key, setKey] = useState(false);
  // const [noMore, setNomore] = useState(false);

  // useEffect(() => {
  //   const getFirstPage = async () => {
  //     const queryRef = query(
  //       collection(db, "userReview"),
  //       orderBy("datenow", "desc"),
  //       limit(4)
  //     );
  //     try {
  //       const snap = await getDocs(queryRef);
  //       const docsArray = snap.docs.map((doc) => ({
  //         id: doc.id,
  //         ...doc.data(),
  //       }));
  //       setTestData(docsArray);
  //       setKey(snap.docs[snap.docs.length - 1]);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   getFirstPage();
  // }, []);
  // console.log(testData);

  // const loadMore = async () => {
  //   const queryRef = query(
  //     collection(db, "userReview"),
  //     orderBy("datenow", "desc"),
  //     startAfter(key),
  //     limit(2)
  //   );
  //   try {
  //     const snap = await getDocs(queryRef);
  //     snap.empty === 0
  //       ? setNomore(true)
  //       : setKey(snap.docs[snap.docs.length - 1]);
  //     const docsArray = snap.docs.map((doc) => ({
  //       id: doc.id,
  //       ...doc.data(),
  //     }));
  //     setTestData([...testData, ...docsArray]);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  // **********************
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
            <img src={snack?.image} />
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
              {snack?.name}
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
              {snack?.price}
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
              TOTAL : {snack?.price} 원
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
              onClick={() => {
                inCartBtn();
              }}
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
              border: "1px solid ",
              borderRadius: "5px",
              padding: "5px",
              width: "800px",
              height: "500px",
              backgroundColor: "white",
              marginTop: "40px",
              overflowY: "scroll",
              overflow: "auto",
            }}
          >
            {/* 원래 testData 가 아니고 reviewList였음 밑에 reviewList={reviewList}였음 */}
            {reviewList.map((item, i) => {
              if (item.snackName === snack?.name) {
                return (
                  <DetailReview
                    userNick={userNick}
                    key={item.id}
                    id={item.id}
                    reviewList={reviewList}
                    item={item}
                    i={i}
                  />
                );
              }
            })}
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
            value={reviewContent}
          />
        </div>
        <div>
          <ReviewClickBtn
            onClick={() => {
              addReivew();
              setReviewContent("");
            }}
          >
            등록
          </ReviewClickBtn>
        </div>
        {/* -----------------------------------
        페이지네이션
        <div
          style={{
            width: "800px",
            border: "1px solid",
            height: "100px",
            overflowY: "auto",
          }}
        >
          {testData.map((item) => {
            return (
              <div key={item.id}>
                <h4>{item.displayName}</h4>
                <p>{item.content}</p>
              </div>
            );
          })}
          <button onClick={loadMore}>리뷰 더보기 ...</button>
        </div>
        ----------------------------------- */}
      </div>
    </MainWrap>
  );
}

//리뷰 창css
export const ReviewBigBox = styled.div`
  border-bottom: 1px solid lightgray;
  display: flex;
`;

export const UserProfileImgBox = styled.div`
  float: left;
  width: 40px;
  height: 40px;
  margin-right: 6px;
  border-radius: 50%;
  overflow: hidden;
`;
export const ProfileImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export const UserReviewName = styled.span`
  /* display: inline-block; */
  height: 16px;
  vertical-align: middle;
  font-size: 5px;
  font-weight: 700;
  color: #111;
  letter-spacing: 0;
`;
export const Date = styled.div`
  /* display: inline-block; */
  vertical-align: top;
  padding-top: 3px;
  font-size: 12px;
  color: #555;
`;
export const ProductName = styled.div`
  /* display: inline-block; */
  width: 100%;
  margin-top: 5px;
  font-size: 12px;
  color: #888;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
export const ContentBox = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;
export const Content = styled.span`
  margin-left: 10px;
  text-align: center;
  font-size: 15px;
`;
//

//등록버튼 //
export const ReviewClickBtn = styled.button`
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
export const DeleteModifybtn = styled.button`
  border: none;
  width: 80px;
  padding: 0px;
  background-color: #ffffff;
  cursor: pointer;
`;
