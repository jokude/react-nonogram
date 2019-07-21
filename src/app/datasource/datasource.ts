import { ICategory } from "Types/Category";
import { ILevel, ILevelSummary } from "Types/Level";
import gameData from "./gameData";
import { getLevelTime } from "./storage";
import { IDataCategory, IDataLevel } from "./types";

const chunkArray = <T>(array: T[], chunkSize: number): T[][] => {
  const arrayCopy = array.slice(0);
  const result = [] as T[][];

  while (arrayCopy.length) {
    result.push(arrayCopy.splice(0, chunkSize));
  }

  return result;
};

const parseCategory = (category: IDataCategory): ICategory => ({
  countdownMinutes: category.countdownMinutes,
  size: category.size,
  title: category.title,
});

const parseLevelSummary = (category: IDataCategory, level: IDataLevel): ILevelSummary => ({
  timeResult: getLevelTime(category.title, level.title),
  title: level.title,
});

const parseLevel = (category: IDataCategory, level: IDataLevel): ILevel => ({
  category: parseCategory(category),
  grid: chunkArray(
    level.grid.split("").map((solution: string) => Boolean(parseInt(solution, 2))),
    category.size,
  ),
  title: level.title,
});

const findCategoryByTitle = (title: string): IDataCategory =>
  gameData.find((categoryData) => categoryData.title === title) as IDataCategory;

export const getCategoryNames = (): Array<ICategory["title"]> => gameData.map((category) => category.title);

export const getCategory = (title: string): ICategory =>
  parseCategory(findCategoryByTitle(title));

export const getCategoryWithLevels = (title: string): ICategory & { levels: ILevelSummary[] } => {
  const category = findCategoryByTitle(title);
  return {
    ...parseCategory(category),
    levels: category.levels.map((level) => parseLevelSummary(category, level)),
  };
};

export const getLevel = (categoryId: string, levelId: string): ILevel => {
  const category = gameData.find((categoryData) => categoryData.title === categoryId) as IDataCategory;
  const result = category.levels.find((level) => transformName(level.title) === levelId);
  return parseLevel(category, result);
};

export const transformName = (name: string): string => name.replace(/\s/g, "-").toLocaleLowerCase();
