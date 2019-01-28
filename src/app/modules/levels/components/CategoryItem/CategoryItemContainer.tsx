import { styled } from "Lib/styledComponents";
import * as React from "react";
import { Link } from "react-router-dom";

interface IProps {
  to: string;
  active: boolean;
}

const StyledFlex: React.SFC<IProps> = ({ to, ...props }) => (
  <Link to={to} {...props} />
);

export default styled(StyledFlex)`
  text-align: center;
  text-decoration: none;
  flex-grow: 1;
  padding: 20px;
  color: ;
  font-size: 20px;
  position: relative;
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.black};

  ${({ active, theme }) =>
    active &&
    `
    color: ${theme.colors.black};
    background: ${theme.colors.white};

    &::after {
      content: '';
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      position: absolute;
      border: 10px solid ${theme.colors.black};
    }
  `} &:hover {
  }
`;
