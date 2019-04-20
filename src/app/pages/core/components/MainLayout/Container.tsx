import styled from "styled-components";
import { MOBILE_BREAKPOINT } from "../../constants";

export const Container = styled.div`
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
  font-family: 'Exo', sans-serif;

  @media (min-width: ${MOBILE_BREAKPOINT}) {
    border: 10px solid #888098;
    border-radius: 10px;
    max-width: ${MOBILE_BREAKPOINT};
    max-height: 800px;
    position: absolute;
  }
`;
