import styled from "styled-components";

export const Container = styled.li`
  width: 100%;
  border-radius: 20px;
  padding: 20px 20px;
  display: flex;
  max-width: 1500px;
  margin: 14px auto;
  box-shadow: 0 0 14px 0px #bcbcbc;
  justify-content: space-between;
  position: relative;
  cursor: pointer;

  .book-img {
    height: 200px;
  }
`;

export const ReportInfo = styled.div`
  flex-grow: 1;
  margin-left: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .book-info-wrap {
    display: flex;
    flex-direction: column;
    max-width: 70%;
    color: ${(p) => p.theme.color.text.text3};

    .title-wrap {
      display: flex;
      align-items: end;

      .book-title {
        color: ${(p) => p.theme.color.text.text1};
        font-size: 1.2rem;
        margin-right: 8px;
      }
    }

    .sub-info-wrap {
      margin-left: 4px;
      margin-top: 16px;
      > * {
        margin-bottom: 4px;
      }
    }
  }

  .report-info-wrap {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    border-left: 3px solid #bbb;
    padding-left: 8px;

    .report-title {
      font-size: 1.2rem;
      margin-bottom: 10px;
    }

    .report-preview {
      margin-left: 10px;
    }
  }
`;

export const SubInfo = styled.div`
  position: absolute;
  right: 20px;
  top: 20px;

  .writer-wrap {
    display: flex;
    align-items: center;
    margin-bottom: 6px;

    .writer-img {
      height: 26px;
      width: 26px;
      border-radius: 100px;
      margin-right: 6px;
    }
  }
`;
