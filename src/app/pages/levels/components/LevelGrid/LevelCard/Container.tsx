import { styled } from "Lib/styledComponents";
import * as React from "react";
import { Link } from "react-router-dom";

interface IProps {
  url: string;
}

const ContainerLink = styled(Link)`
  color: black;
  text-decoration: none;
  border: 1px solid black;
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  height: 150px;
  width: 90px;
  transform-origin: center;
  transition: transform 0.1s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

export const Container: React.FunctionComponent<IProps> = ({ url, children }) => (
  <ContainerLink to={url}>
    {children}
  </ContainerLink>
);
