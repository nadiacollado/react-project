import { FC } from "react";
import { MenuStyled, MenuItemStyled } from "../Header/Header.styles";
import { PropMenuItem } from "../MenuItem/MenuItem";

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
  onItemClicked: (item: PropMenuItem) => void;
}

const Menu: FC<MenuProps> = (props) => {
  return (
    <div>
      <MenuStyled>
        {menu.map((item, index) => {
          return (
            <MenuItemStyled
              item={item}
              onItemClicked={props.onItemClicked}
              key={index}
            ></MenuItemStyled>
          );
        })}
      </MenuStyled>
    </div>
  );
};

export default Menu;
