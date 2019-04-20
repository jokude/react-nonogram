import * as React from "react";
import { IHintOutput } from "./types";
import { useHintHightlighter } from "./useHintHightlighter";

const HintsContext = React.createContext<IHintOutput>(undefined);
const { Provider, Consumer: HintsConsumer } = HintsContext;

const HintsProvider: React.FunctionComponent = ({ children }) => {
  const hints = useHintHightlighter();
  return (
    <Provider value={{ ...hints }}>
      {children}
    </Provider>
  );
};

export { HintsContext, HintsProvider, HintsConsumer };
