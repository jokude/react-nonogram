import { styled, ThemeProvider } from "Lib/styledComponents";
import * as React from "react";
import { MainRoutes } from "./routes";
import { theme } from "./theme";

const Container = styled.div`
  max-width: 640px;
  max-height: 800px;
  margin: auto;
  height: 100%;
`;

export const App: React.SFC = () => (
  <ThemeProvider theme={theme}>
    <Container>
      <MainRoutes />
    </Container>
  </ThemeProvider>
);
