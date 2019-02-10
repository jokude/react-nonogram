import { styled } from "Lib/styledComponents";
import * as React from "react";
import { RouteChildrenProps, withRouter } from "react-router";
import { getCategoryNames } from "../../../../datasource/datasource";

interface IActiveProps extends RouteChildrenProps<{ categoryId: string }> {
}

const ActiveContainer = styled.div`
  margin: 10px;
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
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 1s ease;
    transform: translateX(${position * 100}%);
    mix-blend-mode: difference;
    border-radius: 4px;
  `}
`;

const BasicActive: React.FunctionComponent<IActiveProps> = ({ match }) => (
  <ActiveContainer>
    <ActiveBackground position={getCategoryNames().indexOf(match.params.categoryId)} />
  </ActiveContainer>
);

export const Active = withRouter(BasicActive);
