import * as React from "react";
import { RotateTransition } from "./RotateTransition";
import { RotateTransitionGroup } from "./RotateTransitionGroup";

interface IProps {
  groupKey: React.Key;
  transitionKey: React.Key;
  rotateLeft: boolean;
  delay: number;
}

export const Rotate: React.FunctionComponent<IProps> = ({ children, delay, rotateLeft, transitionKey, groupKey }) => (
  <RotateTransitionGroup key={groupKey} childrenProps={{ rotateLeft, delay }}>
    <RotateTransition key={transitionKey} rotateLeft={rotateLeft} delay={delay}>
      {children}
    </RotateTransition>
  </RotateTransitionGroup>
);
