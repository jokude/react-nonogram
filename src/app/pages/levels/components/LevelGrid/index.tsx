import * as React from "react";
import styled from "styled-components";
import { ICategory } from "Types/Category";
import { LevelItem } from "./LevelItem";

interface IProps {
  category: ICategory;
}

const Grid = styled.div`
  margin: 20px 0;
  display: grid;
  grid-gap: 5px;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  padding-bottom: 60px;

  @media only screen and (min-width: 600px) {
    padding: 0;
    grid-gap: 10px;
    grid-template-columns: repeat(5, 1fr);
  }

  @media only screen and (min-width: 768px) {
    grid-template-columns: repeat(6, 1fr);
  }
`;

export const LevelGrid: React.FunctionComponent<IProps> = ({ category }) => (
  <Grid>
    {category.levels.map((level) => (
      <LevelItem key={level.title} category={category} level={level} />
    ))}
  </Grid>
);
