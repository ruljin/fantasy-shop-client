import { ReactNode } from "react";

import styles from "./Page.module.css";

type PageProps = {
  children: ReactNode;
};

export const Page = ({ children }: PageProps) => (
  <div className={styles.page}>{children}</div>
);
