import * as React from "react";
import { CategoryList } from "../CategoryList";
import { LevelGrid } from "../LevelGrid";
import { Container } from "./Container";

export const Page: React.FunctionComponent = () => (
  <Container>
    <LevelGrid />
    <CategoryList />
  </Container>
);
