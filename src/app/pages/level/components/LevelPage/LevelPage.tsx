import { getCategory, transformName } from "Datasource/datasource";
import { setLevelTime } from "Datasource/storage";
import * as React from "react";
import { RouteChildrenProps } from "react-router";
import { ILevel } from "Types/Level";
import { SuccessDialog, TimeoutDialog } from "../Dialog";
import { LevelState } from "./LevelState";
import { Page } from "./Page";

type GameResult = null | "Success" | "Timeout";

export const LevelPage: React.FunctionComponent<RouteChildrenProps<{ categoryId: string, levelId: string }>> =
 ({ match: { params: { categoryId, levelId } } }) => {
  const category = getCategory(categoryId);
  const categoryLevel = category.levels.find((level: ILevel) => transformName(level.title) === levelId);
  const { countdownMinutes, size } = category;
  const [result, setResult] = React.useState<GameResult>(null);

  if (result === "Success") {
    return <SuccessDialog category={category} level={categoryLevel} />;
  } else if (result === "Timeout") {
    return <TimeoutDialog category={category} onReset={() => setResult(null)} />;
  }

  return (
    <LevelState
      size={size}
      countdownSeconds={countdownMinutes * 60}
      grid={categoryLevel.grid}
      onTimeout={() => setResult("Timeout")}
      onGameSolved={(time) => {
        setLevelTime(category.title, categoryLevel.title, time);
        setResult("Success");
      }}
    >
      <Page level={categoryLevel} size={size} />
    </LevelState>
  );
};
