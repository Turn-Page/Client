import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px;
`;
export const BookImgBox = styled.div`
  box-shadow: 0px 0px 10px 1px #879;
  margin-bottom: 30px;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    transform: scale(1.07);
  }
`;
export const BookInfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex-grow: 1;
  > * {
    margin: 2px;
  }

  > .title {
    font-family: ${(p) => p.theme.fontFamily.medium};
    font-size: 1.2rem;
    margin-bottom: 20px;
  }
`;
