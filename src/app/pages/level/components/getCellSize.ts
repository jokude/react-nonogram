import { CategorySize } from "Types/Category";

export const getCellSize = (compact: boolean, size: CategorySize) => {
  switch (size) {
    case 5:
      return compact ? 50 : 60;
    case 10:
      return compact ? 25 : 40;
    case 15:
    default:
      return compact ? 20 : 30;
  }
};
