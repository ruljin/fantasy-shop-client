import { ReactNode } from "react";

import styles from "../Card.module.css";

type FooterProps = {
  children: ReactNode;
};

export const Footer = ({ children }: FooterProps) => (
  <footer className={styles.card__footer}>{children}</footer>
);
