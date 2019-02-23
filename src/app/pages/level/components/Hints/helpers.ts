import { HintsFlow, IHintCell, IHintsProps } from "./types";

export const isHorizontal = (flow: HintsFlow) => flow === HintsFlow.Horizontal;

export const buildHints = (cellLine: boolean[]): IHintCell[] => {
  const hints = [];
  let count = 0;
  let i;

  for (i = 0; i < cellLine.length; i++) {
    if (cellLine[i]) {
      count++;
    } else if (count > 0) {
      hints.push({ total: count, startPosition: i - count });
      count = 0;
    }
  }

  if (count !== 0 || hints.length === 0) {
    hints.push({ total: count, startPosition: i - count });
  }

  return hints;
};

export const getCellPixelSize = (size: IHintsProps["size"]) => {
  switch (size) {
    case 5:
      return 60;
    case 10:
      return 40;
    case 15:
    default:
      return 30;
  }
};

export const transpose = <T>(a: T[][]): T[][] =>
    a && a.length && a[0].map && a[0].map((_, c) => a.map((r) => r[c])) || [];
