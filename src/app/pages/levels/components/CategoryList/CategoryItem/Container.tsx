import { styled } from "Lib/styledComponents";
import { Link } from "react-router-dom";

export const Container = styled(Link)`
  display: block;
  text-align: center;
  text-decoration: none;
  padding: 20px;
  font-size: 20px;
  position: relative;
  color: ${({ theme }) => theme.colors.white};
  background: black;
`;
