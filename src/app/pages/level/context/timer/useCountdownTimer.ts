import * as React from "react";
import { ONE_MINUTE, ONE_SECOND } from "../../../core/timer/constants";
import { formatMilliseconds } from "../../../core/timer/format";
import { ITimerInput, ITimerOutput } from "./types";

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
        setTimer(null);
        onTimeout(remainingTime);
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
    stopped: timer === null,
    substractMinute: substractTime,
  };
};

export { useCountdownTimer };
