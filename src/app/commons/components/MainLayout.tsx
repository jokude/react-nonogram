import styled from "styled-components";
import { Breakpoints } from "../constants";

export const MainLayout = styled.div`
  align-items: center;
  background-color: white;
  margin: auto;
  height: 100%;
  display: flex;
  justify-content: center;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;

  @media (min-width: ${Breakpoints.lg}px) {
    border: 10px solid #888098;
    border-radius: 10px;
    max-width: ${Breakpoints.lg}px;
    max-height: 800px;
    position: absolute;
  }
`;
