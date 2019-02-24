import * as React from "react";
import styled from "styled-components";
import { ICountdownTimerProps } from "./types";
import { useCountdownTimer } from "./useCountdownTimer";

const Container = styled.div`
  width: 60px;
  display: flex;
  justify-content: space-around;
  font-size: 20px;
`;

const PointsSeparator = styled.span`
  line-height: 22px;
`;

const Timer: React.FunctionComponent<ICountdownTimerProps> = ({ countdownSeconds, onTimeout }) => {
  const { minutes, seconds } = useCountdownTimer(countdownSeconds, onTimeout);
  return (
    <Container>
      <span>{minutes}</span>
      <PointsSeparator>:</PointsSeparator>
      <span>{seconds}</span>
    </Container>
  );
};

Timer.defaultProps = {
  onTimeout: () => undefined,
};

export { Timer };
