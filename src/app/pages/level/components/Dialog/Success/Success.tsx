import { Button } from "Commons/components/Button";
import { Icon } from "Commons/components/Icon";
import { transformName } from "Datasource/datasource";
import * as React from "react";
import { ICategory } from "Types/Category";
import { ILevel } from "Types/Level";
import { Container } from "../Container";
import { Title } from "./Title";

interface IProps {
  category: ICategory;
  level: ILevel;
}

export const SuccessDialog: React.FunctionComponent<IProps> = ({ category, level }) => (
  <Container>
    <Title>{level.title}</Title>
    <Icon alt="" role="presentation" src={`/${category.title}/${transformName(level.title)}`} />
    <Button to={`/category/${category.title}`}>Select Level</Button>
  </Container>
);
