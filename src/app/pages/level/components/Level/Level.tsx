import { Topbar } from "Commons/components/Topbar";
import * as React from "react";
import { ILevel } from "Types/Level";
import { Grid } from "../Grid";
import { HorizontalHints, VerticalHints } from "../Hints";
import { Timer } from "../Timer";

const onContextMenuHandler = (evt: React.MouseEvent<HTMLElement>) => evt.preventDefault();

export interface ILevelProps {
  level: ILevel;
  size: number;
}

export const Level: React.FunctionComponent<ILevelProps> =
 ({ level, size }) => (
  <div>
    <Topbar>
      <Timer />
    </Topbar>
    <div style={{ userSelect: "none" }} onContextMenu={onContextMenuHandler}>
      <VerticalHints size={size} level={level.grid} />
      <div style={{ display: "flex" }}>
        <HorizontalHints size={size} level={level.grid} />
        <Grid size={size} />
      </div>
    </div>
  </div>
);
