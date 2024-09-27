import { useNavigate } from "react-router-dom";
import { IReport } from "../../../apis/report/apiGetReportList/types";
import { shortenText } from "../../../utils/shortenText";
import * as style from "./styles";

const ReportItem = ({ reportInfo }: { reportInfo: IReport }) => {
  const navigate = useNavigate();

  return (
    <style.Container
      onClick={() => navigate(`/report/detail/${reportInfo.reportId}`)}
    >
      <img className="book-img" src={reportInfo.bookInfo.cover} />

      <style.ReportInfo>
        <div className="book-info-wrap">
          <div className="title-wrap">
            <div className="book-title">{reportInfo.bookInfo.title}</div>
            <div className="book-sub-title">{reportInfo.bookInfo.subTitle}</div>
          </div>
          <div className="sub-info-wrap">
            <div className="author">글쓴이 : {reportInfo.bookInfo.author}</div>
            <div className="publisher">
              출판사 : {reportInfo.bookInfo.publisher}
            </div>
          </div>
        </div>
        <div className="report-info-wrap">
          <div className="report-title">{reportInfo.title}</div>
          <div className="report-preview">
            {shortenText(reportInfo.content, 150)}
          </div>
        </div>
      </style.ReportInfo>

      <style.SubInfo>
        <div className="sub-info-wrap">
          <div className="writer-wrap">
            <img
              className="writer-img"
              src={reportInfo.memberInfo.profileImage}
            />
            <div>{reportInfo.memberInfo.name}</div>
          </div>
          <div>{reportInfo.createdAt}</div>
        </div>
      </style.SubInfo>
    </style.Container>
  );
};

export default ReportItem;
