import { Breakpoints } from "Commons/constants";
import styled from "styled-components";

export const GridContainer = styled.div`
  margin: 20px 10px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  align-items: center;
  flex-grow: 1;
  justify-items: center;
  padding-bottom: 60px;
  perspective: 2000px;

  @media only screen and (min-width: ${Breakpoints.sm}px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media only screen and (min-width: ${Breakpoints.md}px) {
    grid-template-columns: repeat(5, 1fr);
  }

  @media only screen and (min-width: ${Breakpoints.lg + 40}px) {
    padding: 0;
    grid-template-columns: repeat(6, 1fr);
  }
`;
