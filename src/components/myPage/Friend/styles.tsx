import styled from "styled-components";

export const Container = styled.div`
  border-radius: 20px;
  border: 2px solid ${(p) => p.theme.color.border.border2};
  padding: 22px;
  color: ${(p) => p.theme.color.text.text2};
  font-family: ${(p) => p.theme.fontFamily.medium};
  padding-bottom: 0;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 6px;
  border-bottom: 1px solid ${(p) => p.theme.color.border.border3};
  font-size: 1.1rem;

  > .add-friend {
    padding: 6px 10px;
    background-color: ${(p) => p.theme.color.btn.bg1};
    color: ${(p) => p.theme.color.btn.text1};
    outline: none;
    border: none;
    border-radius: 5px;
    font-family: ${(p) => p.theme.fontFamily.light};
    font-size: 1.1rem;
  }
`;

export const FollowTabWrap = styled.div<{ isActive: "following" | "follower" }>`
  display: flex;
  flex-grow: 1;
  position: relative;

  &::after {
    content: "";
    display: inline-block;
    position: absolute;
    width: 86px;
    border-radius: 10px;
    left: -2px;
    bottom: -14px;
    height: 3px;
    background-color: ${(p) => p.theme.color.text.text2};
    transition: all 0.3s;

    transform: translateX(${(p) => (p.isActive === "follower" ? "92px" : 0)});
  }

  .following-btn {
    margin-right: 16px;

    cursor: pointer;
    color: ${(p) =>
      p.isActive === "following"
        ? p.theme.color.text.text2
        : p.theme.color.text.text3};
  }

  .follower-btn {
    cursor: pointer;
    color: ${(p) =>
      p.isActive === "follower"
        ? p.theme.color.text.text2
        : p.theme.color.text.text3};
  }
`;

export const List = styled.ul`
  height: 230px;
  overflow: auto;
  margin-right: 3px;
  margin-bottom: 4px;
  padding-top: 10px;
`;
