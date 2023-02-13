import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { BsTrash } from "react-icons/bs";

import ShoppingText1 from "../../images/ShoppingText.png";
import {
  ShoppingImgBox,
  CartList,
  Table,
  Thead,
  Tbody,
  CartBox,
  BuyButton,
} from "./CartPageComponent";
import { db, auth } from "../../firebase";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { ThemeContext } from "../../context/ThemeContext";

export default function CartPageComponent() {
  const { isDark } = useContext(ThemeContext);
  const [userCartProduct, setUserCartProduct] = useState([]);
  console.log("usercart:", userCartProduct);
  const loginUser = auth.currentUser;
  console.log(loginUser);
  console.log(userCartProduct.userId);
  console.log(loginUser.uid);
  // let sum = userCartProduct.total.reduce((acc, cur,i) => {
  //   return acc[i] + cur[i];
  // }, 0);

  // let sum = [0, 1, 2, 3].reduce(function (accumulator, currentValue) {
  //   return accumulator + currentValue;
  // }, 0);

  const total = userCartProduct.map((item) => {
    return item.totalPrice;
  });
  const totalCount = userCartProduct.map((item) => {
    return item.count.count;
  });

  console.log(total);
  useEffect(() => {
    const cartProduct = async () => {
      const q = query(collection(db, "cartProduct"));
      const cartSnap = onSnapshot(q, (querySnapshot) => {
        const cartList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().name,
          price: doc.data().price,
          count: doc.data().count,
          userId: doc.data().userId,
          totalPrice: Number(doc.data().price) * doc.data().count.count,
        }));
        setUserCartProduct(cartList);
      });
      return cartSnap;
      // const cartData = await getDocs(collection(db, "cartProduct"));
      // setUserCartProduct(
      //   cartData.docs.map((doc) => ({
      //     id: doc.id,
      //     name: doc.data().name,
      //     price: doc.data().price,
      //     count: doc.data().count,
      //     userId: doc.data().userId,
      //     totalPrice: Number(doc.data().price) * doc.data().count.count,
      //   }))
      // );
    };
    cartProduct();
  }, []);
  console.log("total!", userCartProduct);

  const handleCartDelete = async (id) => {
    await deleteDoc(doc(db, "cartProduct", id));
  };
  return (
    <>
      <CartBox
        style={{
          backgroundColor: isDark ? "black" : "white",
          color: isDark ? "white" : "black",
        }}
      >
        <ShoppingImgBox>
          <img src={ShoppingText1} />
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
                      <td>
                        <DeleteBtn
                          onClick={() => {
                            handleCartDelete(item.id);
                            alert("삭제완료");
                          }}
                        >
                          <BsTrash />
                        </DeleteBtn>
                      </td>
                    </tr>
                  );
                }
              })}
            </Tbody>
            <tfoot style={{ backgroundColor: "#14FF8A" }}>
              <tr>
                <th>최종</th>
                <th>총 수량:</th>
                <th>
                  {totalCount.reduce((acc, cur, i) => {
                    return acc + cur;
                  }, 0)}{" "}
                  개
                </th>
                <th>주문합계:</th>
                <th>
                  {total.reduce((acc, cur, i) => {
                    // if (userCartProduct[i].userId === loginUser.uid)
                    return acc + cur;
                  }, 0)}
                  원
                </th>
              </tr>
            </tfoot>
          </Table>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <BuyButton>구매하기</BuyButton>
          </div>
        </CartList>
      </CartBox>
    </>
  );
}

export const DeleteBtn = styled.button`
  border: none;
  background-color: white;
  cursor: pointer;
`;
