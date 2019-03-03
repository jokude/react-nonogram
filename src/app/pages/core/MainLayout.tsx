import { styled } from "Lib/styledComponents";
import * as React from "react";

const Container = styled.div`
  align-items: center;
  background-color: white;
  max-width: 700px;
  max-height: 800px;
  margin: auto;
  height: 100%;
  display: flex;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  padding: 0 20px;
  border: 10px solid #888098;
  border-radius: 10px;
`;

const Background = styled.div`
  background-image: url("/assets/background.jpg");
  background-size: cover;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;
`;

export const MainLayout: React.FunctionComponent = ({ children }) => (
  <>
    <Background />
    <Container>
      {children}
    </Container>
  </>
);
