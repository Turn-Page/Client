import BookList from "../../components/BookList/BookList";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { searchScrollMoveState } from "../../recoil/searchScrollMoveState";
import { scroller } from "react-scroll";
import * as Style from "./styles";
import BestSellerCarousel from "../../components/home/BestSellerCarousel/BestSellerCarousel";
import TabBtn from "../../components/TabBtn/TabBtn";

const Home = () => {
  // 친구들의 독후감 : report, 현재 판매중인 책 : sell
  const [tabState, SetTabState] = useState<
    "report" | "sell" | "myReport" | "mySell"
  >("report");

  const [searchScrollMove, setSearchScrollMove] = useRecoilState(
    searchScrollMoveState
  );

  // search 입력 시 스크롤 이동 로직
  useEffect(() => {
    if (searchScrollMove)
      scroller.scrollTo("searchScrollMove", {
        duration: 300,
        smooth: true,
        offset: -50, // 스크롤 위치 세부조정
      });
  }, [searchScrollMove]);

  return (
    <Style.Container>
      {/* 베스트셀러 */}

      <Style.SectionA>
        <h1 className="title">베스트 셀러</h1>

        {/* carousel */}
        <BestSellerCarousel />
      </Style.SectionA>

      {/* 독후감, 판매중인책*/}
      <Style.SectionB id="searchScrollMove">
        {/* 탭 버튼 선택 */}
        <TabBtn tabState={tabState} SetTabState={SetTabState} mode="home" />
        <BookList mode={tabState} />
      </Style.SectionB>
    </Style.Container>
  );
};

export default Home;
