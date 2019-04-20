export interface IDataLevel {
  title: string;
  grid: string;
}

export interface IDataCategory {
  title: string;
  size: number;
  countdownMinutes: number;
  levels: IDataLevel[];
}
