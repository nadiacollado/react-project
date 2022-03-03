import { FC, useState } from "react";
import { Link } from "react-router-dom";
import MainLogo from "../../images/main-logo.svg";
import MenuIcon from "../../images/menu-icon.svg";
import { HeaderStyled, DropdownStyled, MenuItemStyled } from "./Header.styles";

const menu = [
  { name: "Home", route: "/" },
  { name: "My Results", route: "/results" },
  { name: "Health profile", route: "/healthprofile" },
  { name: "Community", route: "/community" },
  { name: "Resources", route: "/resources" },
  { name: "Settings", route: "/settings" },
  { name: "Log out", route: "/logout" },
];

const Header: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggling = () => setIsOpen(!isOpen);

  const onItemClicked = (value: Object) => () => {
    setIsOpen(false);
  };

  return (
    <div className="Header">
      <HeaderStyled>
        <Link to="/">
          <img src={MainLogo} alt="Main Logo" />
        </Link>
        <img onClick={toggling} src={MenuIcon} alt="Menu Icon" />
      </HeaderStyled>
      {isOpen && (
        <DropdownStyled>
          {menu.map((item, index) => {
            return (
              <MenuItemStyled onClick={onItemClicked(item)} key={index}>
                <Link
                  to={`${item.route}`}
                  style={{ color: "inherit", textDecoration: "inherit" }}
                >
                  {item.name}
                </Link>
              </MenuItemStyled>
            );
          })}
        </DropdownStyled>
      )}
    </div>
  );
};

export default Header;
