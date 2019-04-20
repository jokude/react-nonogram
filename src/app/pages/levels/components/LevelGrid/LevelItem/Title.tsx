import { styled } from "Lib/styledComponents";
import * as React from "react";
import { MOBILE_BREAKPOINT } from "../../../../core/constants";
import { AnimateOpacity } from "./AnimateOpacity";

const Container = styled.div`
  text-align: center;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;

  @media (min-width: ${MOBILE_BREAKPOINT}) {
    font-size: 15px;
  }
`;

export const Title: React.FunctionComponent = ({ children }) => (
  <Container>
    <AnimateOpacity>{children}</AnimateOpacity>
  </Container>
);
