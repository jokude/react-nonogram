import * as React from "react";
import { RouteChildrenProps, withRouter } from "react-router";

import { Background } from "./Background";
import { Container } from "./Container";

interface ICategoryActiveProps extends RouteChildrenProps<{ categoryId: string }> {
  categoryNames: string[];
}

const getActivePosition = (names: string[], activeName: string) => names.indexOf(activeName);

const BasicActive: React.FunctionComponent<ICategoryActiveProps> = ({ match, categoryNames }) => (
  <Container>
    <Background position={getActivePosition(categoryNames, match.params.categoryId)} />
  </Container>
);

export const CategoryActive = withRouter(BasicActive);
