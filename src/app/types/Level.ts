import { ITimer } from "Commons/timer/types";

export interface ILevel {
  title: string;
  grid: boolean[][];
  timeResult: ITimer | undefined;
}
