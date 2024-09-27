import { useEffect, useState } from "react";
import BookList from "../../../components/BookList/BookList";
import * as Style from "./styles";
import SearchBookModal from "../../../components/SearchBookModal/SearchBookModal";
import { ISearchBookAladin } from "../../../apis/aladinOpenAPI/types";
import { splitTitle } from "../../../utils/splitTitle";
import { convertDateFormat } from "../../../utils/convertDateFormat";
import Btn2 from "../../../components/buttons/Btn2/Btn2";
import GradeSelector from "../../../components/GradeSelector/GradeSelector";
import { convertPriceComma } from "../../../utils/convertPriceComma";
import { StyledTextArea } from "../../../styles/StyledTextArea";
import { useForm } from "react-hook-form";
import { accessTokenState } from "../../../recoil/accessTokenState";
import { useRecoilValue } from "recoil";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { IoConstructOutline } from "react-icons/io5";
import NotSelectBook from "../../../components/NotSelectBook/NotSelectBook";
import { ISellEditForm } from "./type";
import { ISellDetail } from "../../../apis/sell/apiGetSellDetail/types";
import { apiPatchSellEdit } from "../../../apis/sell/apiPatchSellEdit/apiPatchSellEdit";
import { IPatchSellEdit } from "../../../apis/sell/apiPatchSellEdit/types";

const SellEdit = () => {
  const { sellData }: { sellData: ISellDetail } = useLocation().state;

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm<ISellEditForm>({
    defaultValues: {
      grade: sellData.grade,
      price: String(sellData.price),
      sellTitle: sellData.title,
      sellContent: sellData.description,
    },
  });

  const accessToken = useRecoilValue(accessTokenState);

  const navigate = useNavigate();

  const onValid = (data: ISellEditForm) => {
    if (watch("grade") === "-") {
      setError("grade", { message: "* 상태 미입력" }, { shouldFocus: true });
      return;
    }

    const postData = {
      title: data.sellTitle,
      description: data.sellContent,
      grade: data.grade,
      price: Number(data.price.replace(/,/g, "")) as number,
    };
    apiPatchSellEdit(sellData.salePostId, postData, accessToken as string)
      .then(() => {
        alert("판매글을 수정했습니다.");
        navigate("/sell");
      })
      .catch((err) => alert("판매글 수정에 실패했습니다."));
  };

  const onInvalid = () => {
    // grade 미입력 체크
    if (watch("grade") === "-")
      setError("grade", { message: "* 상태 미입력" }, { shouldFocus: true });
  };

  return (
    <Style.Container>
      <h1 className="title">도서 판매하기</h1>
      <form
        // validation check에 실패하면 상태 미입력 에러도 함께 체크해서 넣어주기
        onSubmit={handleSubmit(onValid, onInvalid)}
      >
        <Style.Section1>
          <div className="s1-col1">
            <div className="img-box">
              <img src={sellData?.bookInfo?.cover} />
            </div>
            <div className="book-info-wrap">
              <li className="title-wrap">
                <span className="title">
                  {splitTitle(sellData?.bookInfo?.title)?.title}
                </span>
                <span className="subTitle">
                  {splitTitle(sellData?.bookInfo?.title)?.subTitle}
                </span>
              </li>
              <li>저자 : {sellData?.bookInfo?.author}</li>
              <li>출판사 : {sellData?.bookInfo?.publisher}</li>
              <li>
                출판일 :{" "}
                {convertDateFormat(sellData?.bookInfo?.publicationDate)}
              </li>
            </div>
          </div>
          <div className="s1-col2">
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
            <div className="row1">
              <StyledTextArea style={{ cursor: "pointer" }}>
                <input
                  {...register("sellTitle", {
                    required: "* 판매글 제목 미입력",
                    maxLength: {
                      value: 30,
                      message: "* 30자 이내로 작성해주세요",
                    },
                  })}
                  placeholder="판매 게시글 제목"
                />
              </StyledTextArea>
              <div className="error-text">{errors?.sellTitle?.message}</div>
            </div>
            <div className="row2">
              <div className="grade-wrap">
                <span className="label">상태</span>
                <GradeSelector
                  setValue={setValue}
                  watch={watch}
                  clearErrors={clearErrors}
                />
                <div className="error-text">{errors?.grade?.message}</div>
              </div>
              <div className="price-wrap">
                <span className="label">가격</span>
                <div className="price-box">
                  <input
                    {...register("price", {
                      required: "* 가격 미입력",
                      pattern: {
                        value: /^[0-9,]*$/,
                        message: "* 숫자만 입력할 수 있습니다",
                      },
                    })}
                    placeholder="가격을 입력하세요"
                    value={convertPriceComma(watch("price"))}
                  />{" "}
                  원
                </div>
                <div className="error-text">{errors?.price?.message}</div>
              </div>
            </div>
            <div className="row3">
              <Btn2 type="submit">등록</Btn2>
              <Btn2
                type="button"
                onClick={() => {
                  window.confirm("판매글 작성을 중단하시겠습니까?") &&
                    navigate(`/sell/detail/${sellData.salePostId}`);
                }}
              >
                취소
              </Btn2>
            </div>
          </div>
        </Style.Section1>
        <Style.Section2>
          <div className="error-text">{errors?.sellContent?.message}</div>

          <StyledTextArea style={{ height: 300 }}>
            <textarea
              {...register("sellContent", {
                required: "* 도서 설명 미입력",
                maxLength: {
                  value: 1000,
                  message: "* 1000자 이내로 작성해주세요",
                },
              })}
              placeholder="도서에 대한 자세한 설명을 작성해주세요."
            />
          </StyledTextArea>
        </Style.Section2>
      </form>
    </Style.Container>
  );
};

export default SellEdit;
