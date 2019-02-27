import styled from "styled-components";
import { GRID_GAP } from "../constants";
import { getCellPixelSize, isHorizontal } from "./helpers";
import { IHintsProps } from "./types";

type ContainerProps = Pick<IHintsProps, "size" | "flow">;
type RowProps = Pick<IHintsProps, "flow"> & { total: number, highlighted: boolean };
interface ICellProps { solved: boolean; highlight: boolean; }

export const Container = styled.div<ContainerProps>`
  display: grid;
  grid-gap: ${GRID_GAP}px;

  ${({ size, flow }) => `
    grid-template-${isHorizontal(flow) ? "row" : "column"}s: repeat(${size}, ${getCellPixelSize(size)}px);

    ${isHorizontal(flow) ?
      "justify-items: end; margin-right: 5px;" :
      "align-self: flex-end; align-items: flex-end; justify-content: end; margin: 5px 0;"
    };
  `};
`;

export const Row = styled.div<RowProps>`
  display: grid;
  border-radius: 4px;
  transition: background-color 0.5s ease;

  ${({ flow, total, highlighted }) => `
    grid-template-${isHorizontal(flow) ? "column" : "row"}s: repeat(${total}, 30px);
    background-color: ${highlighted ? "rgba(243, 206, 224, 0.5)" : "white"};
  `};
`;

export const Cell = styled.div<ICellProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  font-size: 16px;
  transition: color 0.2s ease;

  color: ${({ solved, highlight }) => solved ? "lightgrey" : (highlight ? "#E76D83" : "#6987C9")};
`;
