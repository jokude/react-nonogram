import { CellStatus } from "Types/CellStatus";
import { ILevel } from "Types/Level";
import { IPosition } from "../../types";

export type Grid = CellStatus[][];

export interface IGridOutput {
  grid: Grid;
  paintCell: (position: IPosition) => void;
  markCell: (position: IPosition) => void;
}

export interface IGridInput {
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

export { CellStatus, ILevel, IPosition };
