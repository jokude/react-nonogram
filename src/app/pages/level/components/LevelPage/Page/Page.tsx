import { getLevel } from "Datasource/datasource";
import * as React from "react";
import { RouteChildrenProps } from "react-router";
import { SuccessDialog, TimeoutDialog } from "../../Dialog";
import { Level } from "../Level";
import { PageContainer } from "./PageContainer";

type GameResult = null | "Success" | "Timeout";

type IPageProps = RouteChildrenProps<{
  categoryId: string;
  levelId: string;
}>;

export const Page: React.FunctionComponent<IPageProps> = ({ match: { params: { categoryId, levelId } } }) => {
  const [result, setResult] = React.useState<GameResult>(null);
  const level = getLevel(categoryId, levelId);

  return (
    <PageContainer>
      {
        result === "Success" ? (
          <SuccessDialog category={level.category} level={level} />
        ) : (
          result === "Timeout" ? (
            <TimeoutDialog category={level.category} onReset={() => setResult(null)} />
          ) : (
            <Level
              category={level.category}
              level={level}
              onTimeout={() => setResult("Timeout")}
              onGameSolved={() => setResult("Success")}
            />
          )
        )
      }
    </PageContainer>
  );
};
