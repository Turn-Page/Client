import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.header`
  background-color: ${(p) => p.theme.color.bg.bg3};
  height: 56px;
  width: 100%;
  border-bottom: 1px solid ${(p) => p.theme.color.border.border1};
  display: flex;
  position: sticky;
  top: 0px;
  left: 0;
  z-index: 10;

  .logout {
    cursor: pointer;
    color: ${(p) => p.theme.color.text.text2};
    &:hover {
      color: ${(p) => p.theme.color.text.text1};
    }
  }
`;

export const Link_ = styled(Link)<{ isVisit?: boolean }>`
  cursor: pointer;
  color: ${(p) => p.theme.color.text.text2};

  // 현재 방문중인 페이지는 굵게 표시
  font-family: ${(p) => p.isVisit && p.theme.fontFamily.medium};
  color: ${(p) => p.isVisit && p.theme.color.text.text1};

  &:hover {
    color: ${(p) => p.theme.color.text.text1};
  }
`;

// 헤더 3등분 flex prototype
export const RowFlexProto = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const RowA = styled(RowFlexProto)`
  flex-grow: 0.3;
  flex-shrink: 0;
`;
export const RowB = styled(RowFlexProto)`
  flex-grow: 0.4;
`;

export const RowC = styled(RowFlexProto)`
  flex-grow: 0.3;
  flex-shrink: 0;
`;
