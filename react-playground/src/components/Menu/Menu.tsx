import { FC } from "react";
import { MenuStyled } from "./Menu.styles";
import { MenuItem } from "../MenuItem";

const menu = [
  { name: "Home", route: "/" },
  { name: "My Results", route: "/results" },
  { name: "Health profile", route: "/healthprofile" },
  { name: "Community", route: "/community" },
  { name: "Resources", route: "/resources" },
  { name: "Settings", route: "/settings" },
  { name: "Log out", route: "/logout" },
];

interface MenuProps {
  closeMenu: () => void;
}

const Menu: FC<MenuProps> = (props) => {
  return (
    <div>
      <MenuStyled>
        {menu.map((item, index) => {
          return (
            <MenuItem
              item={item}
              closeMenu={props.closeMenu}
              key={index}
            ></MenuItem>
          );
        })}
      </MenuStyled>
    </div>
  );
};

export default Menu;
