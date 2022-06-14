import clsx from "clsx";
import { ReactNode } from "react";

import styles from "../Card.module.css";

type ContentProps = {
  children: ReactNode;
  noMargin?: boolean;
};

export const Content = ({ children, noMargin = false }: ContentProps) => (
  <div
    className={clsx(styles.card__content, {
      [styles["card__content--no_margin"]]: noMargin,
    })}
  >
    {children}
  </div>
);
