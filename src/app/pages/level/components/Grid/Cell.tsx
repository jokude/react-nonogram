import * as React from "react";
import styled from "styled-components";
import { CellStatus } from "Types/CellStatus";

interface IProps {
  status: CellStatus;
  onClick: () => void;
  onRightClick: () => void;
}

const getStatusStyle = (status: CellStatus): string => {
  switch (status) {
    case CellStatus.Solved:
      return `
        background-color: black;
      `;
    case CellStatus.Failed:
      return `
        background-color: red;
      `;
    case CellStatus.Marked:
      return `
        background-color: grey;
      `;
    case CellStatus.Empty:
      return `
        background-color: white;
      `;
  }
};

const Container = styled.div<{ status: CellStatus }>`
  background-color: white;
  border: 1px solid black;
  ${({ status }) => getStatusStyle(status)};

  &:hover {
    cursor: pointer;
  }
`;

const onContextMenuHandler = (callback: () => void) => (evt: React.MouseEvent<HTMLElement>) => {
  evt.preventDefault();
  callback();
};

const onMouseEnterHandler = (onLeftClick: () => void, onRightClick: () => void) =>
  (evt: React.MouseEvent<HTMLElement>) => {
    if (evt.buttons === 1) {
      onLeftClick();
    } else if (evt.buttons === 2) {
      onContextMenuHandler(onRightClick)(evt);
    }
  };

export const Cell: React.FunctionComponent<IProps> = ({ status, onClick, onRightClick }) => {
  return (
    <Container
      status={status}
      onClick={onClick}
      onContextMenu={onContextMenuHandler(onRightClick)}
      onMouseEnter={onMouseEnterHandler(onClick, onRightClick)}
    />
  );
};
