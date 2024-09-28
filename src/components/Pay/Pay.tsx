import * as style from "./styles";
import { useNavigate } from "react-router-dom";

const Pay = ({ orderNumber }: { orderNumber: string }) => {
  const navigate = useNavigate();
  return (
    <style.Container>
      <div className="g1">주문번호: {orderNumber}</div>
      <div className="g2">주문이 성공적으로 완료되었습니다.</div>
      <div className="g3">
        <style.RedirectBtn onClick={() => navigate("/")}>
          홈 화면으로 돌아가기
        </style.RedirectBtn>
      </div>
    </style.Container>
  );
};

export default Pay;
