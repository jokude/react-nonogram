import { setPaddingZero } from "Commons/timer/format";
import { ITimer } from "Commons/timer/types";
import { styled } from "Lib/styledComponents";
import * as React from "react";

interface ILevelCardProps {
  time?: ITimer;
}

export const StyledTime = styled.div`
  text-align: center;
  background: lightgray;
`;

export const Time: React.FunctionComponent<ILevelCardProps> = ({ time }) => (
  <StyledTime>{time ? setPaddingZero(time.minutes) : "--"}:{time ? setPaddingZero(time.seconds) : "--"}</StyledTime>
);
