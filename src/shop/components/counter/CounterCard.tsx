import { Card, Typography } from "../../../components";
import styles from "./Counter.module.css";

type CounterCardProps = {
  timeInSeconds: number;
};

const returnTimeInMinutes = (timeInSeconds: number) => {
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = timeInSeconds - minutes * 60;

  return `${minutes}:${
    seconds < 10 ? seconds.toString().padStart(2, "0") : seconds
  }`;
};

export const CounterCard = ({ timeInSeconds }: CounterCardProps) => (
  <Card>
    <Card.Content noMargin>
      <Typography variant="em">Time until goods change:</Typography>
      <Typography className={styles.time} variant="span">
        {returnTimeInMinutes(timeInSeconds)}
      </Typography>
    </Card.Content>
  </Card>
);
