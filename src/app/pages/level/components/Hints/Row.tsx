import * as React from "react";
import { HighlightContext } from "../GameContext/highlight";
import { IPosition } from "../GameContext/types";
import { Row } from "./Containers";
import { HintsFlow } from "./types";

interface IRowProps {
  total: number;
  rowIndex: number;
  flow: HintsFlow;
}

const isHighlighted = (position: IPosition, flow: HintsFlow, rowIndex: number) => {
  if (position === null) {
    return false;
  }
  return flow === HintsFlow.Horizontal ? rowIndex === position.row : rowIndex === position.column;
};

export const HintRow: React.FunctionComponent<IRowProps> = ({ total, rowIndex, flow, children }) => {
   const { highlightedCell } = React.useContext(HighlightContext);
   return (
    <Row total={total} flow={flow} highlighted={isHighlighted(highlightedCell, flow, rowIndex)}>
      {children}
    </Row>
  );
};
