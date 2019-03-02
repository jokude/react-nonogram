import * as React from "react";
import { CellAction, CellStatus, Grid, IAction, IGridInput, IGridOutput, IPosition } from "./types";

const getInitialGrid = (size: number): Grid =>
  [...Array(size).keys()].map((_) => [...Array(size).keys()].map((__) => CellStatus.Empty));

const reducer = (state: Grid, action: IAction): Grid => {
  const { position, level, type } = action;
  switch (type) {
    case CellAction.PaintCell:
      return getModifiedGrid(
        state,
        position,
        paintGridCell(
          state[position.row][position.column], level[position.row][position.column], action.substractMinute,
        ),
      );
    case CellAction.MarkCell:
      return getModifiedGrid(state, position, markGridCell(state[position.row][position.column]));
    default:
      throw new Error();
  }
};

const paintGridCell = (currentStatus: CellStatus, solution: boolean, substractMinute: () => void): CellStatus => {
  switch (currentStatus) {
    case CellStatus.Empty:
      if (!solution) {
        substractMinute();
      }
      return solution ? CellStatus.Solved : CellStatus.Failed;
    case CellStatus.Marked:
      return CellStatus.Empty;
    default:
      return currentStatus;
  }
};

const markGridCell = (currentStatus: CellStatus): CellStatus => {
  switch (currentStatus) {
    case CellStatus.Empty:
      return CellStatus.Marked;
    case CellStatus.Marked:
      return CellStatus.Empty;
    default:
      return currentStatus;
  }
};

const getModifiedGrid = (grid: Grid, position: IPosition, cellStatus: CellStatus): Grid => {
  const newGrid = grid.slice(0);
  newGrid[position.row][position.column] = cellStatus;
  return newGrid;
};

export const useGrid = ({ size, level, substractMinute }: IGridInput): IGridOutput => {

  const [state, dispatch] = React.useReducer(reducer, getInitialGrid(size));

  const paintCell = (position: IPosition) => {
    dispatch({ type: CellAction.PaintCell, position, level, substractMinute });
  };

  const markCell = (position: IPosition) => {
    dispatch({ type: CellAction.MarkCell, position, level, substractMinute });
  };

  return { grid: state, paintCell, markCell };
};
