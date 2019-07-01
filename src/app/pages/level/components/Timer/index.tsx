import { setPaddingZero } from "Commons/timer/format";
import * as React from "react";
import styled from "styled-components";
import { TimerContext } from "../../context/timer";

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
  const { elapsedTime: { minutes, seconds } } = React.useContext(TimerContext);
  return (
    <Container>
      <span>{setPaddingZero(minutes)}</span>
      <PointsSeparator>:</PointsSeparator>
      <span>{setPaddingZero(seconds)}</span>
    </Container>
  );
};

export { Timer };
