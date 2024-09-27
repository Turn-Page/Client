import styled from "styled-components";

export const Container = styled.div``;

export const BookInfo = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 80px;

  .g1 {
    display: flex;
    flex-direction: column;
    align-items: center;
    .book-img {
      height: 400px;
    }
    .link-sell {
      margin-top: 10px;
      transition: all 0.3s;
      &:hover {
        transform: scale(1.03);
        color: ${(p) => p.theme.color.icon.icon2};
      }
    }
  }
  .g2 {
    .g21 {
      font-family: ${(p) => p.theme.fontFamily.medium};
      font-size: 1.4rem;
      margin: 10px 0;
    }
    .g22 {
      font-size: 1.1rem;
      margin-bottom: 50px;
    }
    .g23,
    .g24,
    .g25 {
      display: flex;
      margin-bottom: 10px;
    }

    .g26 {
      margin-top: 40px;
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .label {
      width: 80px;
      color: ${(p) => p.theme.color.text.text2};
    }
    .value {
    }
  }
`;
export const Description = styled.div`
  margin-top: 180px;

  .g1 {
    padding: 30px 100px;
    font-size: 1.1rem;
    line-height: 130%;
  }
`;
