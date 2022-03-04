import { FC } from "react";
import { Link } from "react-router-dom";
import { MenuItemStyled } from "./MenuItem.styles";

export type PropMenuItem = {
  name: String;
  route: String;
};
interface MenuItemProps {
  item: PropMenuItem;
  closeMenu: () => void;
}

const MenuItem: FC<MenuItemProps> = (props) => {
  return (
    <MenuItemStyled>
      <Link
        to={`${props.item.route}`}
        style={{ color: "inherit", textDecoration: "inherit" }}
        onClick={props.closeMenu}
      >
        {props.item.name}
      </Link>
    </MenuItemStyled>
  );
};

export default MenuItem;
