import { useEffect, useRef } from "react";
import { ICategory } from "Types/Category";

export const useRotateDirection = (categoryId: ICategory["title"]): boolean => {
  const prevCountRef = useRef<string>();

  useEffect(() => {
    prevCountRef.current = categoryId;
  });

  return parseInt(prevCountRef.current, 10) > parseInt(categoryId, 10);
};
