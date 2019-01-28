import * as React from "react";
import styled from "styled-components";
import { ICategory } from "Types/Category";
import CategoryItem from "./CategoryItem";

const Container = styled.div`
  display: flex;
`;

interface IProps {
  categories: ICategory[];
}

const CategoryList: React.StatelessComponent<IProps> = ({ categories }) => {
  const categoryList = categories.map((category) => (
    <CategoryItem key={category.title} category={category} />
  ));
  return <Container>{categoryList}</Container>;
};

export default CategoryList;
