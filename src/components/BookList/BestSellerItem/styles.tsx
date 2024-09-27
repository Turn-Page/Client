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

  @media (max-width: 1024px) {
    width: 500px;
  }
`;

export const RowA = styled.div`
  display: flex;

  @media (max-width: 1024px) {
    align-items: center;
  }

  > .img-box {
    height: 220px;
    width: 200px;
    overflow: hidden;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 4px;

    > img {
      height: 100%;
      object-fit: contain;
    }
  }
`;
export const RowB = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .price-wrap {
    align-items: center;
    flex-grow: 1;
    text-align: end;
    display: flex;
    justify-content: space-between;
    flex-grow: 0.3;

    // 상태랑 가격 텍스트
    > span {
      margin: 0 10px;
    }
  }

  .btn-wrap {
    margin: 20px;

    // Btn1
    > button {
      width: 100%;
      display: block;
      margin: 10px 0;
    }
    @media (max-width: 1024px) {
      margin: 0;
    }
  }
`;

export const BookInfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin-left: 10px;
  justify-content: space-between;

  .ta-wrap,
  .pd-wrap {
    display: flex;
    flex-direction: column;
    > * {
      margin-bottom: 6px;
    }
  }

  .title-wrap {
    display: flex;
    justify-content: space-between;
  }

  // title
  h1 {
    max-width: 300px;
    margin-right: 14px;
    color: ${(p) => p.theme.color.text.text2};
    font-family: ${(p) => p.theme.fontFamily.medium};
    font-size: 1.2rem;
  }
  // subtitle
  h2 {
    align-self: end;
    flex-grow: 1;
    margin-left: 6px;
    color: #888;
  }

  .author,
  .publisher,
  .date {
    color: #888;
  }

  .star-wrap {
    display: flex;
    flex-grow: 0.6;
    align-items: center;
  }

  @media (max-width: 1080px) {
    > * {
      margin: 4px 0;
    }
  }
`;
