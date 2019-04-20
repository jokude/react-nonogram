import * as React from "react";
import { Background } from "./Background";
import { Container } from "./Container";

export const MainLayout: React.FunctionComponent = ({ children }) => (
  <>
    <Background />
    <Container>
      {children}
    </Container>
  </>
);
