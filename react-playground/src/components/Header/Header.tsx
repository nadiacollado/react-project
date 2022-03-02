import { FC, useState } from "react";
import MainLogo from "../../images/main-logo.svg";
import MenuIcon from "../../images/menu-icon.svg";
import { HeaderStyled, DropdownStyled, MenuItemStyled } from "./Header.styles";

export interface HeaderProps {
  menuItems: String[];
}

const Header: FC<HeaderProps> = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggling = () => setIsOpen(!isOpen);

  const onItemClicked = (value: String) => () => {
    setIsOpen(false);
  };

  return (
    <div className="Header">
      <HeaderStyled>
        <a href="http://localhost:3000">
          <img src={MainLogo} alt="Main Logo" />
        </a>
        <img onClick={toggling} src={MenuIcon} alt="Menu Icon" />
      </HeaderStyled>
      {isOpen && (
        <DropdownStyled>
          {props.menuItems.map((item) => {
            return (
              <MenuItemStyled onClick={onItemClicked(item)}>
                {item}
              </MenuItemStyled>
            );
          })}
        </DropdownStyled>
      )}
    </div>
  );
};

export default Header;
