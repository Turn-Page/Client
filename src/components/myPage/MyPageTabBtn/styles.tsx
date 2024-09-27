import styled from "styled-components";

export const Container = styled.div`
  padding: 6px 0;
  border-bottom: 1.5px solid #b5b2b2;

  .tab-box {
    display: flex;
    justify-content: space-around;
    align-items: center;

    > span {
      margin-left: 8px;
    }
  }

  .icon {
    font-size: 1.5rem;
    color: ${(p) => p.theme.color.icon.icon2};
  }
  .ant-segmented {
    border-radius: 100px;
    background-color: #fff;
  }
  .ant-segmented-item,
  .ant-segmented-thumb {
    font-family: ${(p) => p.theme.fontFamily.medium};
    border-radius: 100px;
    padding: 10px 8px;
    font-size: 1.1rem;
  }
  .ant-segmented-item-selected .icon {
    transition: all 0.5s;
    color: #fff;
  }
`;
