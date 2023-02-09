import React, { useContext, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import blankProfiles from "../../images/blankProfiles.png";
import {
  ProfileBox,
  ProfileInput,
  Profoleimg,
  Label,
  ProfileBoxDetail,
  ProfileName,
  ProfileNameBtn,
} from "./MypageComponent";
import { auth, storage } from "../../firebase";
import { onAuthStateChanged, updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { ThemeContext } from "../../context/ThemeContext";

export default function MypageComponent({
  setUserImg,
  userImg,
  userNick,
  setUserNick,
}) {
  const { isDark } = useContext(ThemeContext);
  console.log(isDark);
  const [imgFile, setImgFile] = useState("");
  const imgRef = useRef();
  const navigate = useNavigate();
  const nickNameRef = useRef("");
  // console.log(auth.currentUser);
  const loginUser = auth.currentUser;

  console.log("loginuser :", loginUser);
  // console.log(nickNameRef);

  useEffect(() => {
    console.log(auth);
  }, []);

  const saveImgFile = async () => {
    const file = imgRef.current.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = (finishedEvent) => {
      const imgDataUrl = finishedEvent.currentTarget.result;
      // localStorage.setItem("imgDataUrl", imgDataUrl);
      setImgFile(reader.result);
    };
    const storageRef = ref(
      storage,
      `/userProfile/${imgRef.current.files[0].name}`
    );
    // const imgDataUrl = localStorage.getItem("imgDataUrl");
    const uploadImg = await uploadBytes(storageRef, imgRef.current.files[0]);
    const imgUrl = await getDownloadURL(uploadImg.ref);
    console.log("ref:", uploadImg);
    console.log("uploadimg:", imgUrl);
    updateProfile(auth.currentUser, {
      photoURL: imgUrl,
    });
    setUserImg(imgUrl);
    // imgUrl.current = { url: imgUrl };
  };

  const profileChangeBtn = () => {
    updateProfile(auth.currentUser, {
      displayName: nickNameRef.current.value,
    });

    alert("닉네임이 변경되었습니다!");
  };
  console.log("dd :", auth.currentUser);

  return (
    <>
      <div
        style={{
          backgroundColor: isDark ? "black" : "white",
          color: isDark ? "white" : "black",
        }}
      >
        <ProfileBox>
          <ProfileBoxDetail>
            <Label htmlFor="profile">
              <Profoleimg
                // src={
                //   loginUser.photoURL === null
                //     ? blankProfiles
                //     : loginUser.photoURL
                // }""  "ㅏ하ㅘㅘ"
                // src={!userImg ? loginUser?.photoURL : userImg}
                src={!userImg ? blankProfiles : userImg}
              />
              <ProfileInput
                ref={imgRef}
                accept="image/*"
                id="profile"
                type="file"
              />
            </Label>
            <ChangeImgBtn onClick={saveImgFile}>이미지 변경 저장</ChangeImgBtn>
            <h3>MY PROFILE</h3>
            <p>{loginUser?.displayName}</p>
            <div>
              <ProfileName
                ref={nickNameRef}
                placeholder={loginUser?.displayName}
                type="text"
              />
              <ProfileNameBtn onClick={profileChangeBtn}>변경</ProfileNameBtn>
            </div>
          </ProfileBoxDetail>
        </ProfileBox>
      </div>
    </>
  );
}

export const ChangeImgBtn = styled.button`
  background-color: white;
  border-radius: 5px;
  border: 1px solid black;
  transition: 0.5s;
  &:hover {
    background: #de4c2a;
    color: white;
    transition: 0.5s;
  }
  cursor: pointer;
`;
