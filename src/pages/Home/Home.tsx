import BookList from "../../components/BookList/BookList";
import { useEffect, useRef, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { searchScrollMoveState } from "../../recoil/searchScrollMoveState";
import * as Style from "./styles";
import BestSellerCarousel from "../../components/home/BestSellerCarousel/BestSellerCarousel";
import TabBtn from "../../components/home/HomeTabBtn/HomeTabBtn";

const Home = () => {
  // 친구들의 독후감 : report, 현재 판매중인 책 : sell
  const [tabState, SetTabState] = useState<"report" | "sell">("report");
  const scrollRef = useRef<HTMLDivElement>(null);
  const searchScrollMove = useRecoilValue(searchScrollMoveState);

  // search 입력 시 스크롤 이동 로직
  useEffect(() => {
    scrollRef?.current?.scrollIntoView({ behavior: "smooth" });
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
        <div ref={scrollRef}></div>
        {/* 탭 버튼 선택 */}
        <TabBtn tabState={tabState} SetTabState={SetTabState} />
        <BookList mode={tabState} />
      </Style.SectionB>
    </Style.Container>
  );
};

export default Home;
