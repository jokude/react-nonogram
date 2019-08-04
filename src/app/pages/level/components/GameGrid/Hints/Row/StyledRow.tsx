import { Breakpoints } from "Commons/constants";
import styled from "styled-components";
import { isHorizontal } from "../helpers";
import { IHintsProps } from "../types";

interface IRowProps extends Pick<IHintsProps, "flow"> {
  highlighted: boolean;
  total: number;
}

export const StyledRow = styled.div<IRowProps>`
  display: grid;
  border-radius: 4px;
  transition: background-color 0.5s ease;

  ${({ flow, total, highlighted }) => `
    background-color: ${highlighted ? "rgba(243, 206, 224, 0.5)" : "white"};
    grid-template-${isHorizontal(flow) ? "column" : "row"}s: repeat(${total}, minmax(auto, 20px));

    @media only screen and (min-width: ${Breakpoints.lg}px) {
      grid-template-${isHorizontal(flow) ? "column" : "row"}s: repeat(${total}, minmax(auto, 30px));
    }
  `};
`;
