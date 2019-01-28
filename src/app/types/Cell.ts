import { CellStatus } from "./CellStatus";

export interface ICell {
  row: number;
  column: number;
  solution: boolean;
  status: CellStatus;
}
