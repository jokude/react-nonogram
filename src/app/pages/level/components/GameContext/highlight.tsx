import * as React from "react";
import { IPosition } from "./types";

const HighlightContext = React.createContext<{
  highlightedCell: IPosition | null,
  highlightCell: (position: IPosition | null) => void,
}>(undefined);
const { Provider, Consumer } = HighlightContext;

const HighlightStateConsumer = Consumer;

const HighlightStateProvider: React.FunctionComponent = ({ children }) => {

  const [highlight, setHighlight] = React.useState(null);

  const highlightCell = (position: IPosition = null) => setHighlight(position);

  return (
    <Provider value={{ highlightedCell: highlight, highlightCell }}>
      {children}
    </Provider>
  );
};

export { HighlightContext, HighlightStateConsumer, HighlightStateProvider };
