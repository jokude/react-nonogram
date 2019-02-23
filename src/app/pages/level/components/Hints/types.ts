
import { ICategory } from "Types/Category";
import { ILevel } from "Types/Level";

export enum HintsFlow {
  Horizontal,
  Vertical,
}

export interface IHintsProps {
  size: ICategory["size"];
  level: ILevel["grid"];
  flow: HintsFlow;
}

export interface IHintCell {
  total: number;
  startPosition: number;
}
