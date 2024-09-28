import * as style from "./styles";

const ReviewList = ({ bookId }: IReviewListProps) => {
  return (
    <style.Container>
      <div className="caption">회원들의 리뷰</div>
      <div>{bookId}</div>
    </style.Container>
  );
};

export default ReviewList;

interface IReviewListProps {
  bookId: number;
}
