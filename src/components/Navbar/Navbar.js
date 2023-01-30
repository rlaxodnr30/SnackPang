import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavbarBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background-color: gray;
  color: white;
`;
export const LeftNav = styled.div`
  display: flex;
  align-items: center;
`;
export const HomeLogo = styled.img`
  width: 100px;
  height: 80px;
`;
export const LeftNavLink = styled(NavLink)`
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  text-decoration: none;
`;

export const RightNav = styled.div`
  display: flex;
  align-items: center;
`;

export const CartImg = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 15px;
  cursor: pointer;
`;
export const LogBtn = styled.button`
  border: none;
  background-color: gray;
  margin-right: 10px;
  font-weight: bold;
  cursor: pointer;
`;
export const Porduc = styled.span`
  border: none;
  background-color: gray;
  margin-right: 10px;
  font-weight: 500;
  color: black;
  cursor: pointer;
`;
export const RightNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: white;
`;
