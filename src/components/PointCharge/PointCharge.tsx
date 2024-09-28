import ReactModal from "react-modal";
import * as style from "./styles";
import { IoClose } from "react-icons/io5";
import { GrMoney } from "react-icons/gr";
import { convertPriceComma } from "../../utils/convertPriceComma";
import { apiPatchPointCharge } from "../../apis/point/apiPatchPointCharge/apiPatchPointCharge";
import { useRecoilState, useRecoilValue } from "recoil";
import { accessTokenState } from "../../recoil/accessTokenState";
import { IPointChargeProps } from "./type";
import { chargeModalToggleState } from "../../recoil/chargeModalToggle";

const PointCharge = ({ refetch }: IPointChargeProps) => {
  const [chargeModalToggle, setChargeModalToggle] = useRecoilState(
    chargeModalToggleState
  );

  const points = [1000, 5000, 10000, 30000, 50000];
  const accesstoken = useRecoilValue(accessTokenState);

  const handlePointCharge = (point: number) => {
    apiPatchPointCharge(accesstoken as string, point)
      .then(() => {
        alert(`${convertPriceComma(point)} 포인트를 충전했습니다.`);
        setChargeModalToggle(false);
        refetch();
      })
      .catch(() => alert("포인트 충전을 실패했습니다."));
  };

  return (
    <style.Container>
      <div className="g1" onClick={() => setChargeModalToggle(true)}>
        <GrMoney />
        <div className="charge-text">포인트 충전하기</div>
      </div>

      <ReactModal
        isOpen={chargeModalToggle}
        style={modalStyle}
        onRequestClose={() => setChargeModalToggle(false)}
      >
        <style.Modal>
          <div className="header">
            <h1 className="header-title">포인트 충전</h1>
            <IoClose
              size={20}
              onClick={() => setChargeModalToggle(false)}
              style={{
                cursor: "pointer",
                color: "#aaa",
                position: "absolute",
                right: 20,
                top: 20,
              }}
            />
          </div>

          <ul className="point-list">
            {points.map((it) => (
              <li className="point-item">
                <h1 className="point-text">{convertPriceComma(it)} P</h1>
                <style.ChargeBtn onClick={() => handlePointCharge(it)}>
                  충전
                </style.ChargeBtn>
              </li>
            ))}
          </ul>
        </style.Modal>
      </ReactModal>
    </style.Container>
  );
};

export default PointCharge;

const modalStyle: ReactModal.Styles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  },
  content: {
    width: "400px",
    height: "fit-content",
    borderRadius: "25px",
    zIndex: "150",
    transform: "translate(-50%, -50%)",
    padding: "30px",
    top: "50%",
    left: "50%",
    boxShadow: "0px 0px 100px 6px rgba(0, 0, 0, 0.3)",
  },
};
