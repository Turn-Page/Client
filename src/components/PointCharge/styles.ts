import styled from "styled-components";
import Btn1 from "../buttons/Btn1/Btn1";

export const Container = styled.div`
  .g1 {
    display: flex;
    align-items: center;
    cursor: pointer;

    .charge-text {
      text-decoration: underline;
      font-size: 0.9rem;
      margin-left: 6px;
    }
  }
`;
export const Modal = styled.div`
  .header {
    margin-bottom: 20px;
    .header-title {
      font-size: 1.2rem;
      color: ${(p) => p.theme.color.text.text2};
      font-family: ${(p) => p.theme.fontFamily.medium};
    }
  }

  .point-list {
    .point-item {
      padding: 10px;
      border-bottom: 1px solid #aaa;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .point-text {
        color: ${(p) => p.theme.color.text.text2};
        font-size: 1.1rem;
      }
    }
  }
`;
export const ChargeBtn = styled(Btn1)`
  width: 100px;
`;
