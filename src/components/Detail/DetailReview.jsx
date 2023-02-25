import React from "react";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { FiMoreVertical } from "react-icons/fi";
import { db, auth } from "../../firebase";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import blankProfiles from "../../images/blankProfiles.png";
export default function DetailReview({
  item,
  i,
  reviewList,
  id,
  setTestData,
  userNick,
}) {
  const [editBox, setEditBox] = useState(false);
  const [editVal, setEditVal] = useState("");
  const [toggle, setToggle] = useState(false);
  const loginUser = auth.currentUser;
  console.log("item", item.displayName);
  console.log("user", userNick);
  //삭제버튼 함수
  const handledelete = async (id, i) => {
    await deleteDoc(doc(db, "userReview", id));
  };
  //수정버튼 함수
  const modifyBtn = async (id, i) => {
    const modifyRef = doc(db, "userReview", id);
    await updateDoc(modifyRef, {
      content: editVal,
    });
  };

  return (
    <ReviewBigBox>
      <div style={{ width: "150px" }}>
        <UserProfileImgBox>
          {/* <ProfileImg src={item?.userImage} /> */}
          <ProfileImg src={item.userImage ? item?.userImage : blankProfiles} />
        </UserProfileImgBox>
        <div>
          <UserReviewName>{item?.displayName}</UserReviewName>
        </div>
        <Date>{item?.datenow}</Date>
        <ProductName>{item.snackName}</ProductName>
      </div>
      <ContentBox>
        {editBox ? (
          <input
            style={{
              border: "1px solid red",
              width: "60%",
              height: "20px",
              borderRadius: "10px",
            }}
            placeholder={item.content}
            value={editVal}
            onChange={(e) => {
              setEditVal(e.target.value);
            }}
          />
        ) : (
          <Content>{item.content}</Content>
        )}
        {/* <Content>{item.content}</Content> */}
      </ContentBox>
      {toggle === true && loginUser?.uid === item.userId ? (
        <DeleteModifybtn
          onClick={() => {
            if (loginUser?.uid === item.userId) {
              handledelete(item.id, i);
              alert("리뷰가 삭제 되었습니다!");
            }
          }}
        >
          삭제
        </DeleteModifybtn>
      ) : null}

      {toggle === true && loginUser?.uid === item.userId ? (
        <>
          <Modifybtn
            onClick={() => {
              modifyBtn(item.id, i);
              setEditBox(!editBox);
            }}
          >
            {editBox ? "수정완료" : "수정"}
          </Modifybtn>{" "}
          <FiMoreVertical
            onClick={() => {
              return setToggle(!toggle);
            }}
            style={{ cursor: "pointer" }}
          />
        </>
      ) : (
        <FiMoreVertical
          style={{ cursor: "pointer" }}
          onClick={() => {
            setToggle(!toggle);
          }}
        />
      )}
    </ReviewBigBox>
  );
}

export const ReviewBigBox = styled.div`
  border-bottom: 1px solid lightgray;
  display: flex;
  margin-top: 5px;
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
  font-size: 8px;
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
  height: 50px;
  padding: 0px;
  border-radius: 10px;
  background-color: #ffffff;
  &:hover {
    background: #de4c2a;
    color: white;
    transition: 0.5s;
  }
  cursor: pointer;
`;
export const Modifybtn = styled.button`
  border: none;
  width: 80px;
  height: 50px;
  padding: 0px;
  border-radius: 10px;
  background-color: #ffffff;
  &:hover {
    background: #de4c2a;
    color: white;
    transition: 0.5s;
  }
  cursor: pointer;
`;
