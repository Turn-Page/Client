// 버튼 커스텀
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import styled from "styled-components";

export const LeftBracketIcon = styled(FaAngleLeft)`
  height: 50px;
  width: 50px;
  color: ${(p) => p.theme.color.icon.icon1} !important;
  flex-shrink: 0;
`;
export const RightBracketIcon = styled(FaAngleRight)`
  height: 50px;
  width: 50px;
  color: ${(p) => p.theme.color.icon.icon1} !important;
  flex-shrink: 0;
`;
