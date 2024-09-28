import { useParams } from "react-router-dom";
import * as style from "./styles";
import BookInfo from "../../components/bookDetail/BookInfo/BookInfo";
import { useEffect, useRef } from "react";
import ReviewList from "../../components/bookDetail/ReviewList/ReviewList";
import ReviewWrite from "../../components/bookDetail/ReviewWrite/ReviewWrite";

const BookDetail = () => {
  const { bookId } = useParams();
  const scrollRef = useRef<HTMLDivElement>(null);

  // 페이지 마운트 시 스크롤을 맨 위로 초기화
  useEffect(() => scrollRef?.current?.scrollIntoView(true), []);

  return (
    <style.Container ref={scrollRef}>
      <BookInfo bookId={Number(bookId)} />
      <ReviewWrite bookId={Number(bookId)} />
      <ReviewList bookId={Number(bookId)} />
    </style.Container>
  );
};

export default BookDetail;
