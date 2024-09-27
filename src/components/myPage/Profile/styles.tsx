import styled from "styled-components";

export const Container = styled.div`
  border: 2px solid ${(p) => p.theme.color.border.border2};
  border-radius: 20px;
  padding: 16px;
  position: relative;
  display: flex;
  padding: 60px 30px;
  color: ${(p) => p.theme.color.text.text2};
  align-items: center;
  height: 300px;
  gap: 16px;

  .profile-btn {
    cursor: pointer;

    border-radius: 20px;
    padding: 10px 17px;
    background-color: ${(p) => p.theme.color.btn.bg3};

    color: ${(p) => p.theme.color.btn.text3};
    outline: none;
    border: none;
  }
  .edit-profile-btn {
    position: absolute;
    right: 20px;
    top: 20px;
  }

  .edit-img-btn {
    padding: 6px 15px;
    width: fit-content;
    margin-top: 16px;
  }
`;

export const Col1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 0 30px;

  > img {
    width: 160px;
    height: 160px;
    object-fit: cover;
    border-radius: 20px;
    border: 2px solid ${(p) => p.theme.color.border.border2};
  }
`;
export const Col2 = styled.div`
  flex-grow: 1;
  > * {
    margin: 12px 0;
  }

  h1 {
    font-family: ${(p) => p.theme.fontFamily.medium};
    font-size: 1.5rem;
  }

  h2 {
    font-size: 1.2rem;
  }
`;
export const Col3 = styled.div`
  align-self: center;
  margin-right: 30px;
  h1 {
    font-size: 1.1rem;
    font-family: ${(p) => p.theme.fontFamily.medium};
    word-spacing: 4px;
    margin: 14px 0;

    > span {
      margin-left: 14px;
    }
  }
`;
