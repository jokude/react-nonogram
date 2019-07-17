import { setLevelTime } from "Datasource/storage";
import * as React from "react";
import { ICategory } from "Types/Category";
import { ILevel } from "Types/Level";
import { GridProvider } from "../../../context/grid";
import { HintsProvider } from "../../../context/hints";
import { TimerProvider } from "../../../context/timer";

export interface ILevelStateProps {
  category: ICategory;
  level: ILevel;
  onTimeout: () => void;
  onGameSolved: () => void;
}

export const LevelState: React.FunctionComponent<ILevelStateProps> = ({
  category,
  level,
  onTimeout,
  onGameSolved,
  children,
}) => (
  <TimerProvider
    countdownSeconds={category.countdownMinutes * 60}
    onTimeout={onTimeout}
  >
    <GridProvider
      size={category.size}
      level={level.grid}
      onGridSolved={(time) => {
        setLevelTime(category.title, level.title, time);
        onGameSolved();
      }}
    >
      <HintsProvider>
        {children}
      </HintsProvider>
    </GridProvider>
  </TimerProvider>
);
