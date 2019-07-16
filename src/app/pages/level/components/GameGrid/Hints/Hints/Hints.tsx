import * as React from "react";
import { Cell as HintCell } from "../Cell";
import { buildHints, isHorizontal, transpose } from "../helpers";
import { Row as HintRow } from "../Row";
import { IHintsProps } from "../types";
import { StyledGrid } from "./StyledGrid";

export const Hints: React.FunctionComponent<IHintsProps> = ({ level, size, flow }) => {
  const horizontal = isHorizontal(flow);
  const hints = horizontal ? level.map(buildHints) : transpose(level).map(buildHints);
  return (
    <StyledGrid size={size} flow={flow}>
      {hints.map((hint, rowIndex) => (
        <HintRow size={size} total={hint.length} flow={flow} rowIndex={rowIndex} key={rowIndex}>
          {hint.map((cell, cellIndex) => (
            <HintCell size={size} isHorizontal={horizontal} rowIndex={rowIndex} key={cellIndex} {...cell} />
          ))}
        </HintRow>
      ))}
    </StyledGrid>
  );
};
