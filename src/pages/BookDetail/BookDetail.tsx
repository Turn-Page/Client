import { Link, useParams } from "react-router-dom";
import * as style from "./styles";
import { useQuery } from "@tanstack/react-query";
import { apiGetBookDetail } from "../../apis/bookDetail/apiGetBookDetail";
import { getStar } from "../../utils/getStar";
import BookInfo from "../../components/bookDetail/BookInfo/BookInfo";
import Review from "../../components/bookDetail/ReviewList/ReviewList";
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
