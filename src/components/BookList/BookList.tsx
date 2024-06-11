import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { Container } from "./styles";
import { apiGetBestSeller } from "../../apis/bestseller/apiGetBestSeller";
import { IBestSeller } from "../../apis/bestseller/types";
import BestSellerItem from "./BestSellerItem/BestSellerItem";
import { InView, useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { apiGetReports } from "../../apis/report/apiGetReports";
import { useRecoilValue } from "recoil";
import { accessTokenState } from "../../recoil/accessTokenState";
import { IReport } from "../../apis/report/types";
import ReportItem from "./ReportItem/ReportItem";
import { ISell } from "../../apis/store/types";
import SellItem from "./StoreItem/StoreItem";
import { apiGetSell } from "../../apis/store/apiGetStore";

// mode : best, sell, report
const BookList = ({
  mode,
}: {
  mode: "best" | "sell" | "report" | "myReport" | "mySell" | "myBuy";
}) => {
  const { ref, inView } = useInView();

  const accessToken = useRecoilValue(accessTokenState);

  useEffect(() => {
    // 스크롤 감지 블럭이 화면에 들어오고 다음페이지가 존재하는 경우 api 호출
    if (inView && hasNextPage) fetchNextPage();
  }, [inView]);

  const { isLoading, data, fetchNextPage, hasNextPage } = useInfiniteQuery<
    IBestSeller[] | IReport[] | ISell[]
  >({
    queryKey: [mode],
    queryFn: getQueryFn(mode, accessToken as string),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => {
      // 데이터가 없는 페이지까지 호출한 후 그 다음부터는 다음페이지가 없음을 알려주어 호출하지 않음
      // nextPageParam으로 undefined를 넘겨주면 더이상 fetchNextPage가 작동하지 않는다
      if (lastPage.length === 0) return undefined;

      return allPages.length;
    },
  });

  return (
    <Container>
      {/* 리스트 렌더링 */}
      {data?.pages?.map((infos) =>
        infos.map((info) => (
          <>
            {mode === "best" && (
              <BestSellerItem
                key={(info as IBestSeller).bookId}
                bookInfo={info as IBestSeller}
              />
            )}
            {mode === "report" && (
              <ReportItem
                key={(info as IReport).reportId}
                bookInfo={info as IReport}
              />
            )}
            {mode === "sell" && (
              <SellItem
                key={(info as ISell).salePostId}
                sellInfo={info as ISell}
              />
            )}
            {/* {mode === "mySell" && (
              <SellItem
                key={(info as IMySell).salePostId}
                sellInfo={info as IMySell}
              />
            )} */}
          </>
        ))
      )}

      {/* 스크롤 감지 스피너*/}
      {hasNextPage && (
        <img
          src={`${process.env.PUBLIC_URL}/assets/spinner1.gif`}
          ref={ref}
          style={{ width: 60, display: "block", margin: "30px auto" }}
        />
      )}
    </Container>
  );
};

export default BookList;

const getQueryFn = (
  mode: "best" | "report" | "sell" | "myReport" | "mySell" | "myBuy",
  accessToken: string
): any => {
  if (mode === "report")
    return ({ pageParam }: { pageParam: number }) =>
      apiGetReports({ pageParam, accessToken });
  if (mode === "best") return apiGetBestSeller;
  if (mode === "sell") return apiGetSell;
  // if (mode === "mySell") return apiGetMySell;
};
