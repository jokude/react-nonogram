import * as React from "react";
import { Container } from "./Container";

interface IProps {
  title: React.ReactText;
}

const BaseCategoryItem: React.FunctionComponent<IProps> = ({
  title,
}) => (
  <Container
    to={`/category/${title}`}
  >
    {title}
  </Container>
);

export const CategoryItem = BaseCategoryItem;
