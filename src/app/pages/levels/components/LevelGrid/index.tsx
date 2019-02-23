import * as React from "react";
import styled from "styled-components";
import { ICategory } from "Types/Category";
import { LevelItem } from "./LevelItem";

interface IProps {
  category: ICategory;
}

const Wrapper = styled.div`
  margin: 20px 0;
`;

const Grid = styled.div`
  display: grid;
  grid-gap: 2px;
  grid-template-columns: repeat(6, 1fr);
`;

export const LevelGrid: React.FunctionComponent<IProps> = ({ category }) => (
  <Wrapper>
    <Grid>
      {category.levels.map((level) => (
        <LevelItem key={level.title} category={category} level={level} />
      ))}
    </Grid>
  </Wrapper>
);
