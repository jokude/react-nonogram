import * as React from "react";
import { RouteChildrenProps } from "react-router";
import { ILevel } from "Types/Level";
import { getCategory, transformName } from "../../datasource/datasource";
import { Topbar } from "../core/Topbar";
import { GameStateProvider } from "./components/GameContext";
import { HighlightStateProvider } from "./components/GameContext/highlight";
import { Grid } from "./components/Grid";
import { HorizontalHints, VerticalHints } from "./components/Hints";
import { Timer } from "./components/Timer";

const onContextMenuHandler = (evt: React.MouseEvent<HTMLElement>) => evt.preventDefault();

export const Level: React.FunctionComponent<RouteChildrenProps<{ categoryId: string, levelId: string }>> =
 ({ match: { params: { categoryId, levelId } } }) => {
  const category = getCategory(categoryId);
  const categoryLevel = category.levels.find((level: ILevel) => transformName(level.title) === levelId);
  return (
    <GameStateProvider size={category.size} level={categoryLevel.grid}>
      <HighlightStateProvider>
        <div>
          <Topbar>
            <Timer countdownSeconds={category.countdownMinutes * 60} />
          </Topbar>
          <div style={{ userSelect: "none" }} onContextMenu={onContextMenuHandler}>
            <VerticalHints size={category.size} level={categoryLevel.grid} />
            <div style={{ display: "flex" }}>
              <HorizontalHints size={category.size} level={categoryLevel.grid} />
              <Grid size={category.size} />
            </div>
          </div>
        </div>
      </HighlightStateProvider>
    </GameStateProvider>
  );
};
