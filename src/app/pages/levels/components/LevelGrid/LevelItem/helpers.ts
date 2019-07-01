import { transformName } from "Datasource/datasource";
import { ICategory } from "Types/Category";
import { ILevel } from "Types/Level";
import { ILevelCardProps } from "../LevelCard";

export const getUnsolvedLevelInfo = (category: ICategory, level: ILevel): ILevelCardProps => ({
  imageUrl: `question/${category.title}`,
  levelUrl: `/category/${category.title}/level/${transformName(level.title)}`,
  title: "???",
});

export const getSolvedLevelInfo = (category: ICategory, level: ILevel): ILevelCardProps => ({
  imageUrl: `${category.title}/${transformName(level.title)}`,
  levelUrl: `/category/${category.title}/level/${transformName(level.title)}`,
  time: level.timeResult,
  title: level.title,
});

export const getItemInfo = (category: ICategory, level: ILevel): ILevelCardProps => {
  const hasTimeResult = level.timeResult !== undefined;
  return hasTimeResult ? getSolvedLevelInfo(category, level) : getUnsolvedLevelInfo(category, level);
};
