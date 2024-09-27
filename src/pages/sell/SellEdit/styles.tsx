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
        transition: all 0.3s;
        /* object-fit: fill; */
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
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    width: 400px;

    min-height: 300px;

    > .profile-date-wrap {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      margin-bottom: 20px;

      .profile-wrap {
        display: flex;
        align-items: center;

        .profile-img {
          height: 40px;
          width: 40px;
          border-radius: 100px;

          border: 2px solid ${(p) => p.theme.color.text.text2};
          margin-right: 6px;
        }
        .name {
          font-size: 1.1rem;
          font-family: ${(p) => p.theme.fontFamily.medium};
        }
      }
      .date {
        color: ${(p) => p.theme.color.text.text2};
        font-size: 0.9rem;
      }
    }

    > .row1 {
      width: 100%;
      flex-grow: 0.2;
    }
    > .row2 {
      width: 100%;
      display: flex;
      justify-content: space-between;
      flex-grow: 0.6;
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
      flex-grow: 0.4;
      display: flex;
      align-items: center;
      justify-content: end;
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
  height: 500px;
`;
