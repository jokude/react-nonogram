import { Breakpoints } from "Commons/constants";
import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  position: relative;
  border-radius: 4px;

  @media only screen and (max-width: ${Breakpoints.lg + 40}px) {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 0;
  }
`;
