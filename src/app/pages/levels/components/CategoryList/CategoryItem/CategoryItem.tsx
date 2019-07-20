import * as React from "react";
import { Container } from "./Container";

interface IProps {
  title: React.ReactText;
}

export const CategoryItem: React.FunctionComponent<IProps> = ({
  title,
}) => (
  <Container
    to={`/category/${title}`}
    replace={true}
  >
    {title}
  </Container>
);
