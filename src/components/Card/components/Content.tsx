import { ReactNode } from "react";

import styles from "../Card.module.css";

type ContentProps = {
  children: ReactNode;
};

export const Content = ({ children }: ContentProps) => (
  <div className={styles.card__content}>{children}</div>
);
