import { ICategory } from "Types/Category";
import { ILevel } from "Types/Level";
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
  levels: category.levels.map((level: IDataLevel) => parseLevel(category, level)),
  size: category.size,
  title: category.title,
});

const parseLevel = (category: IDataCategory, level: IDataLevel): ILevel => ({
  grid: chunkArray(
    level.grid.split("").map((solution: string) => Boolean(parseInt(solution, 2))),
    category.size,
  ),
  timeResult: getLevelTime(category.title, level.title),
  title: level.title,
});

export const getCategoryNames = (): string[] => gameData.map((category) => category.title);

export const getCategory = (title: string): ICategory => {
  const category = gameData.find((categoryData: IDataCategory) => categoryData.title === title);
  return parseCategory(category);
};

export const getCategories = (): ICategory[] => gameData.map(parseCategory);

export const getLevel = (categoryId: string, levelId: string) => {
  const category = getCategory(categoryId);
  return category.levels.find((level) => level.title === levelId);
};

export const transformName = (name: string): string => name.replace(/\s/g, "-").toLocaleLowerCase();
