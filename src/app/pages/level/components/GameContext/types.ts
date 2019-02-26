import { CellStatus } from "Types/CellStatus";
import { ILevel } from "Types/Level";

export type Grid = CellStatus[][];

export interface IPosition {
  row: number;
  column: number;
}

export interface IGameProviderChildrenProps {
  grid: Grid;
  paintCell: (position: IPosition) => void;
  markCell: (position: IPosition) => void;
}

export interface IGameProviderProps {
  level: ILevel["grid"];
  size: number;
}

export interface IAction {
  type: CellAction;
  position: IPosition;
  level: ILevel["grid"];
}

export enum CellAction {
  MarkCell,
  PaintCell,
}
