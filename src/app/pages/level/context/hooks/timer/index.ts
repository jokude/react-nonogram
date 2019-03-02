import * as React from "react";
import { ITimer, ITimerInput, ITimerOutput } from "./types";

const ONE_SECOND = 1000;
const ONE_MINUTE = ONE_SECOND * 60;

const formatNumber = (value: number): string => {
  const prefixZero = value <= 9 ? "0" : "";
  return `${prefixZero}${value}`;
};

const formatMilliseconds = (value: number): ITimer => {
  const minutes = Math.floor(value / ONE_MINUTE);
  const seconds = Math.floor((value - minutes * ONE_MINUTE) / ONE_SECOND);
  return {
    minutes: formatNumber(minutes),
    seconds: formatNumber(seconds),
  };
};

const getTimer = (setElapsed: React.Dispatch<React.SetStateAction<number>>, onTimeout: () => void): number => {
  const newTimer = setInterval(() => {
    setElapsed((remainingTime) => {
      if (remainingTime <= 0) {
        clearInterval(newTimer);
        onTimeout();
        return null;
      }
      return remainingTime - ONE_SECOND;
    });
  }, ONE_SECOND);
  return newTimer;
};

const substractTime = (
    setTimer: React.Dispatch<React.SetStateAction<number>>,
    setElapsed: React.Dispatch<React.SetStateAction<number>>,
    timer: number,
    elapsed: number,
    onTimeout: () => void,
  ) => () => {
  clearInterval(timer);
  if (elapsed > ONE_MINUTE) {
    setElapsed(elapsed - ONE_MINUTE);
  }
  const newTimer = getTimer(setElapsed, onTimeout);
  setTimer(newTimer);
};

const useCountdownTimer = ({ countdownSeconds, onTimeout }: ITimerInput): ITimerOutput => {

  const [elapsed, setElapsed] = React.useState<number>(countdownSeconds * ONE_SECOND);
  const [timer, setTimer] = React.useState<number>(null);

  React.useEffect(() => {
    setTimer(getTimer(setElapsed, onTimeout));
    return () => clearInterval(timer);
  }, []);

  return {
    elapsedTime: formatMilliseconds(elapsed),
    substractMinute: substractTime(setTimer, setElapsed, timer, elapsed, onTimeout),
  };
};

export { useCountdownTimer };
