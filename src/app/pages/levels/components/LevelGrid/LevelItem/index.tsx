import * as React from "react";
import { ICategory } from "Types/Category";
import { ILevelSummary } from "Types/Level";
import { LevelCard } from "../LevelCard";
import { getItemInfo } from "./helpers";

interface IProps {
  category: ICategory;
  level: ILevelSummary;
}

export const LevelItem: React.FunctionComponent<IProps> = ({ category, level }) => (
  <LevelCard {...getItemInfo(category, level)} />
);
