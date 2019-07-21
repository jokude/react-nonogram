import { ITimer } from "Commons/timer/types";
import { ICategory } from "Types/Category";

export interface ILevel {
  category: ICategory;
  title: string;
  grid: boolean[][];
}

export interface ILevelSummary {
  title: string;
  timeResult: ITimer | undefined;
}
