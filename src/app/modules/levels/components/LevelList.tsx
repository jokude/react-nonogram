import * as React from "react";
import styled from "styled-components";
import { ICategory } from "Types/Category";
import LevelItem from "./LevelItem";

interface IProps {
  category: ICategory;
}

const Wrapper = styled.div`
  overflowy: scroll;
  overflowx: hidden;
  height: calc(100% - 64px);
`;

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const GridItem = styled.div`
  max-width: 33.3333%;
  flex-basis: 33.3333%;

  @media (min-width: 600px) {
    max-width: 25%;
    flex-basis: 25%;
  }

  @media (min-width: 960px) {
    max-width: 16.6667%;
    flex-basis: 16.6667%;
  }
`;

const LevelList: React.StatelessComponent<IProps> = ({ category }) => {
  const levels = category.levels.map((level) => (
    <GridItem key={level.title}>
      <LevelItem category={category} level={level} />
    </GridItem>
  ));
  return (
    <Wrapper>
      <Grid>{levels}</Grid>
    </Wrapper>
  );
};

export default LevelList;
