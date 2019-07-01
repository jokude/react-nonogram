import { getCategory, transformName } from "Datasource/datasource";
import { setLevelTime } from "Datasource/storage";
import * as React from "react";
import { RouteChildrenProps } from "react-router";
import { ILevel } from "Types/Level";
import { GridProvider } from "../../context/grid";
import { HintsProvider } from "../../context/hints";
import { TimerProvider } from "../../context/timer";
import { SuccessDialog, TimeoutDialog } from "../Dialog";
import { Level } from "./Level";

type GameResult = null | "Success" | "Timeout";

export const LevelPage: React.FunctionComponent<RouteChildrenProps<{ categoryId: string, levelId: string }>> =
 ({ match: { params: { categoryId, levelId } } }) => {
  const category = getCategory(categoryId);
  const categoryLevel = category.levels.find((level: ILevel) => transformName(level.title) === levelId);
  const { size } = category;
  const [result, setResult] = React.useState<GameResult>(null);

  if (result === "Success") {
    return <SuccessDialog category={category} level={categoryLevel} />;
  } else if (result === "Timeout") {
    return <TimeoutDialog category={category} onReset={() => setResult(null)} />;
  }

  return (
    <TimerProvider
      countdownSeconds={category.countdownMinutes * 60}
      onTimeout={() => setResult("Timeout")}
    >
      <GridProvider
        size={size}
        level={categoryLevel.grid}
        onGridSolved={(time) => {
          setLevelTime(category.title, categoryLevel.title, time);
          setResult("Success");
        }}
      >
        <HintsProvider>
          <Level level={categoryLevel} size={size} />
        </HintsProvider>
      </GridProvider>
    </TimerProvider>
  );
};
