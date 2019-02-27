import { styled } from "Lib/styledComponents";
import * as React from "react";
import { AnimateOpacity } from "./AnimateOpacity";

const Container = styled.div`
  text-align: center;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title: React.FunctionComponent = ({ children }) => (
  <Container>
    <AnimateOpacity>{children}</AnimateOpacity>
  </Container>
);
