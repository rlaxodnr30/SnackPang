import React from "react";
import styled from "styled-components";
import ShoppingText from "../../images/ShoppingText.png";
import {
  ShoppingImgBox,
  CartList,
  Table,
  Thead,
  Tbody,
} from "./CartPageComponent";
export default function CartPageComponent() {
  return (
    <>
      <div>
        <ShoppingImgBox>
          <img src={ShoppingText} />
          <hr />
        </ShoppingImgBox>

        <h4>장바구니 담긴상품</h4>
        <CartList>
          <Table>
            <Thead>
              <tr>
                <th>#</th>
                <th>상품명</th>
                <th>이미지</th>
                <th>수량</th>
                <th>가격</th>
              </tr>
            </Thead>
            <Tbody>
              <tr>
                <td>1</td>
                <td>스윙칩</td>
                <td>이미지</td>
                <td>2</td>
                <td>1,300</td>
              </tr>
            </Tbody>
          </Table>
        </CartList>
      </div>
    </>
  );
}
