import styled from "styled-components";

export const SignUpBox = styled.div`
  width: 100%;
  height: 100;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const SignInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 60%;
  height: 600px;
  margin-top: 150px;
  border-radius: 20px;
  margin-bottom: 150px;
  border: 1px solid;
`;

export const InputTitle = styled.div`
  font-size: 14px;
  margin-top: 30px;
  font-weight: 700;
  width: 100%;
`;

export const InputempwBox = styled.div`
  width: 100%;
`;

export const Inputempw = styled.input`
  border: none;
  border-bottom: 1px solid gray;
  margin-top: 5px;
  width: 300px;
  outline: none;
`;

export const ButtonBox = styled.div`
  margin-top: 40px;
  width: 300px;
`;
export const ButtonSign = styled.button`
  border: none;
  height: 40px;
  border-radius: 50px;
  width: 300px;
  text-align: center;
  font-weight: bold;
  transition: 0.5s;
  &:hover {
    background: #de4c2a;
    color: white;
    transition: 0.5s;
  }
  cursor: pointer;
`;
//소셜로그인
export const ButtonSocial = styled.button`
  border: none;
  height: 40px;
  border-radius: 50px;
  width: 300px;
  text-align: center;
  font-size: bold;
  background-color: transparent;
  border: 1px solid black;
  font-weight: bold;
  cursor: pointer;
`;

export const SocialBtnBox = styled.div`
  margin-top: 20px;
  width: 300px;
`;

export const SocialIcon = styled.img`
  width: 18px;
  height: 18px;
  margin-right: 10px;
`;
//체크박스
export const CheckAll = styled.div`
  border-bottom: 1px solid lightgray;
  padding-bottom: 10px;
`;
export const CheckList = styled.div`
  margin-top: 10px;
`;
export const Text = styled.div`
  margin-top: 4px;
  font-size: 10px;
  color: red;
`;
export const H4 = styled.h4``;

export const AgreeBox = styled.div`
  width: 300px;
`;

export const CheckBoxText = styled.span`
  color: #3ea5f5;
`;
export const CheckBoxTextCho = styled.span`
  color: #c2c3c7;
`;
export const CheckLabel = styled.label`
  font-size: 15px;
  text-align: center;
`;
export const CheckLabelAll = styled.label`
  font-size: 15px;
  text-align: center;
  font-weight: bold;
`;
