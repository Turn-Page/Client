import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 6px 10px;

  .profile-img {
    border-radius: 100px;
    border: 2px solid ${(p) => p.theme.color.border.border2};
    width: 40px;
    height: 40px;
  }

  .name {
    flex-grow: 1;
    font-size: 1.2rem;
    margin-left: 14px;
  }
`;
