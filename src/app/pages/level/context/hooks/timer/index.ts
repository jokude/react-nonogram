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

const getTimer = (callback: () => void): number => {
  const newTimer = setInterval(callback, ONE_SECOND);
  return newTimer;
};

const useCountdownTimer = ({ countdownSeconds, onTimeout }: ITimerInput): ITimerOutput => {

  const [elapsed, setElapsed] = React.useState<number>(countdownSeconds * ONE_SECOND);
  const [timer, setTimer] = React.useState<number>(null);

  const callback = () => {
    setElapsed((remainingTime) => {
      if (remainingTime <= 0) {
        clearInterval(timer);
        onTimeout();
        return null;
      }
      return remainingTime - ONE_SECOND;
    });
  };

  const substractTime = () => {
    clearInterval(timer);
    if (elapsed > ONE_MINUTE) {
      setElapsed(elapsed - ONE_MINUTE);
    }
    const newTimer = getTimer(callback);
    setTimer(newTimer);
  };

  React.useEffect(() => {
    setTimer(getTimer(callback));
    return () => clearInterval(timer);
  }, []);

  return {
    elapsedTime: formatMilliseconds(elapsed),
    substractMinute: substractTime,
  };
};

export { useCountdownTimer };
