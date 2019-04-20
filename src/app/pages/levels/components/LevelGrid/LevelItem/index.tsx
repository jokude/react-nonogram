import { styled } from "Lib/styledComponents";
import * as React from "react";
import { ICategory } from "Types/Category";
import { ILevel } from "Types/Level";
import { formatMilliseconds } from "../../../../core/timer/format";
import { Image } from "./Image";
import { LevelCard } from "./LevelCard";
import { Title } from "./Title";

interface IProps {
  category: ICategory;
  level: ILevel;
}

const Time = styled.div`
  text-align: center;
  background: lightgray;
`;

const Separator = styled.hr`
  border-top: 1px solid black;
  border-bottom: none;
  border-left: none;
  border-right: none;
  margin: 0;
`;

export const LevelItem: React.FunctionComponent<IProps> = ({ category, level }) => {
  const time = level.timeResult ? formatMilliseconds(level.timeResult) : { minutes: "--", seconds: "--" };
  return (
    <LevelCard category={category} level={level}>
      <Title>{level.title}</Title>
      <Separator />
      <Image category={category} level={level} />
      <Separator />
      <Time>{time.minutes}:{time.seconds}</Time>
    </LevelCard>
  );
};
