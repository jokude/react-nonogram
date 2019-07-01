import { ITimer } from "Commons/timer/types";
import { ICategory } from "Types/Category";
import { ILevel } from "Types/Level";

const storeKey = (categoryTitle: ICategory["title"], level: ILevel["title"]) => `${categoryTitle}.${level}`;

export const hasLocalStorage = window.localStorage !== null;

export const setLevelTime = (categoryTitle: ICategory["title"], levelTitle: ILevel["title"], time: ITimer): void =>
  localStorage.setItem(storeKey(categoryTitle, levelTitle), JSON.stringify(time));

export const getLevelTime = (categoryTitle: ICategory["title"], levelTitle: ILevel["title"]): ITimer => {
  const storedValue = localStorage.getItem(storeKey(categoryTitle, levelTitle));
  return JSON.parse(storedValue) || undefined;
};
