import styles from "c/header/header/header.module.css";
import { NavLink, NavLinkRenderProps, Link } from "react-router-dom";
import { mainMenu, logoText } from "@/translation/global.ts";
import { useParams } from "react-router-dom";

export const Header = () => {
  const ActiveMenu = (props: NavLinkRenderProps) => {
    const { isActive } = props;
    return isActive ? styles.activeMenu : styles.inactiveMenu;
  };

  const params = useParams();
  const lang = params.lang as keyof typeof mainMenu;

  const LangChangeLink = lang == "ka" ? "/en/countries" : "/ka/countries";

  return (
    <div className={styles.headerContainer}>
      <div className={styles.header}>
        <Link to="/" className={styles.logoLink}>
          <div className={styles.logo}>
            <span className={styles.visit}>{logoText[lang].travel}</span>
            <span className={styles.italy}>{logoText[lang].agency}</span>
          </div>
        </Link>
        <ul className={styles.navbar}>
          <li>
            <NavLink className={ActiveMenu} to="countries">
              {mainMenu[lang].countries}
            </NavLink>
          </li>
          <li>
            <NavLink className={ActiveMenu} to="about">
              {mainMenu[lang].about}
            </NavLink>
          </li>
          <li>
            <NavLink className={ActiveMenu} to="contact">
              {mainMenu[lang].contact}
            </NavLink>
          </li>
          <li>
            <NavLink className={ActiveMenu} to="otp">
              OTP
            </NavLink>
          </li>

          <li>
            <a href="#booknow">{mainMenu[lang].book}</a>
          </li>
          <li>
            <Link to={LangChangeLink}>{lang == "ka" ? "eng" : "ქარ"}</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
