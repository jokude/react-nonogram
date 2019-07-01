import { MainLayout } from "Commons/components/MainLayout";
import { ThemeProvider } from "Lib/styledComponents";
import * as React from "react";
import { MainRoutes } from "./routes";
import { theme } from "./theme";

export const App: React.FunctionComponent = () => (
  <ThemeProvider theme={theme}>
    <MainLayout>
      <MainRoutes />
    </MainLayout>
  </ThemeProvider>
);
