import * as React from "react";
import { CategorySize } from "Types/Category";
import { ILevel } from "Types/Level";
import { Grid } from "./Grid";
import { GridContainer } from "./GridContainer";
import { HorizontalHints, VerticalHints } from "./Hints";

export interface IGameGridProps {
  grid: ILevel["grid"];
  size: CategorySize;
}

export const GameGrid: React.FunctionComponent<IGameGridProps> =
 ({ grid, size }) => (
  <GridContainer>
    <VerticalHints size={size} level={grid} />
    <div style={{ display: "flex" }}>
      <HorizontalHints size={size} level={grid} />
      <Grid size={size} />
    </div>
  </GridContainer>
);
