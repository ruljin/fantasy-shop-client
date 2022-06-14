import { Card } from "../../../components";
import { Typography } from "../../../components";
import styles from "./ShopCounter.module.css";

export const ShopCounter = () => (
  <Card className={styles.card}>
    <Card.Header>
      <Typography variant="h2">Shop counter</Typography>
    </Card.Header>
    <Card.Content>a</Card.Content>
  </Card>
);
