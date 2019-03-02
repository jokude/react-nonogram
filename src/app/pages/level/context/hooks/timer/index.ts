import * as React from "react";
import { ITimer, ITimerInput, ITimerOutput } from "./types";

const ONE_SECOND = 1000;

const formatNumber = (value: number): string => {
  const prefixZero = value <= 9 ? "0" : "";
  return `${prefixZero}${value}`;
};

const formatMilliseconds = (value: number): ITimer => {
  const minutes = Math.floor(value / 60000);
  const seconds = Math.floor((value - minutes * 60000) / ONE_SECOND);
  return {
    minutes: formatNumber(minutes),
    seconds: formatNumber(seconds),
  };
};

const useCountdownTimer = ({ countdownSeconds, onTimeout }: ITimerInput): ITimerOutput => {
  const [elapsed, setElapsed] = React.useState(countdownSeconds * ONE_SECOND);
  React.useEffect(() => {
    const timer = setInterval(() => {
      setElapsed((remainingTime) => {
        if (!remainingTime) {
          clearInterval(timer);
          onTimeout();
          return null;
        }
        return remainingTime - ONE_SECOND;
      });
    }, ONE_SECOND);
    return () => clearInterval(timer);
  });

  return {
    elapsedTime: formatMilliseconds(elapsed),
  };
};

export { useCountdownTimer };
