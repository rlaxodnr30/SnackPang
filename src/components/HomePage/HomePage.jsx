import React from 'react';
import { MainWrap, Carousel, CarouselInner } from './HomePage';
import Swing from '../../images/swingChip.jpg';
import Sun from '../../images/sunchip.png';
import Dodo from '../../images/Nacho.jpg';
import Banner from '../../images/Banner.png';
import styled from 'styled-components';

export default function Home() {
  return (
    <div>
      <div>
        <div>배너</div>
      </div>
      <div>
        <div>상품</div>
      </div>
    </div>
  );
}
export const SnacksImg = styled.img`
  width: 300px;
  height: 300px;
`;
