import { PiStarFill, PiStarBold } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import Btn1 from "../../buttons/Btn1/Btn1";
import * as style from "./styles";
import { convertPriceComma } from "../../../utils/convertPriceComma";
import { shortenText } from "../../../utils/shortenText";
import { ISell } from "../../../apis/sell/apiGetSellList/types";

// 책방, 구매내역에서 띄울 아이템
const SellItem = ({ sellInfo }: { sellInfo: ISell }) => {
  const navigate = useNavigate();

  return (
    <style.Container>
      <div className="img-box">
        <img
          src={sellInfo.bookInfo.cover}
          onClick={() => navigate(`/sell/detail/${sellInfo.salePostId}`)}
        />
      </div>

      <div className="r-col">
        <style.Col1>
          <div className="title-wrap">
            <h1 className="title">{shortenText(sellInfo.title, 34)}</h1>
            <style.ColorBoxGrade>{sellInfo?.grade}</style.ColorBoxGrade>
          </div>

          <div className="sub-text-wrap">
            <div>{sellInfo.createdAt}</div>
            <div>{shortenText(sellInfo.bookInfo.title, 20)}</div>
          </div>

          <style.ColorBoxPrice>
            {convertPriceComma(sellInfo?.price)}원
          </style.ColorBoxPrice>
        </style.Col1>
        <style.Col2>
          {sellInfo.isSold && <div className="is-sold-text">판매완료</div>}
          <div className="btn-wrap">
            <Btn1 onClick={() => navigate(`/book/${sellInfo.bookInfo.bookId}`)}>
              해당 도서 정보 살펴보기
            </Btn1>
            <Btn1
              onClick={() => navigate(`/sell/detail/${sellInfo.salePostId}`)}
            >
              판매 게시글 상세히 보기
            </Btn1>
          </div>
        </style.Col2>
      </div>
    </style.Container>
  );
};

export default SellItem;
