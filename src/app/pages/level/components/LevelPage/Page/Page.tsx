import { Topbar } from "Commons/components/Topbar";
import * as React from "react";
import { CategorySize } from "Types/Category";
import { ILevel } from "Types/Level";
import { GameGrid } from "../../GameGrid";
import { Timer } from "../../Timer";
import { PageContainer } from "./PageContainer";

export interface ILevelProps {
  level: ILevel;
  size: CategorySize;
}

export const Page: React.FunctionComponent<ILevelProps> =
 ({ level, size }) => (
  <PageContainer>
    <Topbar>
      <Timer />
    </Topbar>
    <GameGrid size={size} grid={level.grid} />
  </PageContainer>
);
