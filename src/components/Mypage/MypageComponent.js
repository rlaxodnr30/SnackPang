import styled from "styled-components";

export const ProfileBox = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const ProfileInput = styled.input`
  display: none;
`;
export const Profoleimg = styled.img``;
export const Label = styled.label``;

export const ProfileBoxDetail = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 40%;
  height: 600px;
  border-radius: 10px;
`;
export const ProfileName = styled.input`
  border: none;
  border-bottom: 1px solid gray;
  outline: none;
`;
export const ProfileNameBtn = styled.button`
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
