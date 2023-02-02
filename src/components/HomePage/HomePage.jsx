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
      console.log(data);
      const snackData = [];

      data.forEach((doc) => {
        snackData.push({
          id: doc.id,
          name: doc.data().name,
          price: doc.data().price,
          image: doc.data().image,
        });
      });
      setSnacks(snackData);
      // console.log(data.data());
      // setSnacks(
      //   data.docs.map((doc) => ({
      //     id: doc.id,
      //     name: doc.data().name,
      //     price: doc.data().price,
      //     image: doc.data().image,
      //   }))
      // );
    };
    getData();
    console.log(snacks);
  }, []);
  return (
    <div>
      <div>
        <div>배너</div>
      </div>
      <div>
        <div>
          {snacks.map((r) => {
            return (
              <div id={r.id}>
                <p>{r.name}</p>
                <p>{r.price}</p>
                <img src={r.image} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export const SnacksImg = styled.img`
  width: 300px;
  height: 300px;
`;
