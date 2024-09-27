import Btn2 from "../buttons/Btn2/Btn2";
import * as style from "./styles";

const NotSelectBook = ({ setModalToggle, text }: INotSelectBookProps) => {
  return (
    <style.Container>
      <img
        src={`${process.env.PUBLIC_URL}/assets/manyBooks.png`}
        height={300}
        onClick={() => {
          setModalToggle(true);
        }}
        style={{ cursor: "pointer" }}
      />
      <Btn2
        type="button"
        onClick={() => {
          setModalToggle(true);
        }}
        className="btn"
      >
        {text}
      </Btn2>
    </style.Container>
  );
};

export default NotSelectBook;

interface INotSelectBookProps {
  setModalToggle: React.Dispatch<React.SetStateAction<boolean>>;
  text: string;
}
