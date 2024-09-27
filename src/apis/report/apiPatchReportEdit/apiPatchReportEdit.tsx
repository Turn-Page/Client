import axios from "axios";
import { IPatchReportEdit } from "./types";

export const apiPatchReportEdit = (
  reportId: number,
  data: IPatchReportEdit,
  accessToken: string
) => {
  return axios
    .patch(`${process.env.REACT_APP_SERVER_DOMAIN}/reports/${reportId}`, data, {
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
