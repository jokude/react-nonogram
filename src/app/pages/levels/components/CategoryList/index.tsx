import * as React from "react";
import styled from "styled-components";
import { ICategory } from "Types/Category";
import { Active } from "./Active";
import { CategoryItem } from "./CategoryItem";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  position: relative;
  border: 2px solid black;
  border-radius: 4px;
`;

interface IProps {
  categories: ICategory[];
}

export const CategoryList: React.FunctionComponent<IProps> = ({ categories }) => {
  const categoryList = categories.map((category) => (
    <CategoryItem key={category.title} title={category.title} />
  ));
  return <Container>{categoryList}<Active /></Container>;
};
