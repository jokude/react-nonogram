import * as React from "react";
import { CategorySize } from "Types/Category";
import { CellStatus } from "Types/CellStatus";
import { GridContext } from "../../../../context/grid";
import { HintsContext } from "../../../../context/hints";
import { IPosition } from "../../../../context/types";
import { Cell } from "../Cell/Cell";
import { StyledGrid } from "./StyledGrid";

interface IProps {
  size: CategorySize;
}

const isCellActive = (cellStatus: CellStatus) => cellStatus === CellStatus.Empty || cellStatus === CellStatus.Marked;

const getEventHandlers = (
  status: CellStatus,
  position: IPosition,
  { paintCell, markCell, highlightCell }: Record<string, (position: IPosition) => void>,
) => {
  if (!isCellActive(status)) {
    return undefined;
  }
  return {
    onClick: () => paintCell(position),
    onMouseEnter: () => highlightCell(position),
    onMouseLeave: () => highlightCell(null),
    onRightClick: () => markCell(position),
    onTouch: () => paintCell(position),
  };
};

const paintTouchedCell = (
  evt: React.TouchEvent,
  size: number,
  grid: CellStatus[][],
  gridElement: HTMLElement,
  paintCell: (position: IPosition) => void,
) => {
  const { clientX, clientY } = evt.touches[0];
  const elem = document.elementFromPoint(clientX, clientY);
  if (elem && elem.parentNode === gridElement) {
    const cellIndex = Array.from(gridElement.children).indexOf(elem);
    const row = Math.floor(cellIndex / size);
    const column = cellIndex % size;
    const status = grid[row][column];
    if (isCellActive(status)) {
      paintCell({ row, column });
    }
  }
};

const onTouchMoveHandler = (
  size: number,
  grid: CellStatus[][],
  gridElement: HTMLElement,
  paintCell: (position: IPosition) => void,
): React.TouchEventHandler => (evt: React.TouchEvent) => {
  evt.persist();
  evt.preventDefault();
  requestAnimationFrame(() => paintTouchedCell(evt, size, grid, gridElement, paintCell));
};

export const Grid: React.FunctionComponent<IProps> = ({ size }) => {
  const ref = React.useRef();
  const { highlightCell } = React.useContext(HintsContext);
  const { grid, paintCell, markCell } = React.useContext(GridContext);
  return (
    <StyledGrid
      size={size}
      ref={ref}
      onTouchMove={onTouchMoveHandler(size, grid, ref.current, paintCell)}
    >
      {grid.map((_, row: number) => _.map(
        (status: CellStatus, column: number) => (
          <Cell
            size={size}
            key={`${row}-${column}`}
            status={status}
            {...getEventHandlers(status, { row, column }, { paintCell, markCell, highlightCell })}
          />
        ),
      ))}
    </StyledGrid>
  );
};
