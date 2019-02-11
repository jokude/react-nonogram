import { styled } from "Lib/styledComponents";
import * as React from "react";
import { Link } from "react-router-dom";
import { ICategory } from "Types/Category";
import { ILevel } from "Types/Level";
import { transformName } from "../../../../../datasource/datasource";

interface IProps {
  category: ICategory;
  level: ILevel;
}

const Container = styled(Link)`
  color: black;
  text-decoration: none;
  border: 1px solid black;
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  height: 150px;
  transform-origin: center;
  transition: transform 0.1s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

export const LevelCard: React.FunctionComponent<IProps> = ({ category, level, children }) => (
  <Container to={`/category/${category.title}/level/${transformName(level.title)}`}>
    {children}
  </Container>
);
