import { useState } from "react";
import MainLogo from "../../images/main-logo.svg";
import MenuIcon from "../../images/menu-icon.svg";
import { HeaderWrapper, DropdownList, MenuItem } from "./Header.styles";

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
