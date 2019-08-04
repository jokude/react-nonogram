import { CategorySize } from "Types/Category";

export interface IDataLevel {
  id: number;
  title: string;
  grid: string;
}

export interface IDataCategory {
  title: string;
  size: CategorySize;
  countdownMinutes: number;
  levels: IDataLevel[];
}
