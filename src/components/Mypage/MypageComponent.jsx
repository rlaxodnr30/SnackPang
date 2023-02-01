import React from "react";
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

export default function MypageComponent() {
  return (
    <>
      <div>
        <ProfileBox>
          <ProfileBoxDetail>
            <Label htmlFor="profile">
              <Profoleimg src={blankProfiles} />
              <ProfileInput accept="image/*" id="profile" type="file" />
            </Label>
            <h3>MY PROFILE</h3>
            <p>닉네임</p>
            <div>
              <ProfileName placeholder="닉네임" type="text" />
              <ProfileNameBtn>변경</ProfileNameBtn>
            </div>
          </ProfileBoxDetail>
        </ProfileBox>
      </div>
    </>
  );
}
