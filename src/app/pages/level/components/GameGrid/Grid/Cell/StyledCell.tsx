import { Breakpoints } from "Commons/constants";
import styled from "styled-components";
import { CategorySize } from "Types/Category";
import { CellStatus } from "Types/CellStatus";

interface ICellProps {
  status: CellStatus;
  size: CategorySize;
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
          background-image: url('${BASE_PATH}assets/svg/grid/failed.svg');
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
          background-image: url('${BASE_PATH}assets/svg/grid/marked.svg');
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
          background-image: url('${BASE_PATH}assets/svg/grid/marked.svg');
          background-repeat: no-repeat;
          background-size: contain;
          width: 90%;
          height: 90%;
        }
      `;
  }
};

export const StyledCell = styled.div<ICellProps>`
  background-color: white;
  border: 2px solid #B9B2D2;
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px;
  transition: border 0.2s ease, background-color 0.2s ease;

  &:after {
    content: '';
    width: 100%;
    height: 100%;
    display: block;
    transform: scale(0);
    transition: transform 0.2s ease;
  }

  &:hover {
    cursor: pointer;
  }

  &:focus {
    outline: none;
  }

  ${({ status, size }) => `
    ${getStatusStyle(status)};

    ${size === 15 && `
      @media only screen and (max-width: ${Breakpoints.sm}px) {
        border: none;
        outline: 1px solid #9892AC;
        border-radius: 0;
        padding: 0;
      }
    `}
  `};
`;
