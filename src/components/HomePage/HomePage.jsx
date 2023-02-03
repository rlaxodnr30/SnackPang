import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MainWrap, Carousel, CarouselInner } from './HomePage';
import Swing from '../../images/swingChip.jpg';
import Sun from '../../images/sunchip.png';
import Dodo from '../../images/Nacho.jpg';
import Banner from '../../images/Banner.png';
import styled from 'styled-components';
import { db } from '../../firebase';
import { collection, getDocs } from 'firebase/firestore';

export default function Home() {
  const [snacks, setSnacks] = useState([]);
  const snckcollectionRef = collection(db, 'product');
  const navigate = useNavigate();
  useEffect(() => {
    const getData = async () => {
      const data = await getDocs(snckcollectionRef);
      // console.log("data: ", data);
      // const snackData = [];
      // console.log(data);

      // data.forEach((doc) => {
      //   snackData.push({
      //     id: doc.data().id,
      //     name: doc.data().name,
      //     price: doc.data().price,
      //     image: doc.data().image,
      //   });
      // });
      // setSnacks(snackData);
      // console.log(data.data());
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
  }, []);
  return (
    <div>
      <div>
        <div>배너</div>
      </div>

      <ProducImgBox>
        {snacks.map((r) => {
          return (
            <SnackCard key={r.id} id={r.id}>
              <ProducImg
                onClick={() => {
                  navigate('/detail');
                }}
                src={r.image}
              />
              <SnackName>상품명:{r.name}</SnackName>
              <SnackPrice>판매가:{r.price}</SnackPrice>
              <button
                onClick={() => {
                  alert('담김요');
                }}
              >
                장바구니 +
              </button>
            </SnackCard>
          );
        })}
      </ProducImgBox>
    </div>
  );
}
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
