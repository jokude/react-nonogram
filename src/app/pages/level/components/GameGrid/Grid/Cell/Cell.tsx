import * as React from "react";
import { CategorySize } from "Types/Category";
import { CellStatus } from "Types/CellStatus";
import { StyledCell } from "./StyledCell";

interface IProps {
  size: CategorySize;
  status: CellStatus;
  onClick?: React.MouseEventHandler;
  onTouch?: React.TouchEventHandler;
  onRightClick: React.MouseEventHandler;
  onMouseEnter: React.MouseEventHandler;
  onMouseLeave: React.MouseEventHandler;
}

const touchEnabled = "ontouchstart" in document.documentElement;

const onContextMenuHandler = (callback: React.MouseEventHandler) => (evt: React.MouseEvent<HTMLElement>) => {
  evt.preventDefault();
  callback(evt);
};

const onMouseEnterHandler = (
  onLeftClick: React.MouseEventHandler,
  onRightClick: React.MouseEventHandler,
  onMouseEnter: React.MouseEventHandler,
) =>
  (evt: React.MouseEvent<HTMLElement>) => {
    if (touchEnabled) {
      return;
    }
    onMouseEnter(evt);
    if (evt.buttons === 1) {
      onLeftClick(evt);
    } else if (evt.buttons === 2) {
      onContextMenuHandler(onRightClick)(evt);
    }
  };

const onClickHandler = (
  onClick: React.MouseEventHandler,
) => (evt: React.MouseEvent) => {
  if (!touchEnabled) {
    onClick(evt);
  }
};

const onTouchStartEnterHandler = (
  onTouchStart: React.TouchEventHandler,
) => (evt: React.TouchEvent) => onTouchStart(evt);

const Cell: React.FunctionComponent<IProps> = ({
  status, onClick, onTouch, onRightClick, onMouseEnter, onMouseLeave, size,
}) => (
  <StyledCell
    size={size}
    status={status}
    onClick={onClickHandler(onClick)}
    onContextMenu={onContextMenuHandler(onRightClick)}
    onTouchStart={onTouchStartEnterHandler(onTouch)}
    onMouseEnter={onMouseEnterHandler(onClick, onRightClick, onMouseEnter)}
    onMouseLeave={onMouseLeave}
  />
);

Cell.defaultProps = {
  onClick: () => undefined,
  onMouseEnter: () => undefined,
  onMouseLeave: () => undefined,
  onRightClick: () => undefined,
};

export { Cell };
