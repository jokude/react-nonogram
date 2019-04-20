import * as React from "react";
import { RouteChildrenProps } from "react-router";
import { ILevel } from "Types/Level";
import { getCategory, transformName } from "../../datasource/datasource";
import { Level } from "./components/Level";
import { GridProvider } from "./context/grid";
import { HintsProvider } from "./context/hints";
import { TimerProvider } from "./context/timer";

export const LevelPage: React.FunctionComponent<RouteChildrenProps<{ categoryId: string, levelId: string }>> =
 ({ match: { params: { categoryId, levelId } } }) => {
  const category = getCategory(categoryId);
  const categoryLevel = category.levels.find((level: ILevel) => transformName(level.title) === levelId);
  const size = category.size;
  return (
    <TimerProvider
      countdownSeconds={category.countdownMinutes * 60}
      onTimeout={() => {}}
    >
      <GridProvider
        size={size}
        level={categoryLevel.grid}
        onPaintFail={() => {}}
        onGridSolved={() => {}}
      >
        <HintsProvider>
          <Level level={categoryLevel} size={size} />
        </HintsProvider>
      </GridProvider>
    </TimerProvider>
  );
};
