import * as React from "react";
import { Transition } from "react-transition-group";
import { TransitionProps, TransitionStatus } from "react-transition-group/Transition";

const duration = 300;

const defaultStyle: React.CSSProperties = {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
};

const transitionStyles: Record<TransitionStatus, React.CSSProperties> = {
  entering: { opacity: 0 },
  entered:  { opacity: 1 },
  exiting:  { opacity: 0 },
  exited:  { opacity: 0 },
  unmounted:  { opacity: 0 },
};

export const Fade: React.FunctionComponent<Partial<TransitionProps>> = ({ children, ...props }) => (
  <Transition timeout={{enter: 300, exit: 300}} {...props}>
    {(state) => (
      <div style={{ ...defaultStyle, ...transitionStyles[state] }}>
        {children}
      </div>
    )}
  </Transition>
);
