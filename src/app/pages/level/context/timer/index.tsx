import * as React from "react";
import { ITimerInput, ITimerOutput } from "./types";
import { useCountdownTimer } from "./useCountdownTimer";

const TimerContext = React.createContext<ITimerOutput>(undefined);
const { Provider } = TimerContext;

const TimerProvider: React.FunctionComponent<ITimerInput> = ({
  countdownSeconds, onTimeout, children,
}) => {
  const timer = useCountdownTimer({ countdownSeconds, onTimeout });
  return (
    <Provider value={{ ...timer }}>
      {children}
    </Provider>
  );
};

export { TimerContext, TimerProvider };
