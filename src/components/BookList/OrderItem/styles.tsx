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

  .r-col {
    display: flex;
    justify-content: space-between;
    flex-grow: 1;
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
      cursor: pointer;
    }
  }

  @media (max-width: 1080px) {
    width: 600px;

    .r-col {
      flex-direction: column;
      margin-left: 50px;
      flex-grow: 1;
    }
  }
`;

export const ColorBoxProto = styled.div`
  padding: 4px 8px;
  color: ${(p) => p.theme.color.text.text5};
  background-color: ${(p) => p.theme.color.bg.bg3};
  border-radius: 8px;
  font-family: ${(p) => p.theme.fontFamily.medium};
  width: fit-content;
`;

export const ColorBoxGrade = styled(ColorBoxProto)`
  color: ${(p) => p.theme.color.text.text5};
`;
export const ColorBoxPrice = styled(ColorBoxProto)`
  color: ${(p) => p.theme.color.text.text2};
`;

export const Col1 = styled.div`
  flex-grow: 1;
  padding: 15px 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: fit-content;
  > * {
    margin-bottom: 10px;
  }

  .title-wrap {
    display: flex;
    align-items: start;

    > .title {
      max-width: 300px;
      margin-right: 14px;
      color: ${(p) => p.theme.color.text.text2};
      font-family: ${(p) => p.theme.fontFamily.medium};
      font-size: 1.2rem;

      @media (max-width: 1080px) {
        max-width: 200px;
      }
    }
  }

  .sub-text-wrap {
    color: ${(p) => p.theme.color.text.text3};
    font-size: 0.9;
    margin-bottom: 20px;

    > * {
      margin: 6px 0;
    }
  }
`;
export const Col2 = styled.div`
  .order-date {
    position: absolute;
    right: 30px;
    top: 30px;
    color: ${(p) => p.theme.color.text.text3};
  }

  .btn-wrap {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    margin-right: 30px;

    > button {
      width: fit-content;
      margin: 6px 0;
    }
  }
`;
