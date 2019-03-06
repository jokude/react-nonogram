import * as React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
`;

const Title = styled.h1`
  margin: 0;
  font-weight: bold;
  font-size: 80px;
  text-align: center;
`;

const Button = styled.button`
  margin: 0;
  font-family: inherit;
  background-color: #863a86;
  color: white;
  padding: 30px;
  font-size: 46px;
  cursor: pointer;
  position: relative;
  border-style: none;
  transition: background-color 0.8s ease, border-radius 0.5s ease;

  &:before {
    content: " ";
    position: absolute;
    top: 5px;
    left: 5px;
    right: 5px;
    bottom: 5px;
    border: 5px solid white;
    transition: border-radius 0.8s ease;
  }

  &:hover {
    background-color: #9C5D9C;
    border-radius: 100px;

    &:before {
      border-radius: 100px;
    }
  }
`;

const ButtonContent = styled.span`
  display: inline-block;
`;

export interface IProps {
  onClick: () => void;
}

export const Home: React.FunctionComponent<IProps> = ({ onClick }) => (
  <Container
    onClick={onClick}
  >
    <Title>React Nonogram</Title>
    <Link to="/category/5x5">
      <Button>
        <ButtonContent>Click to start</ButtonContent>
      </Button>
    </Link>
  </Container>
);
