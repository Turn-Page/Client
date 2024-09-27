import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { Container } from "./styles";
import { apiGetBestSeller } from "../../apis/bestseller/apiGetBestSeller";
import { IBestSeller } from "../../apis/bestseller/types";
import BestSellerItem from "./BestSellerItem/BestSellerItem";
import { InView, useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import { apiGetReportList } from "../../apis/report/apiGetReportList/apiGetReportList";
import { useRecoilValue } from "recoil";
import { accessTokenState } from "../../recoil/accessTokenState";
import { IReport } from "../../apis/report/apiGetReportList/types";
import ReportItem from "./ReportItem/ReportItem";
import SellItem from "./SellItem/SellItem";
import { ISell } from "../../apis/sell/apiGetSellList/types";
import { apiGetSellList } from "../../apis/sell/apiGetSellList/apiGetSellList";
import { apiGetMyReports } from "../../apis/myPage/apiGetMyReports";
import { Checkbox, CheckboxProps, ConfigProvider } from "antd";
import { useTheme } from "styled-components";
import { apiGetMyOrderList } from "../../apis/myPage/apiGetMyOrderList";
import { IMyOrder } from "../../apis/myPage/types";
import OrderItem from "./OrderItem/OrderItem";

// mode : best, sell, report
const BookList = ({
  mode,
}: {
  mode: "best" | "sell" | "report" | "myReport" | "mySell" | "myOrder";
}) => {
  const { ref, inView } = useInView();

  const theme = useTheme();
  const accessToken = useRecoilValue(accessTokenState);

  useEffect(() => {
    // 스크롤 감지 블럭이 화면에 들어오고 다음페이지가 존재하는 경우 api 호출
    if (inView && hasNextPage) fetchNextPage();
  }, [inView]);

  const { isLoading, data, fetchNextPage, hasNextPage } = useInfiniteQuery<
    IBestSeller[] | IReport[] | ISell[] | IMyOrder[]
  >({
    queryKey: [mode, accessToken],
    queryFn: getQueryFn(mode, accessToken as string),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => {
      // 데이터가 없는 페이지까지 호출한 후 그 다음부터는 다음페이지가 없음을 알려주어 호출하지 않음
      // nextPageParam으로 undefined를 넘겨주면 더이상 fetchNextPage가 작동하지 않는다
      if (lastPage.length === 0) return undefined;

      return allPages.length;
    },
  });

  const [isSoldToggle, setIsSoldToggle] = useState(false);

  const checkChange: CheckboxProps["onChange"] = (e) => {
    setIsSoldToggle(e.target.checked);
  };

  return (
    <Container>
      {/* 판매완료 보기 체크박스 */}
      {mode === "sell" && (
        <ConfigProvider
          theme={{
            token: {
              fontFamily: theme.fontFamily.light,
              colorPrimary: theme.color.icon.icon2,
              colorText: theme.color.text.text2,
              colorBorder: theme.color.text.text3,
            },
          }}
        >
          <Checkbox
            checked={isSoldToggle}
            onChange={checkChange}
            className="check-box"
          >
            판매완료 글 포함
          </Checkbox>
        </ConfigProvider>
      )}

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
                reportInfo={info as IReport}
              />
            )}
            {mode === "myOrder" && (
              <OrderItem
                key={(info as IMyOrder).orderId}
                orderInfo={info as IMyOrder}
              />
            )}
            {mode === "sell" &&
              // 판매완료 포함인 경우
              (isSoldToggle ? (
                <SellItem
                  key={(info as ISell).salePostId}
                  sellInfo={info as ISell}
                />
              ) : (
                // 판매완료 제외인 경우
                !(info as ISell).isSold && (
                  <SellItem
                    key={(info as ISell).salePostId}
                    sellInfo={info as ISell}
                  />
                )
              ))}
            {mode === "myReport" && (
              <ReportItem
                key={(info as IReport).reportId}
                reportInfo={info as IReport}
              />
            )}
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
  mode: "best" | "report" | "sell" | "myReport" | "mySell" | "myOrder",
  accessToken: string
): any => {
  if (mode === "best") return apiGetBestSeller;
  if (mode === "sell") return apiGetSellList;

  if (mode === "report")
    return ({ pageParam }: { pageParam: number }) =>
      apiGetReportList({ pageParam, accessToken });
  if (mode === "myReport")
    return ({ pageParam }: { pageParam: number }) =>
      apiGetMyReports({ pageParam, accessToken });
  if (mode === "myOrder")
    return ({ pageParam }: { pageParam: number }) =>
      apiGetMyOrderList({ pageParam, accessToken });
};
