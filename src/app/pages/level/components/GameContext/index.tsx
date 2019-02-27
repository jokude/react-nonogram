import * as React from "react";
import { CellStatus } from "Types/CellStatus";
import {
  CellAction, Grid, IAction, IGameProviderChildrenProps, IGameProviderProps, IPosition } from "./types";

const GameContext = React.createContext<IGameProviderChildrenProps>(undefined);
const { Provider, Consumer } = GameContext;

const getInitialGrid = (size: number): Grid =>
  [...Array(size).keys()].map((_) => [...Array(size).keys()].map((__) => CellStatus.Empty));

const reducer = (state: Grid, action: IAction): Grid => {
  const { position, level, type } = action;
  switch (type) {
    case CellAction.PaintCell:
      return getModifiedGrid(
        state,
        position,
        paintGridCell(state[position.row][position.column], level[position.row][position.column]),
      );
    case CellAction.MarkCell:
      return getModifiedGrid(state, position, markGridCell(state[position.row][position.column]));
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

const getModifiedGrid = (grid: Grid, position: IPosition, cellStatus: CellStatus): Grid => {
  const newGrid = grid.slice(0);
  newGrid[position.row][position.column] = cellStatus;
  return newGrid;
};

const GameStateConsumer = Consumer;

const GameStateProvider: React.FunctionComponent<IGameProviderProps> = ({ size, level, children }) => {

  const [state, dispatch] = React.useReducer(reducer, getInitialGrid(size));

  const paintCell = (position: IPosition) => {
    dispatch({ type: CellAction.PaintCell, position, level });
  };

  const markCell = (position: IPosition) => {
    dispatch({ type: CellAction.MarkCell, position, level });
  };

  return (
    <Provider value={{ grid: state, paintCell, markCell }}>
      {children}
    </Provider>
  );
};

export { GameContext, GameStateConsumer, GameStateProvider };
