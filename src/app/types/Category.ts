import { ILevel } from "./Level";

export type CategorySize = 5 | 10 | 15;

export interface ICategory {
  title: string;
  size: CategorySize;
  levels: ILevel[];
  countdownMinutes: number;
}
