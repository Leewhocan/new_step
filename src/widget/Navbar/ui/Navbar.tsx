import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import styles from "./Navbar.module.scss";
interface NavbarProps {}

export const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.links}>
        <AppLink
          to={"/"}
          theme={AppLinkTheme.PRIMARY}
          className={styles.mainLink}
        >
          Главная
        </AppLink>
        <AppLink theme={AppLinkTheme.PRIMARY} to={"/about"}>
          O нас
        </AppLink>
      </div>
    </div>
  );
};
