import styled from "styled-components";

export const Container = styled.ul`
  width: 80%;
  max-width: 850px;
  min-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  flex-wrap: wrap;
  padding-top: 20px;

  @media (max-width: 1080px) {
    width: fit-content;
  }
`;
