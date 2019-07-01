import { ITimer } from "Commons/timer/types";
import { styled } from "Lib/styledComponents";
import * as React from "react";
import { Container } from "./Container";
import { Image } from "./Image";
import { Time } from "./Time";
import { Title } from "./Title";

export interface ILevelCardProps {
  levelUrl: string;
  imageUrl: string;
  time?: ITimer;
  title: string;
}

const Separator = styled.hr`
  border-top: 1px solid black;
  border-bottom: none;
  border-left: none;
  border-right: none;
  margin: 0;
`;

export const LevelCard: React.FunctionComponent<ILevelCardProps> = ({ title, imageUrl, levelUrl, time }) => (
  <Container url={levelUrl}>
    <Title>{title}</Title>
    <Separator />
    <Image src={imageUrl} />
    <Separator />
    <Time time={time} />
  </Container>
);
