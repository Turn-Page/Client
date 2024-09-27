import styled from "styled-components";

export const Container = styled.button`
  background-color: ${(p) => p.theme.color.btn.bg2};
  color: ${(p) => p.theme.color.btn.text2};
  border-radius: 4px;
  padding: 8px 10px;
  border: none;
  cursor: pointer;
`;
