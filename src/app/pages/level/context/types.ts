import { CellStatus } from "Types/CellStatus";

export type Grid = CellStatus[][];

export interface IPosition {
  row: number;
  column: number;
}
