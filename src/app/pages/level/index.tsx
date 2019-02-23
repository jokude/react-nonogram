import * as React from "react";
import { RouteChildrenProps } from "react-router";
import { ILevel } from "Types/Level";
import { getCategory, transformName } from "../../datasource/datasource";
import { GameStateProvider } from "./components/GameContext";
import { Grid } from "./components/Grid";
import { HorizontalHints, VerticalHints } from "./components/Hints";

export const Level: React.SFC<RouteChildrenProps<{ categoryId: string, levelId: string }>> =
 ({ match: { params: { categoryId, levelId } } }) => {
  const category = getCategory(categoryId);
  const categoryLevel = category.levels.find((level: ILevel) => transformName(level.title) === levelId);
  return (
    <GameStateProvider size={category.size} level={categoryLevel.grid}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <VerticalHints size={category.size} level={categoryLevel.grid} />
        <div style={{ display: "flex", flexDirection: "row" }}>
          <HorizontalHints size={category.size} level={categoryLevel.grid} />
          <Grid size={category.size} />
        </div>
      </div>
    </GameStateProvider>
  );
};
