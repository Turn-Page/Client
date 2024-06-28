import * as style from "./styles";

const ReviewWrite = ({ bookId }: IReviewWriteProps) => {
  return (
    <style.Container>
      <div className="caption">리뷰 작성</div>
    </style.Container>
  );
};

export default ReviewWrite;

interface IReviewWriteProps {
  bookId: number;
}
