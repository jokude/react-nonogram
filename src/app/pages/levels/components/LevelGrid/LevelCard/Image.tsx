import { Icon } from "Commons/components/Icon";
import { styled } from "Lib/styledComponents";
import * as React from "react";

const ICON_SIZE = 80;

interface IProps {
  src: string;
}

const Container = styled.div`
  align-items: center;
  display: flex;
  padding: 10px;
  flex-grow: 1;
  height: 100px;
`;

export const Image: React.FunctionComponent<IProps> = ({ src }) => (
  <Container>
    <Icon alt="" role="presentation" src={src} width={ICON_SIZE} height={ICON_SIZE} />
  </Container>
);
