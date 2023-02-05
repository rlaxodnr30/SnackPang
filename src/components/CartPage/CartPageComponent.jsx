import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ShoppingText from "../../images/ShoppingText.png";
import {
  ShoppingImgBox,
  CartList,
  Table,
  Thead,
  Tbody,
  CartBox,
} from "./CartPageComponent";
import { db, auth } from "../../firebase";
import { collection, doc, getDocs, query, where } from "firebase/firestore";

export default function CartPageComponent() {
  const [userCartProduct, setUserCartProduct] = useState([]);
  console.log("usercart:", userCartProduct);
  const loginUser = auth.currentUser;
  useEffect(() => {
    const cartProduct = async () => {
      const cartData = await getDocs(collection(db, "cartProduct"));

      setUserCartProduct(
        cartData.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().name,
          price: doc.data().price,
          count: doc.data().count,
          userId: doc.data().userId,
        }))
      );
    };
    cartProduct();
  }, []);
  // console.log(loginUser.uid);
  return (
    <>
      <CartBox>
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
                <th>수량</th>
                <th>가격</th>
                <th>비고</th>
              </tr>
            </Thead>
            <Tbody>
              {userCartProduct.map((item, i) => {
                if (item.userId === loginUser.uid) {
                  return (
                    <tr key={item.id}>
                      <td>{i}</td>
                      <td>{item.name}</td>
                      <td>{item.count.count}</td>
                      <td>{item.price * item.count.count}원</td>
                    </tr>
                  );
                }
              })}
              {/* <tr>
                <td>1</td>
                <td>스윙칩</td>
                <td>이미지</td>
                <td>2</td>
                <td>1,300</td>
              </tr> */}
            </Tbody>
          </Table>
        </CartList>
      </CartBox>
    </>
  );
}
