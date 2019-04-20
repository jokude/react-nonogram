import * as React from "react";
import { IGridInput, IGridOutput } from "./types";
import { useGrid } from "./useGrid";

const GridContext = React.createContext<IGridOutput>(undefined);
const { Provider } = GridContext;

const GridProvider: React.FunctionComponent<IGridInput> = ({
   onPaintFail, onGridSolved, size, level, children,
}) => {
  const grid = useGrid({
    level,
    onGridSolved,
    onPaintFail,
    size,
  });
  return (
    <Provider value={{ ...grid }}>
      {children}
    </Provider>
  );
};

export { GridContext, GridProvider };
