import styled from "styled-components";

export const Container = styled.div`
  padding: 80px 50px;
  max-width: 1080px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 180px;

  .caption {
    font-size: 1.5rem;
    padding-bottom: 10px;
    font-family: ${(p) => p.theme.fontFamily.medium};
    border-bottom: 1px solid ${(p) => p.theme.color.border.border3};
    padding-left: 10px;
  }
`;
