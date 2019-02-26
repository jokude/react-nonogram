import { ICategory } from "Types/Category";
import { ILevel } from "Types/Level";
import gameData from "./gameData";

const chunkArray = <T>(array: T[], chunkSize: number): T[][] => {
  const arrayCopy = array.slice(0);
  const result = [] as T[][];

  while (arrayCopy.length) {
    result.push(arrayCopy.splice(0, chunkSize));
  }

  return result;
};

const parseCategory = (category: any): ICategory => ({
  countdownMinutes: category.countdownMinutes,
  levels: category.levels.map((level: any) => parseLevel(level, category.size)),
  size: category.size,
  title: category.title,
});

const parseLevel = ({ grid, title }: { grid: string, title: string }, size: number): ILevel => ({
  grid: chunkArray(
    grid.split("").map((solution: string) => Boolean(parseInt(solution, 2))),
    size,
  ),
  title,
});

export const getCategoryNames = (): string[] => gameData.map((category) => category.title);

export const getCategory = (title: string): ICategory => {
  const category = gameData.find((categoryData: any) => categoryData.title === title);
  return parseCategory(category);
};

export const getCategories = (): ICategory[] => gameData.map(parseCategory);

export const getLevel = (categoryId: string, levelId: string) => {
  const category = getCategory(categoryId);
  return category.levels.find((level2) => level2.title === levelId);
};

export const transformName = (name: string): string => name.replace(/\s/g, "-").toLocaleLowerCase();
