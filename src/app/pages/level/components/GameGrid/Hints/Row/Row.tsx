import * as React from "react";
import { CategorySize } from "Types/Category";
import { HintsContext } from "../../../../context/hints";
import { IPosition } from "../../../../context/types";
import { HintsFlow } from "../types";
import { StyledRow } from "./StyledRow";

export interface IRowProps {
  total: number;
  rowIndex: number;
  flow: HintsFlow;
  size: CategorySize;
}

const checkHighlight = (position: IPosition, flow: HintsFlow, rowIndex: number) => {
  if (position === null) {
    return false;
  }
  return flow === HintsFlow.Horizontal ? rowIndex === position.row : rowIndex === position.column;
};

export const Row: React.FunctionComponent<IRowProps> = ({ total, rowIndex, flow, children }) => {
  const { highlightedCell } = React.useContext(HintsContext);
  const isHighlighted = checkHighlight(highlightedCell, flow, rowIndex);
  return (
    <StyledRow total={total} flow={flow} highlighted={isHighlighted}>
      {children}
    </StyledRow>
  );
};
