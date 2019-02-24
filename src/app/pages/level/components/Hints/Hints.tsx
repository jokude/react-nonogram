import * as React from "react";
import { HintCell } from "./Cell";
import { Container, Row } from "./Containers";
import { buildHints, isHorizontal, transpose } from "./helpers";
import { IHintsProps } from "./types";

export const Hints: React.FunctionComponent<IHintsProps> = ({ level, size, flow }) => {
  const horizontal = isHorizontal(flow);
  const hints = horizontal ? level.map(buildHints) : transpose(level).map(buildHints);
  return (
    <Container size={size} flow={flow}>
      {hints.map((hint, rowIndex) => (
        <Row total={hint.length} flow={flow} key={rowIndex}>
          {hint.map((cell, cellIndex) => (
            <HintCell isHorizontal={horizontal} rowIndex={rowIndex} key={cellIndex} {...cell} />
          ))}
        </Row>
      ))}
    </Container>
  );
};
