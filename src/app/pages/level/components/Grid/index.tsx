import * as React from "react";
import styled from "styled-components";
import { ICategory } from "Types/Category";
import { CellStatus } from "Types/CellStatus";
import { GRID_GAP } from "../constants";
import { GameContext } from "../GameContext";
import { Cell } from "./Cell";

interface IProps {
  size: ICategory["size"];
}

const getCellPixelSize = (size: IProps["size"]) => {
  switch (size) {
    case 5:
      return 60;
    case 10:
      return 40;
    case 15:
    default:
      return 30;
  }
};

const getGridTemplate = (size: IProps["size"]) => {
  const pixelSize = getCellPixelSize(size);
  const template = `repeat(${size}, ${pixelSize}px)`;
  return `${template} / ${template}`;
};

const Container = styled.div<{ size: IProps["size"] }>`
  display: grid;
  grid-gap: ${GRID_GAP}px;
  grid-template: ${({ size }) => getGridTemplate(size)};
`;

const clickHandler = (clickCallback: (row: number, column: number) => void, row: number, column: number) =>
  () => clickCallback(row, column);

export const Grid: React.FunctionComponent<IProps> = ({ size }) => {
  const { grid, paintCell, markCell } = React.useContext(GameContext);
  return (
    <Container size={size}>
      {grid.map((_, row: number) => _.map(
        (status: CellStatus, column: number) => (
          <Cell
            key={`${row}-${column}`}
            status={status}
            onClick={clickHandler(paintCell, row, column)}
            onRightClick={clickHandler(markCell, row, column)}
          />
        ),
      ))}
    </Container>
  );
};
