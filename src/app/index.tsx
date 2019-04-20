import { ThemeProvider } from "Lib/styledComponents";
import * as React from "react";
import { MainLayout } from "./pages/core/components/MainLayout";
import { MainRoutes } from "./routes";
import { theme } from "./theme";

export const App: React.FunctionComponent = () => (
  <ThemeProvider theme={theme}>
    <MainLayout>
      <MainRoutes />
    </MainLayout>
  </ThemeProvider>
);
