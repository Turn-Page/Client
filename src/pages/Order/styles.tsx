import styled from "styled-components";
import Btn1 from "../../components/buttons/Btn1/Btn1";

export const Container = styled.div`
  padding-bottom: 50px;
  max-width: 1100px;
  margin: 0 auto;

  .content-wrap {
    display: flex;
    justify-content: center;
    margin: 0 auto;
    margin-top: 20px;
    flex-wrap: wrap;
    padding: 20px;
    gap: 30px;
  }
`;

export const Title = styled.h1`
  margin-top: 40px;
  margin-left: 50px;
  font-family: ${(p) => p.theme.fontFamily.medium};
  font-size: 2rem;
`;

export const ProductBox = styled.div`
  padding: 20px;
  border: 1px solid ${(p) => p.theme.color.border.border2};
  border-radius: 20px;
  min-width: 500px;
  flex-grow: 0.8;

  .caption {
    padding: 10px;
    border-bottom: 1px solid ${(p) => p.theme.color.border.border2};
    font-family: ${(p) => p.theme.fontFamily.medium};
  }

  .product-wrap {
    width: 100%;
    border-radius: 20px;
    padding: 20px 20px;
    display: flex;
    margin: 14px auto;
    justify-content: space-between;

    .r-col {
      display: flex;
      justify-content: space-between;
      flex-grow: 1;
    }

    .btn-wrap {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 100%;
      margin-right: 30px;

      // Btn1
      > button {
        width: fit-content;
        margin: 6px 0;
      }
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
  }
`;
export const PurchaseBox = styled.div`
  border: 1px solid ${(p) => p.theme.color.border.border2};
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 40px 30px;
  width: 240px;
  min-height: 400px;
  flex-grow: 0.2;

  .point-wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    > .label {
      font-family: ${(p) => p.theme.fontFamily.medium};
    }

    > .point {
    }
  }

  .con1 {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-grow: 0.4;
    justify-content: space-around;
    width: 100%;

    .wrap1 {
    }

    .wrap2 {
    }

    .wrap3 {
    }
  }
  .con2 {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-grow: 0.2;
    width: 100%;
    justify-content: space-around;
  }
`;

export const ColorBoxProto = styled.div`
  padding: 4px 8px;
  color: ${(p) => p.theme.color.text.text5};
  background-color: ${(p) => p.theme.color.bg.bg3};
  border-radius: 8px;
  font-family: ${(p) => p.theme.fontFamily.medium};
  width: fit-content;
  flex-shrink: 0;
`;

export const ColorBoxGrade = styled(ColorBoxProto)`
  color: ${(p) => p.theme.color.text.text5};
`;
export const ColorBoxPrice = styled(ColorBoxProto)`
  color: ${(p) => p.theme.color.text.text2};
`;
export const PurchaseBtn = styled(Btn1)`
  border-radius: 10px;
  width: 160px;
  padding: 10px 0;
  font-size: 1.1rem;
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
