import { ReactNode } from "react";

import styles from "./Card.module.css";
import { Content } from "./components/Content";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

type CardProps = {
  children: ReactNode;
};

export const Card = ({ children }: CardProps) => (
  <div className={styles.card}>{children}</div>
);

Card.Header = Header;
Card.Content = Content;
Card.Footer = Footer;
