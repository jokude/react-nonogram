import * as React from "react";
import { useGrid } from "./hooks/grid";
import { useHintHightlighter } from "./hooks/hints";
import { useCountdownTimer } from "./hooks/timer";
import { IContextProviderChildrenProps, IContextProviderProps } from "./types";

const GameContext = React.createContext<IContextProviderChildrenProps>(undefined);
const { Provider, Consumer } = GameContext;

const GameStateConsumer = Consumer;

const GameStateProvider: React.FunctionComponent<IContextProviderProps> = ({
  countdownSeconds, onTimeout, size, level, children,
}) => {
  const { elapsedTime, substractMinute } = useCountdownTimer({ countdownSeconds, onTimeout });
  const grid = useGrid({ size, level, substractMinute });
  const hints = useHintHightlighter();
  return (
    <Provider value={{ ...grid, ...hints, elapsedTime }}>
      {children}
    </Provider>
  );
};

export { GameContext, GameStateConsumer, GameStateProvider };
