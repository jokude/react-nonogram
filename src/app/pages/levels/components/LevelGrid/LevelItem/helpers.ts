import { transformName } from "Datasource/datasource";
import { ICategory } from "Types/Category";
import { ILevelSummary } from "Types/Level";
import { ILevelCardProps } from "../LevelCard";

export const getUnsolvedLevelInfo = (category: ICategory, level: ILevelSummary): ILevelCardProps => ({
  imageUrl: `question/${category.title}`,
  levelUrl: `/category/${category.title}/level/${level.id}`,
  title: "???",
});

export const getSolvedLevelInfo = (category: ICategory, level: ILevelSummary): ILevelCardProps => ({
  imageUrl: `${category.title}/${transformName(level.title)}`,
  levelUrl: `/category/${category.title}/level/${level.id}`,
  time: level.timeResult,
  title: level.title,
});

export const getItemInfo = (category: ICategory, level: ILevelSummary): ILevelCardProps => {
  const hasTimeResult = level.timeResult !== undefined;
  return hasTimeResult ? getSolvedLevelInfo(category, level) : getUnsolvedLevelInfo(category, level);
};
