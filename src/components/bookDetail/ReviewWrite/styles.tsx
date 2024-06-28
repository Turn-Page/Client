import styled from "styled-components";

export const Container = styled.div``;

export const TitleWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 30px;
  padding-bottom: 40px;

  h1 {
    font-family: ${(p) => p.theme.fontFamily.medium};
    font-size: 1.6rem;
    margin-bottom: 10px;
  }
  h2 {
  }
`;
export const InfoWrap = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  .col {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    flex-basis: 300px;
  }
  .col1 {
    > .row1 {
      font-size: 1.3rem;
      text-align: center;

      > * {
        margin: 18px;
      }
    }
    > .row2 {
      > a {
        color: #aaa;
      }

      .score {
        margin-left: 6px;
        font-size: 1.4rem;
        font-family: ${(p) => p.theme.fontFamily.medium};
      }
      > div {
        display: flex;
        align-items: center;
        margin-bottom: 10px;
      }
    }
  }
  .col2 {
    > a {
      color: #aaa;
      margin-top: 20px;
    }
  }
  .col3 {
    align-items: start;
    justify-content: center;
    > h1 {
      font-family: ${(p) => p.theme.fontFamily.medium};
      margin-bottom: 18px;
      font-size: 1.3rem;
    }
  }
`;
