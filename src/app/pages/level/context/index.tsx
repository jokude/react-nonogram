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
  const grid = useGrid({ size, level });
  const hints = useHintHightlighter();
  const timer = useCountdownTimer({ countdownSeconds, onTimeout });
  return (
    <Provider value={{ ...grid, ...hints, ...timer }}>
      {children}
    </Provider>
  );
};

export { GameContext, GameStateConsumer, GameStateProvider };
