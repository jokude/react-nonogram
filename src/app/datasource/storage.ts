import { ICategory } from "Types/Category";
import { ILevel } from "Types/Level";

const storeKey = (categoryName: ICategory["title"], level: ILevel["title"]) => `${categoryName}.${level}`;

export const hasLocalStorage = window.localStorage !== null;

export const setLevelTime = (categoryName: ICategory["title"], level: ILevel["title"], time: number): void =>
  localStorage.setItem(storeKey(categoryName, level), time.toString());

export const getLevelTime = (categoryName: ICategory["title"], level: ILevel["title"]): number => {
  const value = localStorage.getItem(storeKey(categoryName, level));
  return parseInt(value, 10) || undefined;
};
