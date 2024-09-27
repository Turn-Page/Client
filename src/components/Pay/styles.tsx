import styled from "styled-components";
import Btn1 from "../buttons/Btn1/Btn1";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  width: 500px;
  min-height: 300px;
  border: 1px solid ${(p) => p.theme.color.border.border2};
  background-color: ${(p) => p.theme.color.bg.bg2};
  border-radius: 15px;
  justify-content: space-around;
  margin: 80px auto;

  .g1 {
    font-family: ${(p) => p.theme.fontFamily.medium};
    font-size: 1.2rem;
    color: ${(p) => p.theme.color.text.text2};
    margin-bottom: 30px;
  }
  .g2 {
    font-size: 1.1rem;
    margin-bottom: 80px;
  }
  .g3 {
    margin-bottom: 20px;
  }
`;

export const RedirectBtn = styled(Btn1)`
  padding: 10px 30px;
`;
