import { useNavigate } from "react-router-dom";
import { IBestSeller } from "../../../apis/bestseller/types";
import * as Style from "./styles";
import { shortenText } from "../../../utils/shortenText";

const BestSellerPreview = ({ bookInfo }: { bookInfo: IBestSeller }) => {
  const navigate = useNavigate();
  return (
    <Style.Container>
      <Style.BookImgBox
        onClick={() => {
          navigate(`/book/${bookInfo.bookId}`);
        }}
      >
        <img src={bookInfo.cover} height={250} />
      </Style.BookImgBox>
      <Style.BookInfoWrap>
        <h1 className="title">
          {/* 제목이 20자 이상이면 ...으로 줄임 */}
          {shortenText(bookInfo.title, 20)}
        </h1>
        <span>{bookInfo.author}</span>
        <span>{bookInfo.publicationDate}</span>
      </Style.BookInfoWrap>
    </Style.Container>
  );
};

export default BestSellerPreview;
