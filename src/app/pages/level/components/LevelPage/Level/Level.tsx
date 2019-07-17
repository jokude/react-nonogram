import { Topbar } from "Commons/components/Topbar";
import * as React from "react";
import { GameGrid } from "../../GameGrid";
import { Timer } from "../../Timer";
import { ILevelStateProps, LevelState } from "./LevelState";

export const Level: React.FunctionComponent<ILevelStateProps> = (props) => (
  <LevelState {...props}>
    <Topbar>
      <Timer />
    </Topbar>
    <GameGrid size={props.category.size} grid={props.level.grid} />
  </LevelState>
);
