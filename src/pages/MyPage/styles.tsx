import styled from "styled-components";
import TabBtn from "../../components/home/HomeTabBtn/HomeTabBtn";

export const Container = styled.div`
  padding-bottom: 50px;
  max-width: 1100px;
  margin: 0 auto;
`;

export const Title = styled.h1`
  font-family: ${(p) => p.theme.fontFamily.medium};
  font-size: 2rem;
  margin: 20px 0;
`;
export const Section1 = styled.section`
  padding: 10px 30px;

  > .row {
    display: flex;
    flex-wrap: wrap;

    > .col1 {
      flex-grow: 2;
      margin: 0 10px;
      padding: 30px 0;
    }
    > .col2 {
      padding: 30px 0;
      margin: 0 10px;
      flex-grow: 1;
    }
  }
`;
export const Section2 = styled.section`
  padding: 10px 30px;
`;

export const _TabBtn = styled(TabBtn)`
  &::before {
    display: none;
  }
  margin-top: 30px;
`;
