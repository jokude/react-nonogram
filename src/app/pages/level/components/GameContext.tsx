import * as React from "react";
import { CellStatus } from "Types/CellStatus";
import { ILevel } from "Types/Level";

export interface IGameProviderChildrenProps {
  grid: Grid;
  paintCell: (row: number, column: number) => void;
  markCell: (row: number, column: number) => void;
}

type Grid = CellStatus[][];

interface IGameProviderProps {
  level: ILevel["grid"];
  size: number;
}

interface IAction {
  type: CellAction;
  row: number;
  column: number;
  level: ILevel["grid"];
}

enum CellAction {
  PaintCell,
  MarkCell,
}

const { Provider, Consumer } = React.createContext<IGameProviderChildrenProps>(undefined);

const getInitialGrid = (size: number): Grid =>
  [...Array(size).keys()].map((_) => [...Array(size).keys()].map((__) => CellStatus.Empty));

const reducer = (state: Grid, action: IAction): Grid => {
  const { row, column, level, type } = action;
  switch (type) {
    case CellAction.PaintCell:
      return getModifiedGrid(state, row, column, paintGridCell(state[row][column], level[row][column]));
    case CellAction.MarkCell:
      return getModifiedGrid(state, row, column, markGridCell(state[row][column]));
    default:
      throw new Error();
  }
};

const paintGridCell = (currentStatus: CellStatus, solution: boolean): CellStatus => {
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

const getModifiedGrid = (grid: Grid, cellRow: number, cellColumn: number, cellStatus: CellStatus): Grid => {
  const newGrid = grid.slice(0);
  newGrid[cellRow][cellColumn] = cellStatus;
  return newGrid;
};

export const GameStateConsumer = Consumer;

export const GameStateProvider: React.FunctionComponent<IGameProviderProps> = ({ size, level, children }) => {

  const [state, dispatch] = React.useReducer(reducer, getInitialGrid(size));

  const paintCell = (row: number, column: number) => {
    dispatch({ type: CellAction.PaintCell, row, column, level });
  };

  const markCell = (row: number, column: number) => {
    dispatch({ type: CellAction.MarkCell, row, column, level });
  };

  return (
    <Provider value={{ grid: state, paintCell, markCell }}>
      {children}
    </Provider>
  );
};
