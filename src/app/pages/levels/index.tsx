import * as React from "react";
import { RouteChildrenProps } from "react-router";
import { getCategories, getCategory } from "../../datasource/datasource";
import { CategoryList } from "./components/CategoryList";
import { LevelGrid } from "./components/LevelGrid";

export const Levels: React.FunctionComponent<RouteChildrenProps<{ categoryId: string }>> = ({ match }) => {
  const category = getCategory(match.params.categoryId);
  return (
    <div style={{ height: "100%" }}>
      <LevelGrid category={category} />
      <CategoryList categories={getCategories()} />
    </div>
  );
};
