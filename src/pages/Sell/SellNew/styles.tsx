import styled from "styled-components";
import { StyledTextArea } from "../../../styles/StyledTextArea";

export const Container = styled.div`
  padding-bottom: 50px;
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
        cursor: pointer;
        transition: all 0.3s;
        /* object-fit: fill; */
        height: 240px;
        margin-bottom: 10px;
        display: block;

        &:hover {
          transform: scale(1.02);
        }
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
    justify-content: space-between;
    align-items: end;
    min-height: 200px;
    margin: 15px 0;

    > .row1 {
      width: 100%;
      flex-grow: 0.2;
    }
    > .row2 {
      width: 100%;
      display: flex;
      justify-content: space-between;
      flex-grow: 0.8;
      padding-left: 30px;

      .label {
        color: ${(p) => p.theme.color.text.text2};
        font-size: 1.1rem;
        margin-right: 8px;
      }

      .price-box {
        display: inline-block;
        background-color: ${(p) => p.theme.color.bg.bg2};
        font-family: ${(p) => p.theme.fontFamily.medium};
        width: fit-content;
        border-radius: 10px;
        padding-right: 8px;
        border: 1px solid ${(p) => p.theme.color.btn.bg1};
        &:focus-within {
          border: 1px solid ${(p) => p.theme.color.btn.bg2};
        }

        color: ${(p) => p.theme.color.text.text2};
        input {
          padding: 8px;
          border: none;
          background: none;
          width: 130px;
          font-family: ${(p) => p.theme.fontFamily.medium};
          color: ${(p) => p.theme.color.text.text2};
        }
      }
    }

    > .row3 {
      flex-grow: 0.1;
      > button {
        margin: 0 10px;
      }
    }
  }
`;
export const Section2 = styled.section`
  padding: 0 100px;
`;

export const TextArea = styled(StyledTextArea)`
  width: 80%;
  height: 500px;
`;
