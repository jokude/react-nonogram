import * as React from "react";
import { CellStatus } from "Types/CellStatus";
import { CellAction, Grid, IAction, IGameProviderChildrenProps, IGameProviderProps } from "./types";

const GameContext = React.createContext<IGameProviderChildrenProps>(undefined);
const { Provider, Consumer } = GameContext;

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

const GameStateConsumer = Consumer;

const GameStateProvider: React.FunctionComponent<IGameProviderProps> = ({ size, level, children }) => {

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

export { GameContext, GameStateConsumer, GameStateProvider };
