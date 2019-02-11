import { styled, ThemeProvider } from "Lib/styledComponents";
import * as React from "react";
import { MainRoutes } from "./routes";
import { theme } from "./theme";

const Container = styled.div`
  max-width: 640px;
  max-height: 800px;
  margin: auto;
  height: 100%;
  display: flex;
  justify-content: center;
`;

export const App: React.FunctionComponent = () => (
  <ThemeProvider theme={theme}>
    <Container>
      <MainRoutes />
    </Container>
  </ThemeProvider>
);
