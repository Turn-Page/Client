import { useLocation } from "react-router-dom";
import { ISellDetail } from "../../apis/sell/apiGetSellDetail/types";
import * as style from "./styles";
import { shortenText } from "../../utils/shortenText";
import { convertPriceComma } from "../../utils/convertPriceComma";
import PointCharge from "../../components/PointCharge/PointCharge";
import { useQuery } from "@tanstack/react-query";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { accessTokenState } from "../../recoil/accessTokenState";
import { apiGetMyPoint } from "../../apis/point/apiGetMyPoint/apiGetMyPoint";
import { apiPostPay } from "../../apis/pay/apiPostPay";
import { chargeModalToggleState } from "../../recoil/chargeModalToggle";
import { useState } from "react";
import Pay from "../../components/Pay/Pay";

const Order = () => {
  const { sellData }: { sellData: ISellDetail } = useLocation().state;
  const setChargeModalToggle = useSetRecoilState(chargeModalToggleState);
  const accessToken = useRecoilValue(accessTokenState);
  const [orderNumber, setOrderNumber] = useState("");
  const { data: myPoint, refetch } = useQuery({
    queryKey: ["myPoint", accessToken],
    queryFn: () => apiGetMyPoint(accessToken as string),
  });

  const getBalance = () => {
    let sub = Number(myPoint?.totalPoint) - Number(sellData.price);
    return sub < 0 ? false : `${convertPriceComma(sub)} P`;
  };

  const handlePay = () => {
    let balance = getBalance();
    if (!balance) {
      alert("포인트가 부족합니다.");
      setChargeModalToggle(true);
      return;
    }
    window.confirm("결제를 진행하시겠습니까?") &&
      apiPostPay(accessToken as string, sellData.salePostId)
        .then((data) => {
          setOrderNumber(data.orderNumber);
        })
        .catch(() => {
          alert("결제에 실패했습니다.");
        });
  };

  return (
    <style.Container>
      <style.Title>주문 / 결제</style.Title>

      {orderNumber ? (
        <Pay orderNumber={orderNumber} />
      ) : (
        <div className="content-wrap">
          <style.ProductBox>
            <div className="caption">주문상품</div>
            <div className="product-wrap">
              <div className="img-box">
                <img src={sellData.bookInfo.cover} />
              </div>

              <div className="r-col">
                <style.Col1>
                  <div className="title-wrap">
                    <h1 className="title">{shortenText(sellData.title, 34)}</h1>
                    <style.ColorBoxGrade>{sellData?.grade}</style.ColorBoxGrade>
                  </div>

                  <div className="sub-text-wrap">
                    <div>{sellData.createdAt}</div>
                    <div>{shortenText(sellData.bookInfo.title, 20)}</div>
                  </div>

                  <style.ColorBoxPrice>
                    {convertPriceComma(sellData?.price)}원
                  </style.ColorBoxPrice>
                </style.Col1>
              </div>
            </div>
          </style.ProductBox>

          <style.PurchaseBox>
            <div className="con1">
              <div className="wrap1 point-wrap">
                <h1 className="label">내 보유 포인트</h1>
                <h2 className="point">
                  {" "}
                  {convertPriceComma(myPoint?.totalPoint)} P
                </h2>
              </div>
              <div className="wrap2 point-wrap">
                <h1 className="label">결제 금액</h1>
                <h2 className="point">{convertPriceComma(sellData.price)} P</h2>
              </div>
              <div className="wrap3">
                <PointCharge refetch={refetch} />
              </div>
            </div>
            <div className="con2">
              <div className="wrap4 ">
                <style.PurchaseBtn onClick={handlePay}>
                  결제하기
                </style.PurchaseBtn>
              </div>
              <div className="wrap5 point-wrap">
                {getBalance() ? (
                  <>
                    <h1 className="label">결제 후 포인트</h1>
                    <h2 className="point">{getBalance()}</h2>
                  </>
                ) : (
                  <h1 className="label" style={{ margin: "0 auto" }}>
                    포인트가 부족합니다
                  </h1>
                )}
              </div>
            </div>
          </style.PurchaseBox>
        </div>
      )}
    </style.Container>
  );
};

export default Order;
