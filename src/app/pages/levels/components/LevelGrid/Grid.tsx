import { Breakpoints } from "Commons/constants";
import styled from "styled-components";

export const Grid = styled.div`
  margin: 20px 0;
  display: grid;
  grid-gap: 5px;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  padding-bottom: 60px;
  perspective: 2000px;

  @media only screen and (min-width: ${Breakpoints.sm}px) {
    grid-gap: 10px;
    grid-template-columns: repeat(4, 1fr);
  }

  @media only screen and (min-width: ${Breakpoints.md}px) {
    grid-template-columns: repeat(5, 1fr);
  }

  @media only screen and (min-width: ${Breakpoints.lg}px) {
    padding: 0;
    grid-template-columns: repeat(6, 1fr);
  }
`;
