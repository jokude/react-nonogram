import * as React from "react";
import { getCategories, getCategory } from "../../datasource/Datasource";
import CategoryList from "./components/CategoryList";
import LevelList from "./components/LevelList";

interface IProps {
  match: {
    params: {
      categoryId: string;
    };
  };
}

export const Levels: React.SFC<IProps> = ({ match }) => {
  const category = getCategory(match.params.categoryId);
  return (
    <div style={{ height: "100%" }}>
      <LevelList category={category} />
      <CategoryList categories={getCategories()} />
    </div>
  );
};
