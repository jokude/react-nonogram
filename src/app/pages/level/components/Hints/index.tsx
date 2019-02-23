import * as React from "react";
import { Hints } from "./Hints";
import { HintsFlow, IHintsProps } from "./types";

type HintProps = Pick<IHintsProps, "size" | "level">;

export const HorizontalHints: React.FunctionComponent<HintProps> =
  (props) => <Hints {...props} flow={HintsFlow.Horizontal} />;

export const VerticalHints: React.FunctionComponent<HintProps> =
  (props) => <Hints {...props} flow={HintsFlow.Vertical} />;
