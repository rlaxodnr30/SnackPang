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
  border: 1px solid #df4c2c;
  padding: 20px;
  margin-bottom: 20px;
  width: 23%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
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
