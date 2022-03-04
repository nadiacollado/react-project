import { FC, useState, useRef } from "react";
import { Link } from "react-router-dom";
import MainLogo from "../../images/main-logo.svg";
import MenuIcon from "../../images/menu-icon.svg";
import { HeaderStyled, MenuIconStyled } from "./Header.styles";
import { Menu } from "components/Menu";
import useOnClickOutside from "hooks/useOnClickOutside";

const Header: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggling = () => setIsOpen(!isOpen);

  const closeMenu = () => {
    setIsOpen(false);
  };

  const element = useRef<HTMLDivElement>(null);

  useOnClickOutside(element, () => closeMenu());

  return (
    <div className="Header">
      <HeaderStyled>
        <Link to="/">
          <img src={MainLogo} alt="Main Logo" />
        </Link>
        <MenuIconStyled>
          <div className="Menu" ref={element}>
            <img onClick={toggling} src={MenuIcon} alt="Menu Icon" />
            {isOpen && <Menu closeMenu={closeMenu} />}
          </div>
        </MenuIconStyled>
      </HeaderStyled>
    </div>
  );
};

export default Header;
