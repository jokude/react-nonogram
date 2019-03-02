import * as React from "react";
import styled from "styled-components";
import { GameContext } from "../../context";

const Container = styled.div`
  width: 60px;
  display: flex;
  justify-content: space-around;
  font-size: 20px;
`;

const PointsSeparator = styled.span`
  line-height: 22px;
`;

const Timer: React.FunctionComponent = () => {
  const { elapsedTime: { minutes, seconds } } = React.useContext(GameContext);
  return (
    <Container>
      <span>{minutes}</span>
      <PointsSeparator>:</PointsSeparator>
      <span>{seconds}</span>
    </Container>
  );
};

export { Timer };
