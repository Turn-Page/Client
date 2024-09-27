import { PiStarFill, PiStarBold } from "react-icons/pi";
import { BookInfoWrap, RowA, RowB } from "./styles";
import { useNavigate } from "react-router-dom";
import { IBestSeller } from "../../../apis/bestseller/types";
import Btn1 from "../../buttons/Btn1/Btn1";
import { Container } from "./styles";
import { useMediaQuery } from "react-responsive";
import { getStar } from "../../../utils/getStar";

const BestSellerItem = ({ bookInfo }: { bookInfo: IBestSeller }) => {
  const navigate = useNavigate();

  const isPc = useMediaQuery({
    query: "(min-width : 1024px)",
  });
  const titleLength = bookInfo.title.length + bookInfo.subTitle.length;
  return (
    <Container>
      <RowA>
        <div className="img-box">
          <img
            src={bookInfo.cover}
            onClick={() => navigate(`/book/${bookInfo.bookId}`)}
            style={{ cursor: "pointer" }}
          />
        </div>

        <BookInfoWrap>
          <div className="ta-wrap">
            <div className="title-wrap">
              <h1>
                {bookInfo.title.length > 20
                  ? bookInfo.title.slice(0, 20) + "..."
                  : bookInfo.title}
              </h1>
              <h2>{isPc && titleLength <= 30 && bookInfo.subTitle}</h2>
            </div>
            <span className="author">{bookInfo.author}</span>
          </div>
          <div className="pd-wrap">
            <span className="publisher">{bookInfo.publisher}</span>
            <span className="date">{bookInfo.publicationDate}</span>
          </div>
          <div className="star-wrap">{getStar(bookInfo.star)}</div>

          {/* 화면이 줄어들면 버튼이 책 정보 아래로 이동 */}
          {!isPc && (
            <RowB>
              <div className="btn-wrap">
                <Btn1>중고 판매 게시글 살펴보기</Btn1>
                <Btn1>친구들이 쓴 독후감 살펴보기</Btn1>
              </div>
            </RowB>
          )}
        </BookInfoWrap>
      </RowA>
      {isPc && (
        <RowB>
          <div className="btn-wrap">
            <Btn1>중고 판매 게시글 살펴보기</Btn1>
            <Btn1>친구들이 쓴 독후감 살펴보기</Btn1>
          </div>
        </RowB>
      )}
    </Container>
  );
};

export default BestSellerItem;
