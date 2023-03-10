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
import { auth, db, storage } from "../../firebase";
import {
  deleteUser,
  onAuthStateChanged,
  updatePassword,
  updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { ThemeContext } from "../../context/ThemeContext";
import { useSelector } from "react-redux";
import {
  collection,
  doc,
  onSnapshot,
  query,
  updateDoc,
} from "firebase/firestore";

export default function MypageComponent({
  setUserImage,
  userImage,
  userNick,
  setUserNick,
}) {
  const { isDark } = useContext(ThemeContext);
  // console.log(isDark);
  const [imgFile, setImgFile] = useState("");
  const [userDocId, setUserDocId] = useState("");
  const imgRef = useRef();
  const navigate = useNavigate();
  const nickNameRef = useRef("");
  const passwordRef = useRef("");
  // console.log(auth.currentUser);
  const loginUser = auth.currentUser;

  const today = useSelector((state) => state.time);
  console.log("config", auth.currentUser);

  // console.log(userNick);
  // console.log("loginuser :", loginUser);
  // console.log(nickNameRef);

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
    await updateDoc(doc(db, "users", userDocId), {
      userImage: imgUrl,
    });
    setUserImage(imgUrl);
    // imgUrl.current = { url: imgUrl };
  };
  useEffect(() => {
    const q = query(collection(db, "users"));
    console.log("Q: ", q);
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const userList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      const current = userList.find(
        (item) => item.userUid === auth.currentUser.uid
      );
      console.log("current:", current);
      setUserDocId(current.id);
    });
    // console.log("list: ", userList)
    // const ref = doc(db, "users", "userUid");
    // console.log("ref", ref);
  }, []);
  console.log(auth.currentUser);
  const profileChangeBtn = async (e) => {
    console.log(e);
    await updateProfile(auth.currentUser, {
      displayName: nickNameRef.current.value,
    });
    // setUserNick(displayName);
    // setUserNick(nickNameRef.current.value); // ????????? ??????????????? ?????????  ??????
    alert("???????????? ?????????????????????!");
    setUserNick(auth.currentUser.displayName); //state????????? ??????????????? ????????? ???????
    // await updateProfile(doc(db, "users"));
    await updateDoc(doc(db, "users", userDocId), {
      userDisplayName: nickNameRef.current.value,
    });
  };
  // console.log("asd", userNick);
  // console.log("dd :", auth.currentUser);
  const passwordChangeBtn = async () => {
    const user = auth.currentUser;
    const newPassword = passwordRef.current.value;
    try {
      await updatePassword(user, newPassword);
      alert("????????????");
    } catch {
      console.log(console.error());
    }
  };
  //?????? ??????
  const userDelete = async () => {
    const user = auth.currentUser;
    try {
      const userEmail = prompt("?????? ???????????? ??????????????????");
      if (userEmail === user.email) {
        await deleteUser(user);
        alert("????????? SnackPang??? ?????????????????? ??????????????????!!");
        navigate("/signin");
      } else {
        alert("???????????? ?????? ????????????!");
      }
    } catch {
      alert("????????? ???????????????!");
    }
  };
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
                // }""  "????????????"
                // src={!userImg ? loginUser?.photoURL : userImg}
                src={!userImage ? blankProfiles : userImage}
              />
              <ProfileInput
                ref={imgRef}
                accept="image/*"
                id="profile"
                type="file"
              />
            </Label>
            <ChangeImgBtn onClick={saveImgFile}>????????? ?????? ??????</ChangeImgBtn>
            <h3>MY PROFILE</h3>
            <h3>?????????</h3>
            <p>{loginUser?.displayName}</p>
            {/* <p>{userNick}</p> */}
            <div>
              <ProfileName
                ref={nickNameRef}
                placeholder={loginUser?.displayName}
                type="text"
              />
              <ProfileNameBtn onClick={profileChangeBtn}>??????</ProfileNameBtn>
            </div>
            <h3>???????????? ??????</h3>
            <div>
              <ProfileName
                ref={passwordRef}
                placeholder="password .."
                type="password"
              />
              <ProfileNameBtn onClick={passwordChangeBtn}>??????</ProfileNameBtn>
            </div>
            <UserDelteBox>
              <UserDelteBtn onClick={userDelete}>????????????</UserDelteBtn>
            </UserDelteBox>
          </ProfileBoxDetail>
        </ProfileBox>
      </div>
    </>
  );
}

export const UserDelteBox = styled.div`
  margin-top: 20px;
`;
export const UserDelteBtn = styled.div`
  border: 1px solid black;
  color: black;
  background-color: white;
  border-radius: 5px;
  padding: 2px;
  cursor: pointer;
  &:hover {
    background-color: black;
    color: white;
    padding: 5px;
  }
`;

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
