import { Breakpoints } from "Commons/constants";
import styled from "styled-components";
import { CategorySize } from "Types/Category";

interface IStyledCellProps {
  solved: boolean;
  highlight: boolean;
  size: CategorySize;
}

const getColor = (solved: boolean, highlight: boolean) =>
  solved ? "lightgrey" : (highlight ? "#E76D83" : "#6987C9");

export const StyledCell = styled.div<IStyledCellProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 16px;
  transition: color 0.2s ease;

  ${({ solved, highlight, size }) => `
    color: ${getColor(solved, highlight)};

    ${size === 15 ? `
      @media only screen and (max-width: ${Breakpoints.sm}px) {
        font-weight: 500;
        font-size: 12px;
      }
    ` : ""}
  `}
`;
