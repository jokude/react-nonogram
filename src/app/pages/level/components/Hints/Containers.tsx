import styled from "styled-components";
import { getCellPixelSize, isHorizontal } from "./helpers";
import { IHintsProps } from "./types";

type ContainerProps = Pick<IHintsProps, "size" | "flow">;

export const Container = styled.div<ContainerProps>`
  display: grid;
  grid-gap: 10px;

  ${({ size, flow }) => `
    grid-template-${isHorizontal(flow) ? "row" : "column"}s: repeat(${size}, ${getCellPixelSize(size)}px);

    ${isHorizontal(flow) ? "justify-items: end;" : "align-self: flex-end; align-items: flex-end;"};
  `};
`;

export const Row = styled.div<ContainerProps & { total: number }>`
  display: grid;

  ${({ flow, size, total }) => `
    grid-template-${isHorizontal(flow) ? "column" : "row"}s: repeat(${total}, ${getCellPixelSize(size)}px)
  `};
`;

export const Cell = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
