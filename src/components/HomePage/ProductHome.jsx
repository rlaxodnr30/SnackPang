import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function ProductHome({ r, clickSnacks, setClickSnacks, key }) {
  const navigate = useNavigate();
  return (
    <SnackCard key={r.id} id={r.id}>
      <ProducImg
        onClick={(e) => {
          navigate(`/detail/${r.id}`);
          if (r.image === e.target.src) {
            return setClickSnacks({
              id: r.id,
              name: r.name,
              image: r.image,
              price: r.price,
            });
          }
          console.log("stateSnack :", clickSnacks);
          // setHomeSnackUrl(e.target.src);
        }}
        src={r.image}
      />
      <SnackName>상품명:{r.name}</SnackName>
      <SnackPrice>판매가:{r.price}원</SnackPrice>
    </SnackCard>
  );
}

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
