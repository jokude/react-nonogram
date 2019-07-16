import * as React from "react";
import styled from "styled-components";

const onContextMenuHandler = (evt: React.MouseEvent<HTMLElement>) => evt.preventDefault();

const Container = styled.div`
  user-select: none;
  margin: auto;
  padding: 10px;
`;

export const GridContainer: React.FunctionComponent = ({ children }) => (
  <Container onContextMenu={onContextMenuHandler}>
    {children}
  </Container>
);
