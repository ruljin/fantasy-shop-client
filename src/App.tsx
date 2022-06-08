import styles from "./App.module.css";
import { WelcomePage } from "./welcome";

export const App = () => (
  <div className={styles.app}>
    <WelcomePage />
  </div>
);
