import { useNavigate, useParams } from "react-router-dom";
import * as style from "./styles";
import { useQuery } from "@tanstack/react-query";
import { useRecoilValue } from "recoil";
import { apiGetSellDetail } from "../../../apis/sell/apiGetSellDetail/apiGetSellDetail";
import { accessTokenState } from "../../../recoil/accessTokenState";
import Btn2 from "../../../components/buttons/Btn2/Btn2";
import { convertDateFormat } from "../../../utils/convertDateFormat";
import { convertPriceComma } from "../../../utils/convertPriceComma";
import { apiDeleteSell } from "../../../apis/sell/apiDeleteSell/apiDeleteSell";

const SellDetail = () => {
  const { sellId } = useParams();
  const navigate = useNavigate();
  const accessToken = useRecoilValue(accessTokenState);

  const handleDeleteSell = () => {
    window.confirm("판매글을 삭제하시겠습니까?") &&
      apiDeleteSell(Number(sellId), accessToken as string)
        .then(() => {
          alert("판매글을 삭제하였습니다.");
          navigate("/mypage");
        })
        .catch((err) => {
          alert("판매글 삭제에 실패했습니다.");
        });
  };

  const { data: sellData } = useQuery({
    queryKey: ["sellDetail", sellId, accessToken],
    queryFn: () => apiGetSellDetail(Number(sellId), accessToken as string),
  });

  console.log(sellData);
  return (
    <style.Container>
      <h1 className="page-title">판매글 상세</h1>
      <style.Row1>
        <div className="row1-col1">
          <div className="img-box">
            <img
              src={sellData?.bookInfo.cover}
              onClick={() => navigate(`/book/${sellData?.bookInfo.bookId}`)}
            />
          </div>

          <div className="book-info-wrap">
            <li className="title-wrap">
              <span className="title">{sellData?.bookInfo.title}</span>
              <span className="subTitle">{sellData?.bookInfo?.subTitle}</span>
            </li>
            <li>저자 : {sellData?.bookInfo?.author}</li>
            <li>출판사 : {sellData?.bookInfo?.publisher}</li>
            <li>
              출판일 : {convertDateFormat(sellData?.bookInfo?.publicationDate)}
            </li>
          </div>
        </div>

        <div className="row1-col2">
          <div className="profile-date-wrap">
            <div className="profile-wrap">
              <img
                className="profile-img"
                src={sellData?.memberInfo.profileImage}
              />
              <span className="name">{sellData?.memberInfo.name}</span>
            </div>
            <div className="date">{sellData?.createdAt}</div>
          </div>
          <div className="sell-title color-box ">{sellData?.title}</div>

          <div className="grade-price-wrap">
            <div className="grade-wrap">
              <div className="label">상태</div>
              <div className="text">{sellData?.grade}</div>
            </div>
            <div className="price-wrap">
              <div className="label">가격</div>
              <div className="text">
                {convertPriceComma(String(sellData?.price))}원
              </div>
            </div>
          </div>

          <div className="btn-wrap">
            {/* 판매완료 시 */}
            {sellData?.isSold ? (
              <Btn2 className="btn soldout">판매완료</Btn2>
            ) : // 판매중이면서 자신의 글이면
            sellData?.isMine ? (
              <>
                <Btn2
                  className="btn"
                  onClick={() =>
                    navigate(`/sell/edit`, { state: { sellData: sellData } })
                  }
                >
                  수정
                </Btn2>
                <Btn2 className="btn" onClick={handleDeleteSell}>
                  삭제
                </Btn2>
              </>
            ) : (
              // 판매중이면서 타인의 글이면

              <Btn2
                className="btn"
                onClick={() => navigate(`/order`, { state: { sellData } })}
              >
                주문하기
              </Btn2>
            )}
          </div>
        </div>
      </style.Row1>
      <style.Row2>
        <pre className="content-box color-box ">{sellData?.description}</pre>
      </style.Row2>
    </style.Container>
  );
};

export default SellDetail;
