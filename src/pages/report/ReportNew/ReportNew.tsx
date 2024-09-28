import { useState } from "react";
import * as Style from "./styles";
import SearchBookModal from "../../../components/SearchBookModal/SearchBookModal";
import { ISearchBookAladin } from "../../../apis/aladinOpenAPI/types";
import { splitTitle } from "../../../utils/splitTitle";
import { convertDateFormat } from "../../../utils/convertDateFormat";
import Btn2 from "../../../components/buttons/Btn2/Btn2";
import { StyledTextArea } from "../../../styles/StyledTextArea";
import { useForm } from "react-hook-form";
import { accessTokenState } from "../../../recoil/accessTokenState";
import { useRecoilValue } from "recoil";
import { useNavigate } from "react-router-dom";
import { IReportNewForm } from "./type";
import { IPostReportNew } from "../../../apis/report/apiPostReportNew/types";
import { apiPostReportNew } from "../../../apis/report/apiPostReportNew/apiPostReportNew";
import NotSelectBook from "../../../components/NotSelectBook/NotSelectBook";

import PeriodSelector from "../../../components/PeriodSelector/PeriodSelector";

const ReportNew = () => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm<IReportNewForm>();

  const accessToken = useRecoilValue(accessTokenState);

  const [selectedBook, setSelectedBook] = useState<ISearchBookAladin>();

  const [modalToggle, setModalToggle] = useState(true);

  const navigate = useNavigate();

  const onValid = (data: IReportNewForm) => {
    if (!watch("startDate")) {
      setError(
        "startDate",
        { message: "* 독서 기간 미입력" },
        { shouldFocus: true }
      );
      return;
    }

    const postData = {
      title: data.reportTitle,
      content: data.reportContent,
      bookInfo: selectedBook,
      startDate: data.startDate,
      endDate: data.endDate,
    };

    apiPostReportNew(postData as IPostReportNew, accessToken as string)
      .then(() => {
        alert("독후감이 성공적으로 등록되었습니다.");
        navigate("/report");
      })
      .catch(() => alert("독후감 등록에 실패했습니다."));
  };

  const onInvalid = () => {
    // startDate 미입력 체크
    if (!watch("startDate"))
      setError(
        "startDate",
        { message: "* 독서 기간 미입력" },
        { shouldFocus: true }
      );
  };

  // 책을 선택하지 않은 경우
  if (!selectedBook)
    return (
      <>
        <NotSelectBook
          setModalToggle={setModalToggle}
          text="독후감을 작성할 책을 선택하세요"
        />
        <SearchBookModal
          modalToggle={modalToggle}
          setModalToggle={setModalToggle}
          setSelectedBook={setSelectedBook}
        />
      </>
    );
  return (
    <Style.Container>
      <h1 className="title">독후감 작성</h1>
      <form onSubmit={handleSubmit(onValid, onInvalid)}>
        <Style.Section1>
          <div className="s1-col1">
            <div className="img-box">
              <img
                src={selectedBook?.cover}
                onClick={() => {
                  setModalToggle(true);
                }}
              />
              <Btn2
                type="button"
                onClick={() => {
                  setModalToggle(true);
                }}
              >
                책 선택하기
              </Btn2>
            </div>
            <div className="book-info-wrap">
              <li className="title-wrap">
                <span className="title">
                  {splitTitle(selectedBook?.title)?.title}
                </span>
                <span className="subTitle">
                  {splitTitle(selectedBook?.title)?.subTitle}
                </span>
              </li>
              <li>저자 : {selectedBook?.author}</li>
              <li>출판사 : {selectedBook?.publisher}</li>
              <li>
                출판일 : {convertDateFormat(selectedBook?.publicationDate)}
              </li>
            </div>
          </div>
          <div className="s1-col2">
            <div className="title-wrap">
              <StyledTextArea style={{ cursor: "pointer" }}>
                <input
                  {...register("reportTitle", {
                    required: "* 독후감 제목 미입력",
                    maxLength: {
                      value: 30,
                      message: "* 30자 이내로 작성해주세요",
                    },
                  })}
                  placeholder="독후감 제목"
                />
              </StyledTextArea>
              <div className="error-text">{errors?.reportTitle?.message}</div>
            </div>
            <div className="period-wrap">
              <PeriodSelector
                setValue={setValue}
                setError={setError}
                clearErrors={clearErrors}
                watch={watch}
              />
              <div className="error-text">{errors?.startDate?.message}</div>
            </div>
            <div className="btn-wrap">
              <Btn2 type="submit">등록</Btn2>
              <Btn2
                type="button"
                onClick={() => {
                  window.confirm("독후감 작성을 중단하시겠습니까?") &&
                    navigate("/report");
                }}
              >
                취소
              </Btn2>
            </div>
          </div>
        </Style.Section1>
        <Style.Section2>
          <div className="error-text">{errors?.reportContent?.message}</div>

          <StyledTextArea style={{ height: 300 }}>
            <textarea
              {...register("reportContent", {
                required: "* 독후감 미입력",
                maxLength: {
                  value: 1000,
                  message: "* 1000자 이내로 작성해주세요",
                },
              })}
              placeholder="독후감을 작성해주세요"
            />
          </StyledTextArea>
        </Style.Section2>
      </form>

      <SearchBookModal
        modalToggle={modalToggle}
        setModalToggle={setModalToggle}
        setSelectedBook={setSelectedBook}
      />
    </Style.Container>
  );
};

export default ReportNew;
