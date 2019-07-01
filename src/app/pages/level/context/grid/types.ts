import { ITimer } from "Commons/timer/types";
import { CellStatus } from "Types/CellStatus";
import { ILevel } from "Types/Level";
import { IPosition } from "../types";

export type Grid = CellStatus[][];

export interface IGridOutput {
  grid: Grid;
  paintCell: (position: IPosition) => void;
  markCell: (position: IPosition) => void;
}

export interface IGridInput {
  level: ILevel["grid"];
  size: number;
  onPaintFail: () => void;
  onGridSolved: (time: ITimer) => void;
}

export interface IAction  {
  type: CellAction;
  payload: IPaintCellPayload | IMarkCellPayload | IAfterPaintCellPayload;
}

export enum CellAction {
  MarkCell,
  PaintCell,
  AfterPaintCell,
}

export interface IMarkCellPayload {
  position: IPosition;
}

export interface IPaintCellPayload {
  level: ILevel["grid"];
  position: IPosition;
}

export interface IAfterPaintCellPayload {
  level: ILevel["grid"];
  position: IPosition;
  onPaintFail: IGridInput["onPaintFail"];
  onGridSolved: () => void;
}

export { CellStatus, ILevel, IPosition };
