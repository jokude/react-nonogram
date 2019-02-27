import { styled } from "Lib/styledComponents";
import * as React from "react";

interface IProps {
  visible: boolean;
}

const Container = styled.div<IProps>`
  transition: opacity .5s linear;
  opacity: ${({ visible }) => visible ? 1 : 0};
`;

export const AnimateOpacity: React.FunctionComponent = ({ children }) => {

  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    setVisible(true);
    return function cleanup() {
      setVisible(true);
    };
  });

  return (
    <Container visible={visible}>{children}</Container>
  );
};
