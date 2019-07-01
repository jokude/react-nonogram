import { ONE_MINUTE, ONE_SECOND } from "./constants";
import { ITimer } from "./types";

export const millisecondsToTime = (value: number): ITimer => {
  const minutes = Math.floor(value / ONE_MINUTE);
  const seconds = Math.floor((value - minutes * ONE_MINUTE) / ONE_SECOND);
  return { minutes, seconds };
};

export const setPaddingZero = (value: number): string => {
  const prefixZero = value <= 9 ? "0" : "";
  return `${prefixZero}${value}`;
};
