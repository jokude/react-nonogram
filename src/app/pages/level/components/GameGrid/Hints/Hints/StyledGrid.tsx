import { Breakpoints } from "Commons/constants";
import styled from "styled-components";
import { GRID_GAP } from "../../../constants";
import { getCellSize } from "../../../getCellSize";
import { isHorizontal } from "../helpers";
import { IHintsProps } from "../types";

interface IStyledGridProps extends Pick<IHintsProps, "size" | "flow"> {}

export const StyledGrid = styled.div<IStyledGridProps>`
  display: grid;
  grid-gap: ${GRID_GAP}px;

  ${({ size, flow }) => `
    ${isHorizontal(flow) ? `
        justify-items: end;
        margin-right: 5px;
      ` :
      `
        align-self: flex-end;
        align-items: flex-end;
        justify-content: end;
        margin: 5px 0;
      `
    };

    grid-template-${isHorizontal(flow) ? "row" : "column"}s: repeat(${size}, ${getCellSize(true, size)}px);

    @media only screen and (min-width: ${Breakpoints.md}px) {
      grid-template-${isHorizontal(flow) ? "row" : "column"}s: repeat(${size}, ${getCellSize(false, size)}px);
    }

    ${size === 15 ? `
      @media only screen and (max-width: ${Breakpoints.sm}px) {
        grid-gap: 0;
      }
    ` : ""};
  `};
`;
