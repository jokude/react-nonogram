import * as React from "react";
import { BrowserRouter, HashRouter, Route, RouteProps, Switch } from "react-router-dom";
import { routes } from "./routes";

export const MainRoutes: React.SFC = () => {
  const appRoutes = routes.map((routeProps: RouteProps, index) => (
    <Route key={index} {...routeProps} />
  ));
  const Router: any = Boolean(USE_HASH_ROUTER) ? HashRouter : BrowserRouter;
  return (
    <Router>
      <Switch>{appRoutes}</Switch>
    </Router>
  );
};
