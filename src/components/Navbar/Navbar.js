import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavbarBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background-color: #dfdfdf;
  color: white;
`;
export const LeftNav = styled.div`
  display: flex;
  align-items: center;
`;
export const HomeLogo = styled.img`
  width: 100px;
  height: 50px;
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
  background-color: #dfdfdf;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: black;
  font-weight: 600;
  padding-top: 3px;
  font-size: 15px;
`;
export const Porduc = styled.span`
  border: none;
  background-color: #dfdfdf;
  margin-right: 10px;
  font-weight: 500;
  color: black;
  cursor: pointer;
`;
export const RightNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: black;
  font-weight: 500;
`;
export const LogiBtn = styled.button`
  border: none;
  background-color: #dfdfdf;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: black;
  font-weight: 600;
  padding-top: 3px;
  font-size: 15px;
  cursor: pointer;
`;
