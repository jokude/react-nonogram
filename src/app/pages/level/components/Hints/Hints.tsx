import * as React from "react";
import { Cell, Container, Row } from "./Containers";
import { buildHints, isHorizontal, transpose } from "./helpers";
import { IHintsProps } from "./types";

export const Hints: React.FunctionComponent<IHintsProps> = ({ level, size, flow }) => {
  const hints = isHorizontal(flow) ? level.map(buildHints) : transpose(level).map(buildHints);
  return (
    <Container size={size} flow={flow}>
      {hints.map((hint, rowIndex) => (
        <Row size={size} total={hint.length} flow={flow} key={rowIndex}>
          {hint.map((cell, cellIndex) => <Cell key={cellIndex}>{cell.total}</Cell>)}
        </Row>
      ))}
    </Container>
  );
};
