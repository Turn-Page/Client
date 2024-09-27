import styled from "styled-components";

export const Container = styled.div`
  padding-bottom: 50px;
  max-width: 1100px;
  margin: 0 auto;
  > .title {
    margin-top: 40px;
    margin-left: 50px;
    font-family: ${(p) => p.theme.fontFamily.medium};
    font-size: 2rem;
  }
`;
