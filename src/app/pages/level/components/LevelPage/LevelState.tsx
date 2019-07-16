import * as React from "react";
import { CategorySize } from "Types/Category";
import { ILevel } from "Types/Level";
import { GridProvider } from "../../context/grid";
import { HintsProvider } from "../../context/hints";
import { TimerProvider } from "../../context/timer";

interface ILevelStateProps {
  size: CategorySize;
  countdownSeconds: number;
  grid: ILevel["grid"];
  onTimeout: () => void;
  onGameSolved: (time: ILevel["timeResult"]) => void;
}

export const LevelState: React.FunctionComponent<ILevelStateProps> = ({
  countdownSeconds,
  size,
  grid,
  onTimeout,
  onGameSolved,
  children,
}) => (
  <TimerProvider
    countdownSeconds={countdownSeconds}
    onTimeout={onTimeout}
  >
    <GridProvider
      size={size}
      level={grid}
      onGridSolved={onGameSolved}
    >
      <HintsProvider>
        {children}
      </HintsProvider>
    </GridProvider>
  </TimerProvider>
);
