import { ICategory } from "Types/Category";
import categories from "./gameData";

const chunkArray = (array: any[], chunkSize: number) => {
  const arrayCopy = array.slice(0);
  const result = [];

  while (arrayCopy.length) {
    result.push(arrayCopy.splice(0, chunkSize));
  }

  return result;
};

export const getCategories = () => categories;

export const getCategoryNames = () => categories.map((category: ICategory) => category.title);

export const getCategory = (title: string) =>
  categories.find((category) => category.title === title);

export const getLevel = (categoryId: string, levelId: string) => {
  const category = getCategory(categoryId);
  const level = category.levels.find((level2) => level2.title === levelId);
  return {
    grid: chunkArray(
      level.grid.split("").map((value) => value === "0"),
      category.size,
    ),
    title: level.title,
  };
};

export const transformName = (name: string): string => name.replace(/\s/g, "-").toLocaleLowerCase();
