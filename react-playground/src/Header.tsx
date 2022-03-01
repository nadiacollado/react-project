import { useState } from "react";
import styled from "styled-components";
import MainLogo from "./main-logo.svg";
import MenuIcon from "./menu-icon.svg";

const HeaderWrapper = styled.div`
  padding-top: 1.5em;
  padding-bottom: 1.5em;
  padding-right: 2.5em;
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
  box-shadow: 0px 4px 16px -10px rgba(35, 37, 46, 0.08),
    inset 0px -2.5px 0px #d5d5d3;
`;

const DropdownList = styled("ul")`
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

const MenuItem = styled("li")`
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

const menuItems = [
  "Home",
  "My Results",
  "Health Profile",
  "Community",
  "Resources",
  "Settings",
  "Log out",
];

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggling = () => setIsOpen(!isOpen);

  const onItemClicked = (value: string) => () => {
    setIsOpen(false);
  };

  return (
    <div className="Header">
      <HeaderWrapper>
        <a href="http://localhost:3000">
          <img src={MainLogo} alt="Main Logo" />
        </a>
        <img onClick={toggling} src={MenuIcon} alt="Menu Icon" />
      </HeaderWrapper>
      {isOpen && (
        <DropdownList>
          {menuItems.map((item) => {
            return <MenuItem onClick={onItemClicked(item)}>{item}</MenuItem>;
          })}
        </DropdownList>
      )}
    </div>
  );
}

export default Header;
