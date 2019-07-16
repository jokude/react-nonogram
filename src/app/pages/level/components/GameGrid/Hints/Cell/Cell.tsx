import * as React from "react";
import { CategorySize } from "Types/Category";
import { CellStatus } from "Types/CellStatus";
import { GridContext } from "../../../../context/grid";
import { Grid } from "../../../../context/grid/types";
import { IHintCell } from "../types";
import { StyledCell } from "./StyledCell";

export interface ICellProps extends IHintCell {
  isHorizontal: boolean;
  rowIndex: number;
  size: CategorySize;
}

const cellsAreSolved = (cells: CellStatus[]) => cells.every((cell) => cell ===  CellStatus.Solved);
const getRow = (grid: Grid, rowIndex: number) => grid[rowIndex];
const getColumn = (grid: Grid, columnIndex: number) => grid.map((row) => row[columnIndex]);

export const Cell: React.FunctionComponent<ICellProps> = ({ total, startPosition, isHorizontal, rowIndex, size }) => {
  const { grid } = React.useContext(GridContext);
  const row = isHorizontal ? getRow(grid, rowIndex) : getColumn(grid, rowIndex);
  const cells = row.slice(startPosition, startPosition + total);
  const isSolved = cellsAreSolved(cells);
  return (
    <StyledCell size={size} solved={isSolved} highlight={total.toString().length > 1}>{total}</StyledCell>
  );
};
