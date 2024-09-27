import styled from "styled-components";

export const StyledTextArea = styled.div`
  padding: 10px;
  background-color: ${(p) => p.theme.color.bg.bg2};
  border-radius: 10px;
  box-shadow: 0 4px 4px 0 #aaa;
  &:focus-within {
    border: 1px solid ${(p) => p.theme.color.btn.bg2};
  }

  input,
  textarea {
    border: none;
    background: none;
    font-size: 1rem;
    width: 100%;
    height: 100%;
    outline: none;
  }
`;
