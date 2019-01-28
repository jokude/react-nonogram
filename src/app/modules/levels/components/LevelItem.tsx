import Icon from "Modules/core/Icon";
import * as React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ICategory } from "Types/Category";
import { ILevel } from "Types/Level";

interface IProps {
  category: ICategory;
  level: ILevel;
}

const LevelCard = styled.div`
  border: 1px solid black;
  border-radius: 2px;
  margin: 5px;
`;

const Title = styled.div`
  text-align: center;
  border-bottom: 1px solid black;
`;

const Image = styled.div`
  padding: 10px;
`;

const Time = styled.div`
  text-align: center;
  background: lightgray;
  border-top: 1px solid black;
`;

const LevelItem: React.StatelessComponent<IProps> = ({ category, level }) => (
  <LevelCard>
    <Title>{level.title}</Title>
    <Link to={`/category/${category.title}/level/${level.title}`}>
      <Image>
        <Icon
          category={category.title.toLowerCase()}
          level={level.title.toLowerCase()}
        />
      </Image>
    </Link>
    <Time>--:--</Time>
  </LevelCard>
);

export default LevelItem;
