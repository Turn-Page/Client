import BookList from "../../../components/BookList/BookList";
import FloatingBtn from "../../../components/FloatingBtn/FloatingBtn";
import * as Style from "./styles";

const SellList = () => {
  return (
    <Style.Container>
      <h1 className="title">책방</h1>
      <BookList mode="sell" />
      <FloatingBtn path="/sell/new" />
    </Style.Container>
  );
};

export default SellList;
