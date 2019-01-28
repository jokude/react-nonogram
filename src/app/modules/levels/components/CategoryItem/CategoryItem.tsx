import * as React from "react";
import { withRouter } from "react-router";
import { ICategory } from "Types/Category";
import CategoryItemContainer from "./CategoryItemContainer";

interface IProps {
  category: ICategory;
  history: any;
  location: any;
  match: any;
  staticContext: any;
}

const CategoryItem: React.StatelessComponent<IProps> = ({
  category,
  match,
}) => (
  <CategoryItemContainer
    to={`/category/${category.title}`}
    active={match.params.categoryId === category.title}
  >
    {category.title}
  </CategoryItemContainer>
);

export default withRouter(CategoryItem);
