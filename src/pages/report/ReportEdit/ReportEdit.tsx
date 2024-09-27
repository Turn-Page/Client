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
import { useLocation, useNavigate } from "react-router-dom";
import PeriodSelector from "../../../components/PeriodSelector/PeriodSelector";
import { apiPatchReportEdit } from "../../../apis/report/apiPatchReportEdit/apiPatchReportEdit";
import { IReportEditForm } from "./type";
import { IReportDetail } from "../../../apis/report/apiGetReportDetail/types";
import { IPatchReportEdit } from "../../../apis/report/apiPatchReportEdit/types";

const ReportEdit = () => {
  const { reportData }: { reportData: IReportDetail } = useLocation().state;

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm<IReportEditForm>({
    defaultValues: {
      reportTitle: reportData.title,
      reportContent: reportData.content,
      startDate: reportData.startDate,
      endDate: reportData.endDate,
    },
  });

  const accessToken = useRecoilValue(accessTokenState);

  const [selectedBook, setSelectedBook] = useState<ISearchBookAladin>();

  const navigate = useNavigate();

  const onValid = (data: IReportEditForm) => {
    if (!watch("startDate")) {
      setError(
        "startDate",
        { message: "* 독서 기간 미입력" },
        { shouldFocus: true }
      );
      return;
    }

    const patchData = {
      title: data.reportTitle,
      content: data.reportContent,
      startDate: data.startDate,
      endDate: data.endDate,
    };

    apiPatchReportEdit(
      reportData.reportId,
      patchData as IPatchReportEdit,
      accessToken as string
    )
      .then(() => {
        alert("독후감을 수정하였습니다.");
        navigate(`/report/detail/${reportData.reportId}`);
      })
      .catch(({ response: { status } }) => {
        if (status === 401) alert("자신의 독후감만 수정할 수 있습니다.");
      });
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

  return (
    <Style.Container>
      <h1 className="title">독후감 수정</h1>
      <form onSubmit={handleSubmit(onValid, onInvalid)}>
        <Style.Section1>
          <div className="s1-col1">
            <div className="img-box">
              <img src={reportData.bookInfo?.cover} />
            </div>
            <div className="book-info-wrap">
              <li className="title-wrap">
                <span className="title">
                  {splitTitle(reportData.bookInfo?.title)?.title}
                </span>
                <span className="subTitle">
                  {splitTitle(reportData.bookInfo?.title)?.subTitle}
                </span>
              </li>
              <li>저자 : {reportData.bookInfo?.author}</li>
              <li>출판사 : {reportData.bookInfo?.publisher}</li>
              <li>
                출판일 :{" "}
                {convertDateFormat(reportData.bookInfo?.publicationDate)}
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
              <Btn2 type="submit">수정</Btn2>
              <Btn2
                type="button"
                onClick={() => {
                  window.confirm("독후감 수정을 중단하시겠습니까?") &&
                    navigate(`/report/detail/${reportData.reportId}`);
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
    </Style.Container>
  );
};

export default ReportEdit;
