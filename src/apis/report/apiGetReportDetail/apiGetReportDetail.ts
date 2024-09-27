import axios from "axios";
import { splitTitle } from "../../../utils/splitTitle";
import { IReportDetail } from "./types";

export const apiGetReportDetail = (reportId: number, accessToken: string) => {
  return axios
    .get(`${process.env.REACT_APP_SERVER_DOMAIN}/reports/${reportId}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    .then(({ data: { data } }) => data as IReportDetail)
    .catch((error) => {
      console.log(error);
      throw error;
    });
};
