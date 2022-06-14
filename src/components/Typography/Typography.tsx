import clsx from "clsx";

import styles from "./Typography.module.css";

type TypographyProps = {
  children: string | number;
  variant?: string;
  className?: string;
};

const returnProperVariant = (
  children: string | number,
  variant: string,
  className?: string
) => {
  if (variant === "h1") {
    return (
      <h1 className={clsx(styles["heading--one"], className)}>{children}</h1>
    );
  }

  if (variant === "h2") {
    return (
      <h2 className={clsx(styles["heading--two"], className)}>{children}</h2>
    );
  }

  if (variant === "em") {
    return <em className={clsx(styles.emphasized, className)}>{children}</em>;
  }

  if (variant === "span") {
    return <span className={className}>{children}</span>;
  }

  return <p className={clsx(styles.paragraph, className)}>{children}</p>;
};

export const Typography = ({
  children,
  variant = "p",
  className,
}: TypographyProps) => returnProperVariant(children, variant, className);
