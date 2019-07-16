import { FadeTransition } from "Commons/components/Fade";
import * as React from "react";
import { BrowserRouter, HashRouter, matchPath, Route, Switch } from "react-router-dom";
import { TransitionGroup } from "react-transition-group";
import { routes } from "./routes";

const getMatchingPath = (pathname: string): string => routes.find((route) => {
  const match = matchPath(pathname, route.path);
  return match && match.isExact;
}).path;

const routesComponents: React.ReactNode[] = routes.map(({ component, path, exact }) => (
  <Route key={path} path={path} exact={exact} component={component} />
));

export const MainRoutes: React.FunctionComponent = () => {
  const Router: any = Boolean(USE_HASH_ROUTER) ? HashRouter : BrowserRouter;
  return  (
    <Router>
      <Route
        render={({ location }) => (
          <TransitionGroup component={null}>
            <FadeTransition key={getMatchingPath(location.pathname)} appear={true}>
              <Switch location={location}>
                {routesComponents}
              </Switch>
            </FadeTransition>
          </TransitionGroup>
        )}
      />
    </Router>
  );
};
