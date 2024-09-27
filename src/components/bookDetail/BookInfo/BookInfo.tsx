import { useQuery } from "@tanstack/react-query";
import { apiGetBookDetail } from "../../../apis/bookDetail/apiGetBookDetail";
import * as style from "./styles";
import { getStar } from "../../../utils/getStar";
import { Link } from "react-router-dom";
import { IBookInfoProps } from "./type";
import { convertDateFormat } from "../../../utils/convertDateFormat";

const BookInfo = ({ bookId }: IBookInfoProps) => {
  const { data: bookInfo } = useQuery({
    queryKey: ["bookDetail", bookId],
    queryFn: () => apiGetBookDetail(Number(bookId)),
  });

  return (
    <style.Container>
      <style.BookInfo>
        <div className="g1">
          <img className="book-img" src={bookInfo?.cover} />
          <Link className="link-sell" to={`/sell?bookId=${bookInfo?.bookId}`}>
            중고 판매 글 확인하러 가기
          </Link>
        </div>
        <div className="g2">
          <div className="g21">{bookInfo?.title}</div>
          <div className="g22">{bookInfo?.subTitle}</div>
          <div className="g23">
            <span className="label">저자</span>
            <div className="value">{bookInfo?.author}</div>
          </div>
          <div className="g24">
            <span className="label">출판사</span>
            <div className="value">{bookInfo?.publisher}</div>
          </div>
          <div className="g25">
            <span className="label">출판일</span>
            <div className="value">
              {convertDateFormat(bookInfo?.publicationDate)}
            </div>
          </div>

          <div className="g26">
            <div className="star">{getStar(Number(bookInfo?.star))}</div>
            <span className="score">{bookInfo?.star.toFixed(1)}</span>
          </div>
        </div>
      </style.BookInfo>
      <style.Description>
        <div className="caption">책 소개</div>
        <p className="g1">{bookInfo?.description}</p>
      </style.Description>
    </style.Container>
  );
};

export default BookInfo;
