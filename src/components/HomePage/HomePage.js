import styled from "styled-components";
import Swing from "../../images/swingChip.jpg";
import Sun from "../../images/sunchip.png";
import Dodo from "../../images/Nacho.jpg";
import Banner from "../../images/Banner.png";

export const MainWrap = styled.div`
  display: flex;
  overflow: hidden;
`;
export const SnacksImg = styled.img`
  width: 300px;
  height: 300px;
`;
export const ProducImg = styled.img`
  width: 100px;
  height: 100px;
  cursor: pointer;
`;
export const ProducImgBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;
export const SnackCard = styled.div`
  border: 1px solid #cfb2ac;
  padding: 20px;
  margin-bottom: 20px;
  width: 23%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  background-color: #d3d3d1;
`;
export const SnackName = styled.span`
  font-weight: 800;
  margin-top: 10px;
`;
export const SnackPrice = styled.span`
  color: #ffa125;
  font-weight: 500;
  margin-top: 10px;
`;
export const HomeImg = styled.div`
  background-size: cover;
  width: 100%;
  height: 500px;
`;
export const StMoveTopButton = styled.div`
  height: 60px;
  width: 60px;
  position: fixed;
  bottom: 150px;
  right: 100px;
  z-index: 1;
  border: none;
  outline: none;
  background: gray;
  color: white;
  cursor: pointer;
  border-radius: 30px;
  font-size: 18px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    color: black;
  }
  @media screen and (max-width: 800px) {
    display: none;
  }
`;
export const HomeTextBox = styled.div`
  margin-left: 40px;
  font-weight: bold;
  width: 400px;
  height: 100%;
  padding-top: 50px;
  text-align: center;
  color: white;
`;
export const SearchInput = styled.input`
  border: none;
  width: 30%;
  height: 30px;
  border-radius: 15px;
  font-size: 16px;
  margin-left: 5px;
  &::placeholder {
    color: #93938c;
  }
  &:hover {
    background-color: beige;
  }

  &:focus {
    color: #363636;
    border: 1px solid gray;
    outline: none;
  }
`;
export const SearchInputBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
`;
