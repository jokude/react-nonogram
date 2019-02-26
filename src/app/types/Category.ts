import { ILevel } from "./Level";

export interface ICategory {
  title: string;
  size: number;
  levels: ILevel[];
  countdownMinutes: number;
}
