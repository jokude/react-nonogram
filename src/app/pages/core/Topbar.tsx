import * as React from "react";
import styled from "styled-components";

const Container = styled.div`
  background: black;
  padding: 20px;
  color: white;
`;

const Topbar: React.FunctionComponent = ({ children }) => <Container>{children}</Container>;

export { Topbar };
