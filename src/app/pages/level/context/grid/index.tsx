import * as React from "react";
import { TimerContext } from "../timer";
import { IGridInput, IGridOutput } from "./types";
import { useGrid } from "./useGrid";

const GridContext = React.createContext<IGridOutput>(undefined);
const { Provider } = GridContext;

const GridProvider: React.FunctionComponent<Pick<IGridInput, Exclude<keyof IGridInput, "onPaintFail">>> = ({
  onGridSolved, size, level, children,
}) => {
  const { substractMinute, elapsedTime } = React.useContext(TimerContext);
  const grid = useGrid({
    level,
    onGridSolved: () => onGridSolved(elapsedTime),
    onPaintFail: substractMinute,
    size,
  });
  return (
    <Provider value={{ ...grid }}>
      {children}
    </Provider>
  );
};

export { GridContext, GridProvider };
