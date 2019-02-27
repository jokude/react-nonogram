import * as React from "react";
import { CellStatus } from "Types/CellStatus";
import { GameContext } from "../GameContext";
import { Grid } from "../GameContext/types";
import { Cell } from "./Containers";
import { IHintCell } from "./types";

interface IHintCellProps extends IHintCell {
  isHorizontal: boolean;
  rowIndex: number;
}

const cellsAreSolved = (cells: CellStatus[]) => cells.every((cell) => cell ===  CellStatus.Solved);
const getRow = (grid: Grid, rowIndex: number) => grid[rowIndex];
const getColumn = (grid: Grid, columnIndex: number) => grid.map((row) => row[columnIndex]);

export const HintCell: React.FunctionComponent<IHintCellProps> = ({ total, startPosition, isHorizontal, rowIndex }) => {
  const { grid } = React.useContext(GameContext);
  const row = isHorizontal ? getRow(grid, rowIndex) : getColumn(grid, rowIndex);
  const cells = row.slice(startPosition, startPosition + total);
  const isSolved = cellsAreSolved(cells);
  return (
    <Cell solved={isSolved} highlight={total.toString().length > 1}>{total}</Cell>
  );
};
