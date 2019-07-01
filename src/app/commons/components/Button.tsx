import { Breakpoints } from "Commons/constants";
import { Link, LinkProps } from "react-router-dom";
import styled from "styled-components";

type Size = "medium" | "large";

interface IProps extends LinkProps {
  size?: Size;
}

const getStyles = (size: Size) => {
  switch (size) {
    case "large":
      return "padding: 30px;";
    case "medium":
    default:
      return "padding: 15px 25px;";
  }
};

export const Button = styled(Link).attrs({
  role: "button",
})<IProps>`
  margin: 0;
  font-family: inherit;
  background-color: #863a86;
  color: white;
  padding: 30px;
  font-size: 30px;
  cursor: pointer;
  position: relative;
  border-style: none;
  text-decoration: none;
  transition: background-color 0.8s ease;
  border-radius: 100px;
  text-align: center;

  &:before {
    content: " ";
    position: absolute;
    top: 5px;
    left: 5px;
    right: 5px;
    bottom: 5px;
    border: 5px solid white;
    border-radius: 100px;
  }

  &:hover, &:active {
    background-color: #9C5D9C;
  }

  @media (min-width: ${Breakpoints.lg}px) {
    font-size: 46px;
  }

  ${({ size }) => getStyles(size)};
`;
