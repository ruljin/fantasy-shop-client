import styles from "./Typography.module.css";

type TypographyProps = {
  children: string;
  variant?: string;
};

const returnProperVariant = (children: string, variant: string) => {
  if (variant === "h1") {
    return <h1 className={styles["heading--one"]}>{children}</h1>;
  }

  if (variant === "h2") {
    return <h2 className={styles["heading--two"]}>{children}</h2>;
  }

  return <p className={styles.paragraph}>{children}</p>;
};

export const Typography = ({ children, variant = "p" }: TypographyProps) =>
  returnProperVariant(children, variant);
