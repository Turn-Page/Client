import { IBtn2Props } from "./types";
import { Container } from "./styles";

// 수정, 등록, 삭제 회색버튼
const Btn2 = ({ children, onClick, className, type }: IBtn2Props) => {
  return (
    <Container type={type} className={className} onClick={onClick}>
      {children}
    </Container>
  );
};

export default Btn2;
