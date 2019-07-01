import { getCategories, getCategory } from "Datasource/datasource";
import * as React from "react";
import { RouteChildrenProps } from "react-router";
import { CategoryList } from "../CategoryList";
import { LevelGrid } from "../LevelGrid";
import { Container } from "./Container";

export const Page: React.FunctionComponent<RouteChildrenProps<{ categoryId: string }>> = ({ match }) => {
  const categoryId = match.params.categoryId;
  const category = getCategory(categoryId);
  return (
    <Container>
      <LevelGrid category={category} />
      <CategoryList categories={getCategories()} />
    </Container>
  );
};
