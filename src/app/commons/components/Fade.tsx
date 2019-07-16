import * as React from "react";
import { CSSTransition } from "react-transition-group";
import { TransitionProps } from "react-transition-group/Transition";
import styled from "styled-components";

const DURATION_MILLISECONDS = 300;
const FADE_CLASSNAME = "fade";

const Container = styled.div`
  bottom: 0;
  left: 0;
  opacity: 0;
  position: absolute;
  right: 0;
  top: 0;
  transition: opacity ${DURATION_MILLISECONDS}ms ease-in-out;

  &.${FADE_CLASSNAME}-enter,
   .${FADE_CLASSNAME}-enter-active,
   .${FADE_CLASSNAME}-exit-active,
   .${FADE_CLASSNAME}-exit-done {
    opacity: 0;
  }
  &.${FADE_CLASSNAME}-enter-done,
   .${FADE_CLASSNAME}-exit {
    opacity: 1;
  }
  &.${FADE_CLASSNAME}-exit,
  .${FADE_CLASSNAME}-exit-active,
  .${FADE_CLASSNAME}-exit-done {
   opacity: 0;
 }
`;

export const FadeTransition: React.FunctionComponent<Partial<TransitionProps>> = ({ children, ...props }) => (
  <CSSTransition timeout={DURATION_MILLISECONDS} classNames={FADE_CLASSNAME} {...props}>
    <Container>
      {children}
    </Container>
  </CSSTransition>
);
