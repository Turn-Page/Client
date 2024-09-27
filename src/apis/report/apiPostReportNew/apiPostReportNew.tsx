import axios from "axios";
import { IPostReportNew } from "./types";

export const apiPostReportNew = (data: IPostReportNew, accessToken: string) => {
  return axios
    .post(`${process.env.REACT_APP_SERVER_DOMAIN}/reports`, data, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    .then(({ status }) => status)
    .catch((error) => {
      console.log(error);
      throw error;
    });
};
