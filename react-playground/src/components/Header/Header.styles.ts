import styled from "styled-components";
import MenuItem from "../MenuItem";

export const HeaderStyled = styled.div`
  padding-top: 1.5em;
  padding-bottom: 1.5em;
  padding-right: 2.5em;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
  box-shadow: 0px 4px 16px -10px rgba(35, 37, 46, 0.08),
    inset 0px -2.5px 0px #d5d5d3;
`;

export const DropdownStyled = styled("ul")`
  display: flex;
  flex-direction: column;
  padding: 16px;
  position: absolute;
  top: 60px;
  right: 30px;
  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1),
    0px 2px 0px -10px rgba(27, 33, 50, 0.08);
  border-radius: 8px;
`;

export const MenuItemStyled = styled(MenuItem)`
  list-style: none;
  color: #1a1a19;
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-size: 18px;
  line-height: 33px;
  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 5px 45px 0px 15px;
`;

export const MenuStyled = styled("div")`
  padding-top: 1em;
`;
