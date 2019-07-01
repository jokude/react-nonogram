import { Breakpoints } from "Commons/constants";
import * as React from "react";
import { ICategory } from "Types/Category";
import { Grid } from "./Grid";
import { LevelItem } from "./LevelItem";
import { RotateTransition, RotateTransitionGroup } from "./Rotation";

interface IProps {
  category: ICategory;
}

const useRotateDirection = (categoryId: string) => {
  const prevCountRef = React.useRef<string>();

  React.useEffect(() => {
    prevCountRef.current = categoryId;
  });

  return parseInt(prevCountRef.current, 10) > parseInt(categoryId, 10);
};

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

export const LevelGrid: React.FunctionComponent<IProps> = ({ category }) => {
  const rotateLeft = useRotateDirection(category.title);
  return (
    <Grid>
      {category.levels.map((level, index) => {
        const rotateProps = { rotateLeft, delay: getDelay(rotateLeft, index) };
        return (
        <RotateTransitionGroup childrenProps={rotateProps} key={index}>
          <RotateTransition key={level.title} {...rotateProps}>
            <LevelItem key={level.title} category={category} level={level} />
          </RotateTransition>
        </RotateTransitionGroup>
      ); })}
    </Grid>
  );
};
