import * as React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import About from "./about";
import Posts from "./blog/posts";
import RepositoriesList from "./repositories-list";
import Home from "./home";
import TechStack from "./tech-stack";
import Achievements from "./achievements";
import NotebookPost from "./blog/notebook-app/notebook-post";
// import EducationStory from "./education-story";
import MyStory from "./my-story";

const routes = [
  { path: "/", exact: true, name: "Home", component: Home },
  { path: "/about", exact: true, name: "About", component: About },
  {
    path: "/achievements",
    exact: true,
    name: "Achievements",
    component: Achievements
  },
  {
    path: "/blog/notebook-app",
    exact: true,
    name: "Post",
    component: NotebookPost
  },
  {
    path: "/open-source",
    exact: true,
    name: "OpenSource",
    component: RepositoriesList
  },
  { path: "/blog", exact: true, name: "Blog", component: Posts },
  { path: "/tech-stack", exact: true, name: "Tools", component: TechStack },
  { path: "/story-timeline", exact: true, name: "My Story", component: MyStory }

];
const Navigation = () => {
  return (
    <Switch>
      {routes.map((route, idx) => (
        <Route
          key={idx}
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
