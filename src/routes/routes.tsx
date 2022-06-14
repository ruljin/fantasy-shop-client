import {
  HashRouter as Router,
  Route,
  Routes as Switch,
} from "react-router-dom";

import { ShopPage } from "../shop";
import { WelcomePage } from "../welcome";

const ROUTES = [
  { path: "/", element: <WelcomePage /> },
  { path: "/shop", element: <ShopPage /> },
];

export const Routes = () => (
  <Router>
    <Switch>
      {ROUTES.map(({ path, element }) => (
        <Route key={path} path={path} element={element} />
      ))}
    </Switch>
  </Router>
);
