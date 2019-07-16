import { Breakpoints } from "Commons/constants";
import styled from "styled-components";
import { CategorySize } from "Types/Category";
import { GRID_GAP } from "../../../constants";
import { getCellSize } from "../../../getCellSize";

const getGridTemplate = (compact: boolean, size: CategorySize) => {
  const template = `repeat(${size}, ${getCellSize(compact, size)}px)`;
  return `${template} / ${template}`;
};

interface IStyledGridProps {
  size: CategorySize;
}

export const StyledGrid = styled.div<IStyledGridProps>`
  display: grid;
  grid-gap: ${GRID_GAP}px;
  touch-action: none;

  ${({ size }) => `
    grid-template: ${getGridTemplate(true, size)};

    @media only screen and (min-width: ${Breakpoints.md}px) {
      grid-template: ${getGridTemplate(false, size)};
    }

    ${size === 15 ? `
      @media only screen and (max-width: ${Breakpoints.sm}px) {
        grid-gap: 0;
      }
    ` : ""};
  `};
`;
