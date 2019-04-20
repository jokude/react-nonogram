import { IPosition } from "../types";

export interface IHintOutput {
  highlightedCell: IPosition | null;
  highlightCell: (position: IPosition | null) => void;
}
