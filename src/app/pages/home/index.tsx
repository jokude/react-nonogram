import { Button } from "Commons/components/Button";
import { Breakpoints } from "Commons/constants";
import * as React from "react";
import { RouteChildrenProps } from "react-router";
import styled from "styled-components";

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  background: white;
`;

const Title = styled.h1`
  margin: 0;
  font-weight: bold;
  font-size: 50px;
  text-align: center;

  @media (min-width: ${Breakpoints.lg}px) {
    font-size: 80px;
  }
`;

export const Home: React.FunctionComponent<RouteChildrenProps> = () => (
  <Container>
    <Title>React Nonogram</Title>
    <Button to="/category/5x5" size="large">Click to start</Button>
  </Container>
);
