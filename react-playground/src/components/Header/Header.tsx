import { FC, useState, useLayoutEffect, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import MainLogo from "../../images/main-logo.svg";
import MenuIcon from "../../images/menu-icon.svg";
import { HeaderStyled, MenuStyled } from "./Header.styles";
import Menu from "../Menu";

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

  const onItemClicked = () => {
    setIsOpen(false);
  };

  const element = useRef<HTMLDivElement>(null);

  const handleClick = useCallback((e: MouseEvent) => {
    console.log("in ClickOutside");
    console.log(element.current);
    console.log("TARGET", e.target);
    console.log(
      "CONDITION",
      element.current?.contains(e.target as HTMLElement)
    );
    if (element.current && element.current.contains(e.target as HTMLElement)) {
      console.log("inside conditional");
      return;
    }
    setIsOpen(false);
  }, []);

  useLayoutEffect(() => {
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [handleClick]);

  return (
    <div className="Header">
      <HeaderStyled>
        <Link to="/">
          <img src={MainLogo} alt="Main Logo" />
        </Link>
        <MenuStyled>
          <div className="Menu" ref={element}>
            <img onClick={toggling} src={MenuIcon} alt="Menu Icon" />
            {isOpen && <Menu onItemClicked={onItemClicked} />}
          </div>
        </MenuStyled>
      </HeaderStyled>
    </div>
  );
};

export default Header;
