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
        &:after {
          transform: scale(1);
          background-color: #967AA1;
          border-radius: inherit;
        }
      `;
    case CellStatus.Failed:
      return `
        border-width: 0;
        &:after {
          background-image: url('/assets/svg/grid/failed.svg');
          background-repeat: no-repeat;
          background-size: contain;
          transform: scale(1);
          width: 90%;
          height: 90%;
        }
      `;
    case CellStatus.Marked:
      return `
        border-width: 0;
        &:after {
          background-image: url('/assets/svg/grid/marked.svg');
          background-repeat: no-repeat;
          background-size: contain;
          transform: scale(1);
          width: 90%;
          height: 90%;
        }
      `;
    case CellStatus.Empty:
      return `
        &:hover {
          border-color: #985F99;
          border-width: 3px;
          background-color: #F5F0F5;
        }

        &:after {
          background-color: white;
          background-image: url('/assets/svg/grid/marked.svg');
          background-repeat: no-repeat;
          background-size: contain;
          width: 90%;
          height: 90%;
        }
      `;
  }
};

const Container = styled.div<{ status: CellStatus }>`
  background-color: white;
  border: 2px solid #B9B2D2;
  border-radius: 2px;
  padding: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: border 0.2s ease, background-color 0.2s ease;

  &:after {
    content: '';
    width: 100%;
    height: 100%;
    display: block;
    transform: scale(0);
    transition: transform 0.3s ease;
  }

  &:hover {
    cursor: pointer;
  }

  ${({ status }) => getStatusStyle(status)};
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

export const Cell: React.FunctionComponent<IProps> = ({
  status, onClick, onRightClick,
}) => {
  return (
    <Container
      status={status}
      onClick={onClick}
      onContextMenu={onContextMenuHandler(onRightClick)}
      onMouseEnter={onMouseEnterHandler(onClick, onRightClick)}
    />
  );
};
