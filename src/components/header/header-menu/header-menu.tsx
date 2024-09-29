import styles from "c/header/header-menu/header-menu.module.css";

const HeaderMenu: React.FC = () => {
  return (
    <ul className={styles.navbar}>
      <li>
        <a href="#home">Home</a>
      </li>
      <li>
        <a href="#destination">Destination</a>
      </li>
      <li>
        <a href="#blog">Blog</a>
      </li>
      <li>
        <a href="#contact">Contact</a>
      </li>
      <li>
        <a href="#about">About</a>
      </li>
      <li>
        <a href="#booknow">Book Now</a>
      </li>
    </ul>
  );
};

export default HeaderMenu;
