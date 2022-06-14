import { Card } from "../../../components";
import { Typography } from "../../../components";
import styles from "./CustomerBackpack.module.css";

export const CustomerBackpack = () => (
  <Card className={styles.card}>
    <Card.Header>
      <Typography variant="h2">Customer backpack</Typography>
    </Card.Header>
    <Card.Content>a</Card.Content>
  </Card>
);
