import { useState } from "react";
import { getStar } from "../../../utils/getStar";
import * as style from "./styles";
import { PiStarFill } from "react-icons/pi";

const ReviewWrite = ({ bookId }: IReviewWriteProps) => {
  const [star, setStar] = useState();

  // <PiStarFill stroke="#5D5757" fill="#FF9E9E" strokeWidth={10} size={26} />

  return (
    <style.Container>
      <div className="caption">리뷰 작성</div>
      <div className="m-28">
        {Array(5).fill(
          <PiStarFill
            className="pointer"
            onClick={(it) => console.log(it.currentTarget.style)}
            stroke="#5D5757"
            fill="#fff"
            strokeWidth={10}
            size={26}
          />
        )}
      </div>
    </style.Container>
  );
};

export default ReviewWrite;

interface IReviewWriteProps {
  bookId: number;
}
