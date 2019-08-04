import { ITimer } from "Commons/timer/types";
import { ICategory } from "Types/Category";

export interface ILevel {
  id: number;
  category: ICategory;
  title: string;
  grid: boolean[][];
}

export interface ILevelSummary {
  id: number;
  title: string;
  timeResult?: ITimer;
}
