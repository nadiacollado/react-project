import { FC } from "react";
import { Link } from "react-router-dom";

export type PropMenuItem = {
  name: String;
  route: String;
};
interface MenuItemProps {
  className?: string;
  item: PropMenuItem;
  onItemClicked: (item: PropMenuItem) => void;
}

const MenuItem: FC<MenuItemProps> = (props) => {
  return (
    <div>
      <Link
        className={props.className}
        to={`${props.item.route}`}
        style={{ color: "inherit", textDecoration: "inherit" }}
      >
        {props.item.name}
      </Link>
    </div>
  );
};

export default MenuItem;
