import styled from "styled-components";

export const Container = styled.button`
  width: 150px;
  background-color: ${(p) => p.theme.color.btn.bg1};
  color: ${(p) => p.theme.color.btn.text1};
  border-radius: 10px;
  padding: 8px;
  font-size: 1.1rem;

  border: none;
  cursor: pointer;
`;
