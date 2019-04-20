import * as React from "react";
import { IPosition } from "../types";
import { IHintOutput } from "./types";

export const useHintHightlighter = (): IHintOutput => {
  const [highlight, setHighlight] = React.useState(null);
  const highlightCell = (position: IPosition = null) => setHighlight(position);

  return { highlightedCell: highlight, highlightCell };
};
