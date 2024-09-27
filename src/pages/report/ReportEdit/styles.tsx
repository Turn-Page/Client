import styled from "styled-components";
import { StyledTextArea } from "../../../styles/StyledTextArea";

export const Container = styled.div`
  padding-bottom: 50px;
  max-width: 1400px;
  margin: 0 auto;
  > .title {
    margin: 30px;
    font-family: ${(p) => p.theme.fontFamily.medium};
    font-size: 2rem;
  }

  .error-text {
    color: red;
    font-size: 0.9rem;
    margin: 6px;
  }
`;

export const Section1 = styled.section`
  padding: 0 100px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  flex-wrap: wrap;

  .s1-col1 {
    display: flex;
    justify-content: space-between;
    margin: 15px 0;

    .img-box {
      display: flex;
      flex-direction: column;
      align-items: center;

      & > img {
        box-shadow: 0px 0px 10px 1px #879;
        height: 240px;
        margin-bottom: 10px;
        display: block;
      }
    }

    .book-info-wrap {
      width: 300px;

      > li:not(:first-child) {
        margin-bottom: 8px;
        margin-left: 4px;
      }

      margin-left: 30px;
      color: ${(p) => p.theme.color.text.text3};

      > .title-wrap {
        margin-bottom: 20px;
        display: flex;
        flex-wrap: wrap;
        align-items: center;

        .title {
          margin-right: 8px;
          color: ${(p) => p.theme.color.text.text2};
          font-size: 1.2rem;
          margin-bottom: 4px;
        }
      }
    }
  }

  .s1-col2 {
    width: 400px;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    align-items: end;
    min-height: 200px;
    padding: 20px 0;
    min-height: 240px;

    > .title-wrap {
      width: 100%;
      flex-grow: 0.2;
    }
    > .period-wrap {
      flex-grow: 0.4;
    }

    > .btn-wrap {
      flex-grow: 0.2;
      > button {
        margin: 0 10px;
        padding: 8px 30px;
        width: fit-content;
      }
    }
  }
`;
export const Section2 = styled.section`
  padding: 0 100px;
`;

export const TextArea = styled(StyledTextArea)`
  width: 80%;
  min-height: 500px;
`;
