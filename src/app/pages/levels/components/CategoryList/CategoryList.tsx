import { getCategoryNames } from "Datasource/datasource";
import * as React from "react";
import { CategoryActive } from "./CategoryActive";
import { CategoryItem } from "./CategoryItem";
import { Container } from "./Container";

const categoryNames = getCategoryNames();

const Categories: React.ReactElement[] = categoryNames.map((title) => (
  <CategoryItem key={title} title={title} />
));

export const CategoryList: React.FunctionComponent = () => (
  <Container>
    {Categories}
    <CategoryActive categoryNames={categoryNames} />
  </Container>
);
