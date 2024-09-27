import axios, { AxiosError } from "axios";

export const apiDeleteReport = (reportId: number, accessToken: string) => {
  return axios
    .delete(`${process.env.REACT_APP_SERVER_DOMAIN}/reports/${reportId}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    .then()
    .catch((error) => {
      console.log(error);
      throw error;
    });
};
