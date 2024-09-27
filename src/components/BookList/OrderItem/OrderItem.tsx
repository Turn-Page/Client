import { PiStarFill, PiStarBold } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import Btn1 from "../../buttons/Btn1/Btn1";
import * as style from "./styles";
import { convertPriceComma } from "../../../utils/convertPriceComma";
import { shortenText } from "../../../utils/shortenText";
import { IMyOrder } from "../../../apis/myPage/types";
import { convertDateFormat } from "../../../utils/convertDateFormat";

// 책방, 구매내역에서 띄울 아이템
const OrderItem = ({ orderInfo }: { orderInfo: IMyOrder }) => {
  const navigate = useNavigate();

  return (
    <style.Container>
      <div className="img-box">
        <img
          src={orderInfo.salePostInfo.bookInfo.cover}
          onClick={() =>
            navigate(`/sell/detail/${orderInfo.salePostInfo.salePostId}`)
          }
        />
      </div>

      <div className="r-col">
        <style.Col1>
          <div className="title-wrap">
            <h1 className="title">
              {shortenText(orderInfo.salePostInfo.title, 34)}
            </h1>
            <style.ColorBoxGrade>
              {orderInfo?.salePostInfo.grade}
            </style.ColorBoxGrade>
          </div>

          <div className="sub-text-wrap">
            <div>{orderInfo.salePostInfo.createdAt}</div>
            <div>{shortenText(orderInfo.salePostInfo.bookInfo.title, 20)}</div>
          </div>

          <style.ColorBoxPrice>
            {convertPriceComma(orderInfo?.salePostInfo.price)}원
          </style.ColorBoxPrice>
        </style.Col1>
        <style.Col2>
          {orderInfo.salePostInfo.isSold && (
            <div className="order-date">
              {convertDateFormat(orderInfo.orderedAt)}
            </div>
          )}
          <div className="btn-wrap">
            <Btn1
              onClick={() =>
                navigate(`/book/${orderInfo.salePostInfo.bookInfo.bookId}`)
              }
            >
              해당 도서 정보 살펴보기
            </Btn1>
            <Btn1
              onClick={() =>
                navigate(`/sell/detail/${orderInfo.salePostInfo.salePostId}`)
              }
            >
              판매 게시글 상세히 보기
            </Btn1>
          </div>
        </style.Col2>
      </div>
    </style.Container>
  );
};

export default OrderItem;
