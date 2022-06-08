import { ReactNode } from "react";

import styles from "../Card.module.css";

type HeaderProps = {
  children: ReactNode;
};

export const Header = ({ children }: HeaderProps) => (
  <header className={styles.card__header}>{children}</header>
);
