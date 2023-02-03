import React, { useEffect, useState } from 'react';
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
              <ProducImg src={r.image} />
              <span>{r.name}</span>
              <span>{r.price}</span>
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
`;
export const ProducImgBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  border: 1px solid red;
  justify-content: space-around;
`;
export const SnackCard = styled.div`
  border: 1px solid black;
  padding: 50px;
  margin-bottom: 20px;
`;
export const SnackName = styled.span``;
