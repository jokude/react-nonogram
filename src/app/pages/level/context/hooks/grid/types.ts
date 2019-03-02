import { CellStatus } from "Types/CellStatus";
import { ILevel } from "Types/Level";
import { IPosition } from "../../types";
import { ITimerOutput } from "../timer/types";

export type Grid = CellStatus[][];

export interface IGridOutput {
  grid: Grid;
  paintCell: (position: IPosition) => void;
  markCell: (position: IPosition) => void;
}

export interface IGridInput {
  level: ILevel["grid"];
  size: number;
  substractMinute: ITimerOutput["substractMinute"];
}

export interface IAction {
  type: CellAction;
  position: IPosition;
  level: ILevel["grid"];
  substractMinute: ITimerOutput["substractMinute"];
}

export enum CellAction {
  MarkCell,
  PaintCell,
}

export { CellStatus, ILevel, IPosition };
