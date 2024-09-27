import { FaSearch } from "react-icons/fa";
import styled from "styled-components";

export const Search = styled.div`
  border-radius: 16px;
  background-color: ${(p) => p.theme.color.bg.bg4};
  width: 90%;
  position: relative;
  height: 30px;
  display: flex;
  align-items: center;
  padding: 20px;
  padding-left: 10px;
  box-shadow: inset 2px 2px 5px -3px rgb(10, 10, 10);
  border: 1px solid ${(p) => p.theme.color.border.border3};

  // 검색하는 부분
  input {
    background-color: ${(p) => p.theme.color.bg.bg4};
    border: none;
    flex-grow: 1;
    margin: 0 10px;
    outline: none;
    width: 100%;
  }
`;

// 돋보기
export const SearchIcon = styled(FaSearch)`
  flex-shrink: 0;
  cursor: pointer;
  font-size: 1.2rem;
`;
