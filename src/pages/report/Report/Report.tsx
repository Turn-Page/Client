import { Link } from "react-router-dom";
import BookList from "../../../components/BookList/BookList";
import * as Style from "./styles";
import FloatingBtn from "../../../components/FloatingBtn/FloatingBtn";

const Report = () => {
  return (
    <Style.Container>
      <h1 className="title">친구들의 독후감</h1>
      <BookList mode="report" />

      <FloatingBtn path="/report/new" />
    </Style.Container>
  );
};

export default Report;
