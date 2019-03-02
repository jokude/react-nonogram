import { CellStatus } from "Types/CellStatus";
import { IGridInput, IGridOutput } from "./hooks/grid/types";
import { IHintOutput } from "./hooks/hints/types";
import { ITimerInput, ITimerOutput } from "./hooks/timer/types";

export type Grid = CellStatus[][];

export interface IPosition {
  row: number;
  column: number;
}

export type IContextProviderChildrenProps = IGridOutput & Pick<ITimerOutput, "elapsedTime"> & IHintOutput;
export type IContextProviderProps = Pick<IGridInput, Exclude<keyof IGridInput, "substractMinute">> & ITimerInput;
