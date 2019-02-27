import { styled } from "Lib/styledComponents";
import { Icon } from "Pages/core/Icon";
import * as React from "react";
import { ICategory } from "Types/Category";
import { ILevel } from "Types/Level";
import { transformName } from "../../../../../datasource/datasource";
import { AnimateOpacity } from "./AnimateOpacity";

interface IProps {
  category: ICategory;
  level: ILevel;
}

const Container = styled.div`
  align-items: center;
  display: flex;
  padding: 10px;
  flex-grow: 1;
  height: 100px;
`;

export const Image: React.FunctionComponent<IProps> = ({ category, level }) => (
  <Container>
    <AnimateOpacity>
      <Icon path={`/${category.title}/${transformName(level.title)}`} />
    </AnimateOpacity>
  </Container>
);
