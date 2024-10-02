import styles from "c/header/header-menu/header-menu.module.css";
import { NavLink, NavLinkRenderProps } from "react-router-dom";

const HeaderMenu: React.FC = () => {
  const ActiveMenu = (props: NavLinkRenderProps) => {
    const { isActive } = props;
    return isActive ? styles.activeMenu : styles.inactiveMenu;
  };

  return (
    <ul className={styles.navbar}>
      <li>
        <NavLink className={ActiveMenu} to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className={ActiveMenu} to="about">
          About
        </NavLink>
      </li>
      <li>
        <NavLink className={ActiveMenu} to="contact">
          Contact
        </NavLink>
      </li>
      <li>
        <a href="#destination">Destination</a>
      </li>
      <li>
        <a href="#blog">Blog</a>
      </li>

      <li>
        <a href="#booknow">Book Now</a>
      </li>
    </ul>
  );
};

export default HeaderMenu;
