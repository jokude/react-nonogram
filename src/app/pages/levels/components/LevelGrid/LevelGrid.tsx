import { Breakpoints } from "Commons/constants";
import { getCategoryWithLevels } from "Datasource/datasource";
import * as React from "react";
import { RouteChildrenProps, withRouter } from "react-router";
import { ICategory } from "Types/Category";
import { GridContainer } from "./GridContainer";
import { LevelItem } from "./LevelItem";
import { Rotate, useRotateDirection } from "./Rotation";

interface IProps extends RouteChildrenProps<{ categoryId: ICategory["title"] }> {}

const getColumnNumber = (): number => {
  const screenWidth = window.innerWidth;
  if (screenWidth > Breakpoints.lg) {
    return 6;
  } else if (screenWidth > Breakpoints.md) {
    return 5;
  } else if (screenWidth > Breakpoints.sm) {
    return 4;
  }
  return 3;
};

const getDelay = (rotateLeft: boolean, index: number) => {
  const columnNumber = getColumnNumber();
  return (rotateLeft ? columnNumber - (index % columnNumber) : index % columnNumber) * 80;
};

const BaseLevelGrid: React.FunctionComponent<IProps> = ({ match }) => {
  const categoryId = match.params.categoryId;
  const category = getCategoryWithLevels(categoryId);
  const rotateLeft = useRotateDirection(category.title);
  return (
    <GridContainer>
      {category.levels.map((level, index) => (
        <Rotate
          key={index}
          groupKey={index}
          transitionKey={level.title}
          rotateLeft={rotateLeft}
          delay={getDelay(rotateLeft, index)}
        >
          <LevelItem category={category} level={level} />
        </ Rotate>
      ))}
    </GridContainer>
  );
};

export const LevelGrid = withRouter(BaseLevelGrid);
