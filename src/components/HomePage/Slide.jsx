import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div>
        <Slider {...settings}>
          <HomeImg
            style={{
              backgroundImage: "url(/backImg.jpg)",
            }}
          >
            <HomeTextBox>
              <span style={{ fontSize: "24px", color: "beige" }}>
                평일 오후 4시까지 주문/결제된 건에 대하여 당일 배송!!
              </span>
              <br></br>
              <div style={{ marginTop: "60px" }}>
                <span style={{ fontSize: "20px" }}>
                  발송량이 많아 오후 4시 이후 주문 건은 당일발송이 어려운 점
                  양해 바랍니다. (단, 재고 및 주문폭주에 따라 발송이 지연될 수
                  있으며, 이 경우 결제하신 순서대로 발송됩니다.) 발송 후 평균
                  1일 이내 수령 가능하며, 송장번호로 위치추적이 가능합니다.
                  택배사의 사정(제주도 및 도서산간지역 포함)에 따라 다소 지연될
                  수 있습니다. 묶음배송의 경우 상품 별 출고지에 따라 묶음배송이
                  불가하거나 별도로 발송될 수 있으며, 1~2일 발송이 지연될 수도
                  있습니다. 서울/경기 지역의 경우 퀵발송이 가능(착불)하며,
                  필요하신 경우 고객만족센터로 문의주세요.
                </span>
              </div>
            </HomeTextBox>
          </HomeImg>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3></h3>
          </div>
        </Slider>
      </div>
    );
  }
}
export const HomeTextBox = styled.div`
  margin-left: 40px;
  font-weight: bold;
  width: 400px;
  height: 100%;
  padding-top: 50px;
  text-align: center;
  color: white;
`;

export const HomeImg = styled.div`
  background-size: cover;
  width: 100%;
  height: 500px;
`;
