import * as React from "react";
import styled from "styled-components";

interface IProps {
  className: string;
  isColumn?: boolean;
}

const StyledFlex: React.SFC<IProps> = ({ className, children }) => (
  <div className={className}>{children}</div>
);

const Flex = styled(StyledFlex)`
  display: flex;
  flex-direction: ${(props) => (props.isColumn ? "column" : "row")};
`;

const FlexPadding = styled.div`
  flex-grow: 1;
`;

export default Flex;

export { FlexPadding };
