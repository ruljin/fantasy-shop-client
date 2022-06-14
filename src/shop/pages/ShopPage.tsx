import { useEffect, useState } from "react";

import { Page } from "../../components";
import { CounterCard } from "../components/counter/CounterCard";
import { CustomerBackpack } from "../components/customer-backpack/CustomerBackpack";
import { ShopCounter } from "../components/shop-counter/ShopCounter";
import styles from "./ShopPage.module.css";

export const ShopPage = () => {
  const [timeInSeconds, setTimeInSeconds] = useState(120);

  useEffect(() => {
    const changeGoodsTimeout = setTimeout(() => {
      if (timeInSeconds === 0) {
        setTimeInSeconds(120);
        return;
      }

      setTimeInSeconds(timeInSeconds - 1);
    }, 1000);

    return () => clearTimeout(changeGoodsTimeout);
  }, [timeInSeconds]);

  return (
    <Page>
      <div className={styles.container}>
        <div className={styles.counter}>
          <ShopCounter />
          <CustomerBackpack />
        </div>
        <CounterCard timeInSeconds={timeInSeconds} />
      </div>
    </Page>
  );
};
