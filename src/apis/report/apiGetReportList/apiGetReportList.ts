import axios from "axios";
import { splitTitle } from "../../../utils/splitTitle";
import { IReport } from "./types";

export const apiGetReportList = ({
  pageParam,
  accessToken,
}: {
  pageParam: number;
  accessToken: string;
}) => {
  const params = { page: pageParam, size: 10 };

  return axios

    .get(`${process.env.REACT_APP_SERVER_DOMAIN}/reports/following`, {
      params,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    .then(
      ({
        data: {
          data: { reportInfoList },
        },
      }) => {
        reportInfoList.map((it: any) => {
          // 제목, 부제 parsing
          let splitedTitle = splitTitle(it.bookInfo.title);
          [it.bookInfo.title, it.bookInfo.subTitle] = [
            splitedTitle?.title.trim(),
            splitedTitle?.subTitle.trim(),
          ];
          return it;
        });
        return reportInfoList as IReport[];
      }
    )
    .catch((error) => {
      console.log(error);
      throw error;
    });
};
