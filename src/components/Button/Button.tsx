import { ReactNode } from "react";
import { NavLink } from "react-router-dom";

import styles from "./Button.module.css";

type ButtonProps = {
  children: ReactNode;
  type?: "submit" | "reset" | "button";
  onClick?: () => void;
  disabled?: boolean;
  to?: string;
};

export const Button = ({
  children,
  type = "button",
  disabled = false,
  to,
}: ButtonProps) => {
  if (to) {
    return (
      <NavLink className={styles.button} to={to}>
        {children}
      </NavLink>
    );
  }

  return (
    <button className={styles.button} type={type} disabled={disabled}>
      {children}
    </button>
  );
};
