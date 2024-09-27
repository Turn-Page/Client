import styled from "styled-components";

export const Container = styled.div`
  height: calc(100vh - 56px);
  background-color: ${(p) => p.theme.color.bg.bg2};
`;
export const ColContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const btnWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  > * {
    margin: 10px 0;
  }
`;
