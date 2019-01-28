import * as React from "react";
import { BrowserRouter, Route, RouteProps, Switch } from "react-router-dom";
import { routes } from "./routes";

export const MainRoutes: React.SFC = () => {
  const appRoutes = routes.map((routeProps: RouteProps, index) => (
    <Route key={index} {...routeProps} />
  ));
  return (
    <BrowserRouter>
      <Switch>{appRoutes}</Switch>
    </BrowserRouter>
  );
};
