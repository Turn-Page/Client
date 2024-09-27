import { Link, useLocation } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";
import * as Style from "./styles";
import { searchScrollMoveState } from "../../recoil/searchScrollMoveState";
import { accessTokenState } from "../../recoil/accessTokenState";
import { useCallback, useEffect } from "react";
import SearchBox from "../SearchBox/SearchBox";
import { throttle } from "lodash";

const Header = () => {
  // 현재 보고있는 페이지의 Link 버튼을 굵게 만들기 위함
  const location = useLocation();
  const isVisit = (path: string) => location.pathname === path;

  const setSearchScrollMove = useSetRecoilState(searchScrollMoveState);

  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    setAccessToken("");
  };

  // 현재 url을 받아옴
  const { pathname } = useLocation();

  // throttle을 걸어서 빠르게 타이핑 해도 스크롤이 끊기면서 이동하지 않도록 함
  const handleSearchInput = useCallback(
    throttle(() => {
      setSearchScrollMove((v) => !v);
    }, 500),
    []
  );

  return (
    <Style.Container>
      {/* 검색창 왼쪽 */}
      <Style.RowA>
        <Style.Link_ to="/" isVisit={isVisit("/")}>
          <img
            src={`${process.env.PUBLIC_URL}/assets/logo.svg`}
            alt="logo"
            width="38px"
          />
        </Style.Link_>

        <Style.Link_ to="best" isVisit={isVisit("/best")}>
          베스트셀러
        </Style.Link_>
        <Style.Link_ to="report" isVisit={isVisit("/report")}>
          독후감
        </Style.Link_>
        <Style.Link_ to="sell" isVisit={isVisit("/sell")}>
          책방
        </Style.Link_>
      </Style.RowA>

      {/* 검색창 */}
      <Style.RowB>
        <SearchBox>
          <input
            type="text"
            placeholder="구매하고 싶은 책을 입력해 주세요"
            onChange={handleSearchInput}
          />
        </SearchBox>
      </Style.RowB>

      {/* 검색창 오른쪽 */}
      <Style.RowC>
        <Style.Link_ to="/sell/new" isVisit={isVisit("/sell/new")}>
          책 판매하기
        </Style.Link_>

        {accessToken ? (
          <>
            <Style.Link_ to="mypage" isVisit={isVisit("/mypage")}>
              마이페이지
            </Style.Link_>
            <Style.Link_ to="/" onClick={handleLogout}>
              로그아웃
            </Style.Link_>
          </>
        ) : (
          <Style.Link_
            to="login"
            state={{ prePagePath: pathname }}
            isVisit={isVisit("/login")}
          >
            로그인
          </Style.Link_>
        )}
      </Style.RowC>
    </Style.Container>
  );
};

export default Header;
