import clsx from "clsx";
import { ReactNode } from "react";

import styles from "./Card.module.css";
import { Content } from "./components/Content";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export const Card = ({ children, className }: CardProps) => (
  <div className={clsx(styles.card, className)}>{children}</div>
);

Card.Header = Header;
Card.Content = Content;
Card.Footer = Footer;
