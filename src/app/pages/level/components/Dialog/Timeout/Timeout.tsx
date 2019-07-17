import { Button } from "Commons/components/Button";
import * as React from "react";
import { ICategory } from "Types/Category";
import { Container } from "../Container";

export interface IProps {
  category: ICategory;
  onReset: () => void;
}

export const TimeoutDialog: React.FunctionComponent<IProps> = ({ category, onReset }) => (
  <Container>
    <Button to="#" onClick={onReset}>Try Again</Button>
    <Button to={`/category/${category.title}`}>Select Level</Button>
  </Container>
);
