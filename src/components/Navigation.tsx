import * as React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import About from "./about";
import Blog from "./blog";
import RepositoriesList from "./repositories-list";
import Home from "./home";

export interface NavigationProps {}
const routes = [
  { path: "/", exact: true, name: "Home", component: Home },
  { path: "/about", exact: true, name: "About", component: About },
  {
    path: "/open-source",
    exact: true,
    name: "OpenSource",
    component: RepositoriesList
  },
  { path: "/blog", exact: true, name: "Blog", component: Blog }
];

const Navigation: React.SFC<NavigationProps> = () => {
  return (
    <Switch>
      {routes.map((route, idx) => (
        <Route
          exact={route.exact}
          path={route.path}
          render={props => <route.component {...props} />}
        />
      ))}
      <Redirect to="/" />
    </Switch>
  );
};

export default Navigation;
