import styled from "styled-components";

export const Container = styled.div`
  padding-bottom: 50px;
  max-width: 1400px;
  margin: 0 auto;

  .color-box {
    background-color: ${(p) => p.theme.color.bg.bg2};
    border-radius: 10px;
    box-shadow: 0 4px 4px 0 #aaa;
    width: 100%;

    line-height: 120%;
  }

  > .page-title {
    margin: 30px;
    font-family: ${(p) => p.theme.fontFamily.medium};
    font-size: 2rem;
  }
`;
export const Row1 = styled.div`
  padding: 0 100px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  flex-wrap: wrap;

  .row1-col1 {
    display: flex;
    justify-content: space-between;
    margin: 15px 0;
    margin-right: 50px;

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

  .row1-col2 {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    width: 500px;

    min-height: 300px;

    .profile-date-wrap {
      display: flex;
      align-items: center;
      justify-content: space-between;

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

    .report-title {
      font-size: 1.1rem;
      padding: 10px;
    }

    .period-wrap {
      width: fit-content;
      padding: 10px;

      .period-rabel {
        color: ${(p) => p.theme.color.text.text2};
      }

      .period-text {
        margin-left: 8px;
        margin-top: 4px;
      }
    }

    .btn-wrap {
      align-self: end;
      flex-grow: 0.4;
      display: flex;
      align-items: center;

      .btn {
        padding: 8px 30px;
        width: fit-content;
        margin: 0 10px;
      }
    }
  }
`;

export const Row2 = styled.div`
  padding: 0 100px;

  .content-box {
    min-height: 300px;
    font-size: 1.1rem;
    padding: 20px;
  }
`;
