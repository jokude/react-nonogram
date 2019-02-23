import { CellStatus } from "Types/CellStatus";
import { ILevel } from "Types/Level";

export type Grid = CellStatus[][];

export interface IGameProviderChildrenProps {
  grid: Grid;
  paintCell: (row: number, column: number) => void;
  markCell: (row: number, column: number) => void;
}

export interface IGameProviderProps {
  level: ILevel["grid"];
  size: number;
}

export interface IAction {
  type: CellAction;
  row: number;
  column: number;
  level: ILevel["grid"];
}

export enum CellAction {
  PaintCell,
  MarkCell,
}
