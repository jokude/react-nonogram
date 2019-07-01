import { Breakpoints } from "Commons/constants";
import { styled } from "Lib/styledComponents";
import * as React from "react";

const Container = styled.div`
  text-align: center;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;

  @media (min-width: ${Breakpoints.lg}px) {
    font-size: 15px;
  }
`;

export const Title: React.FunctionComponent = ({ children }) => (
  <Container>
    {children}
  </Container>
);
