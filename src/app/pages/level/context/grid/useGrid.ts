import * as React from "react";
import {
  CellAction,
  CellStatus,
  Grid,
  IAction,
  IAfterPaintCellPayload,
  IGridInput,
  IGridOutput,
  ILevel,
  IMarkCellPayload,
  IPaintCellPayload,
  IPosition,
} from "./types";

const getInitialGrid = (size: number): Grid =>
  [...Array(size).keys()].map((_) => [...Array(size).keys()].map((__) => CellStatus.Empty));

const reducer = (state: Grid, action: IAction): Grid => {
  switch (action.type) {
    case CellAction.PaintCell: {
      const { position, level } = action.payload as IPaintCellPayload;
      return getModifiedGrid(
        state,
        position,
        paintGridCell(
          state[position.row][position.column],
          level[position.row][position.column],
        ),
      );
    }
    case CellAction.AfterPaintCell: {
      const { position, level, onPaintFail, onGridSolved } = action.payload as IAfterPaintCellPayload;
      if (!level[position.row][position.column]) {
        onPaintFail();
      } else if (isGridSolved(state, level)) {
        onGridSolved();
      }
      return state;
    }
    case CellAction.MarkCell: {
      const { position } = action.payload as IMarkCellPayload;
      return getModifiedGrid(state, position, markGridCell(state[position.row][position.column]));
    }
    default:
      throw new Error();
  }
};

const paintGridCell = (
  currentStatus: CellStatus,
  solution: boolean,
): CellStatus => {
    switch (currentStatus) {
      case CellStatus.Empty:
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

const isCellSolved = (cell: CellStatus, isSolution: boolean) => isSolution === (cell === CellStatus.Solved);

const isGridSolved = (grid: Grid, level: ILevel["grid"]) => level.every(
    (row: boolean[], rowIndex) => row.every((cell: boolean, columnIndex) =>
      isCellSolved(grid[rowIndex][columnIndex], cell)),
  );

type UseGridInput = Pick<IGridInput, "size" | "level" | "onPaintFail"> & { onGridSolved: () => void };

export const useGrid = ({ size, level, onPaintFail, onGridSolved }: UseGridInput): IGridOutput => {

  const [state, dispatch] = React.useReducer(reducer, getInitialGrid(size));

  const paintCell = (position: IPosition) => {
    dispatch({
      payload: { position, level },
      type: CellAction.PaintCell,
    });
    dispatch({
      payload: { position, level, onPaintFail, onGridSolved },
      type: CellAction.AfterPaintCell,
    });
  };

  const markCell = (position: IPosition) => {
    dispatch({ type: CellAction.MarkCell, payload: { position } });
  };

  return { grid: state, paintCell, markCell };
};
