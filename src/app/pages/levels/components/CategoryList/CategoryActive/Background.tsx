import { styled } from "Lib/styledComponents";
import { CATEGORY_CHANGE_ANIMATION_MILLISECONDS } from "../../../constants";

export const Background = styled.div<{ position: number }>`
  ${({ theme, position }) => `
    color: ${theme.colors.black};
    background: ${theme.colors.white};
    transition: all ${CATEGORY_CHANGE_ANIMATION_MILLISECONDS}ms ease-out;
    transform: translateX(${position * 100}%);
    mix-blend-mode: difference;
    border-radius: 14px;
    border: 10px solid black;
  `}
`;
