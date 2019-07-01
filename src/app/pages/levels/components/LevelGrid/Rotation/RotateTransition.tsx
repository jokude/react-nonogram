import * as React from "react";
import { CSSTransition } from "react-transition-group";
import { TransitionProps } from "react-transition-group/Transition";
import styled from "styled-components";
import { CATEGORY_CHANGE_ANIMATION_MILLISECONDS } from "../../../constants";

export interface IRotateTransitionProps extends Partial<TransitionProps> {
  rotateLeft: boolean;
  delay: number;
}

const RotateContainer2 = styled.div<{ rotateLeft: boolean; delay: number; }>`
  backface-visibility: hidden;
  transition: all ${CATEGORY_CHANGE_ANIMATION_MILLISECONDS}ms ease-out;
  transform-style: preserve-3d;
  transform: rotateY(0deg);
  position: absolute;
  left: 0;
  top: 0;

  ${({ rotateLeft, delay }) => `
    transition-delay: ${delay}ms;

    &.my-node-enter {
      transform: rotateY(${rotateLeft ? "" : "-"}180deg);
      z-index: 2;
    }
    &.my-node-enter-active {
      transform: rotateY(0deg);
      z-index: 2;
    }
    &.my-node-enter-done {
      transform: rotateY(0deg);
      z-index: 2;
    }
    &.my-node-exit {
      transform: rotateY(0deg);
      z-index: 1;
    }
    &.my-node-exit-active {
      transform: rotateY(${rotateLeft ? "-" : ""}180deg);
      z-index: 1;
    }
    &.my-node-exit-done {
      transform: rotateY(${rotateLeft ? "-" : ""}180deg);
      z-index: 1;
    }
  `}
`;

export const RotateTransition: React.FunctionComponent<IRotateTransitionProps> = ({ children, rotateLeft, delay, ...props }) => {
  return (
  <CSSTransition timeout={CATEGORY_CHANGE_ANIMATION_MILLISECONDS + delay} classNames="my-node" {...props}>
    <RotateContainer2 rotateLeft={rotateLeft} delay={delay}>
      {children}
    </RotateContainer2>
  </CSSTransition>
); };
