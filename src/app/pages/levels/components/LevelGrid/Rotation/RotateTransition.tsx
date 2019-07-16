import * as React from "react";
import { CSSTransition } from "react-transition-group";
import { TransitionProps } from "react-transition-group/Transition";
import styled from "styled-components";
import { CATEGORY_CHANGE_ANIMATION_MILLISECONDS } from "../../../constants";

export interface IRotateProps {
  rotateLeft: boolean;
  delay: number;
}

export interface IRotateTransitionProps extends IRotateProps, Partial<TransitionProps> {}

const ROTATE_CLASSNAME = "rotation";

const Container = styled.div<IRotateProps>`
  backface-visibility: hidden;
  transition: all ${CATEGORY_CHANGE_ANIMATION_MILLISECONDS}ms ease-out;
  transform-style: preserve-3d;
  transform: rotateY(0deg);

  ${({ rotateLeft, delay }) => `
    transition-delay: ${delay}ms;

    &.${ROTATE_CLASSNAME}-enter {
      transform: rotateY(${rotateLeft ? "" : "-"}180deg);
    }
    &.${ROTATE_CLASSNAME}-enter-active,
     .${ROTATE_CLASSNAME}-enter-done,
     .${ROTATE_CLASSNAME}-exit {
      transform: rotateY(0deg);
    }
    &.${ROTATE_CLASSNAME}-exit-active,
     .${ROTATE_CLASSNAME}-exit-done {
      transform: rotateY(${rotateLeft ? "-" : ""}180deg);
    }
    &.${ROTATE_CLASSNAME}-exit,
     .${ROTATE_CLASSNAME}-exit-active,
     .${ROTATE_CLASSNAME}-exit-done {
      position: absolute;
      left: 0;
      top: 0;
     }
  `}
`;

export const RotateTransition: React.FunctionComponent<IRotateTransitionProps> = ({
  children, rotateLeft, delay, ...props
}) => (
  <CSSTransition timeout={CATEGORY_CHANGE_ANIMATION_MILLISECONDS + delay} classNames={ROTATE_CLASSNAME} {...props}>
    <Container rotateLeft={rotateLeft} delay={delay}>
      {children}
    </Container>
  </CSSTransition>
);
