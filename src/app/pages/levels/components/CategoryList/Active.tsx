import { getCategoryNames } from "Datasource/datasource";
import { styled } from "Lib/styledComponents";
import * as React from "react";
import { RouteChildrenProps, withRouter } from "react-router";
import { CATEGORY_CHANGE_ANIMATION_MILLISECONDS } from "../../constants";

const ActiveContainer = styled.div`
  pointer-events: none;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: grid;
  grid-template-columns: inherit;
`;

const ActiveBackground = styled.div<{ position: number }>`
  ${({ theme, position }) => `
    color: ${theme.colors.black};
    background: ${theme.colors.white};
    transition: all ${CATEGORY_CHANGE_ANIMATION_MILLISECONDS}ms ease-out;
    transform: translateX(${position * 100}%);
    mix-blend-mode: difference;
    border-radius: 14px;
    border: 10px solid black;
  `}
`;

const BasicActive: React.FunctionComponent<RouteChildrenProps<{ categoryId: string }>> = ({ match }) => (
  <ActiveContainer>
    <ActiveBackground position={getCategoryNames().indexOf(match.params.categoryId)} />
  </ActiveContainer>
);

export const Active = withRouter(BasicActive);
