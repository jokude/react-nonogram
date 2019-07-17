import { getCategory, transformName } from "Datasource/datasource";
import * as React from "react";
import { RouteChildrenProps } from "react-router";
import { ICategory } from "Types/Category";
import { ILevel } from "Types/Level";
import { SuccessDialog, TimeoutDialog } from "../../Dialog";
import { Level } from "../Level";
import { PageContainer } from "./PageContainer";

type GameResult = null | "Success" | "Timeout";

type IPageProps = RouteChildrenProps<{
  categoryId: ICategory["title"];
  levelId: ILevel["title"];
}>;

export const Page: React.FunctionComponent<IPageProps> = ({ match: { params: { categoryId, levelId } } }) => {
  const category = getCategory(categoryId);
  const categoryLevel = category.levels.find((level: ILevel) => transformName(level.title) === levelId);
  const [result, setResult] = React.useState<GameResult>(null);

  return (
    <PageContainer>
      {
        result === "Success" ? (
          <SuccessDialog category={category} level={categoryLevel} />
        ) : (
          result === "Timeout" ? (
            <TimeoutDialog category={category} onReset={() => setResult(null)} />
          ) : (
            <Level
              category={category}
              level={categoryLevel}
              onTimeout={() => setResult("Timeout")}
              onGameSolved={() => setResult("Success")}
            />
          )
        )
      }
    </PageContainer>
  );
};
