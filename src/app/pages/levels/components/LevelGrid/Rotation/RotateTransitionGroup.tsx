import * as React from "react";
import { TransitionGroup } from "react-transition-group";
import styled from "styled-components";

export interface IRotateTransitionGroupProps {
  childrenProps: any;
  children: React.ReactElement;
}

const RotateContainer = styled.div`
  position: relative;
  transform-style: preserve-3d;
`;

const childFactoryCreator = (props: any) => (
  (child: any) => (
    React.cloneElement(child, props)
  )
);

export const RotateTransitionGroup: React.FunctionComponent<IRotateTransitionGroupProps> = ({
  children, childrenProps,
}) => (
  <TransitionGroup component={RotateContainer} childFactory={childFactoryCreator(childrenProps)}>
    {children}
  </TransitionGroup>
);
