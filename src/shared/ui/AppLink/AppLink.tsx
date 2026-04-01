import { FC } from "react";
import { Link, LinkProps } from "react-router-dom";
import styles from "./AppLink.module.scss";
import cn from "classnames";
export enum AppLinkTheme {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

const themeToClass: Record<AppLinkTheme, string> = {
  [AppLinkTheme.PRIMARY]: styles.primary,
  [AppLinkTheme.SECONDARY]: styles.secondary,
};

interface AppLinkProps extends LinkProps {
  className?: string;
  theme: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = (props) => {
  const { to, className, children, theme, ...otherProps } = props;

  const linkClass = cn(styles.appLink, className, themeToClass[theme]);

  return (
    <Link to={to} className={linkClass} {...otherProps}>
      {children}
    </Link>
  );
};
