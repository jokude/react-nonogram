import * as React from "react";
import { HintsContext } from "../../context/hints";
import { IPosition } from "../../context/types";
import { Row } from "./Containers";
import { HintsFlow } from "./types";

interface IRowProps {
  total: number;
  rowIndex: number;
  flow: HintsFlow;
}

const checkHighlight = (position: IPosition, flow: HintsFlow, rowIndex: number) => {
  if (position === null) {
    return false;
  }
  return flow === HintsFlow.Horizontal ? rowIndex === position.row : rowIndex === position.column;
};

export const HintRow: React.FunctionComponent<IRowProps> = ({ total, rowIndex, flow, children }) => {
  const { highlightedCell } = React.useContext(HintsContext);
  const isHighlighted = checkHighlight(highlightedCell, flow, rowIndex);
  return (
    <Row total={total} flow={flow} highlighted={isHighlighted}>
      {children}
    </Row>
  );
};
