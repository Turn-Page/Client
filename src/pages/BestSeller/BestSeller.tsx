import BookList from "../../components/BookList/BookList";
import * as Style from "./styles";

const BestSeller = () => {
  return (
    <Style.Container>
      <h1 className="title">베스트 셀러</h1>
      <BookList mode="best" />
    </Style.Container>
  );
};

export default BestSeller;
