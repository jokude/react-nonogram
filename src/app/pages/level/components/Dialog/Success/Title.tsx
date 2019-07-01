import { Breakpoints } from "Commons/constants";
import styled from "styled-components";

export const Title = styled.h1`
  margin: 0;
  font-weight: bold;
  font-size: 40px;
  text-align: center;
  white-space: nowrap;

  @media (min-width: ${Breakpoints.lg}px) {
    font-size: 60px;
  }
`;
