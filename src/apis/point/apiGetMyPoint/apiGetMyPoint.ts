import axios from "axios";
import { IMyPoint } from "./types";

export const apiGetMyPoint = (accessToken: string) => {
  return axios
    .get(`${process.env.REACT_APP_SERVER_DOMAIN}/members/myPoint`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    .then(({ data: { data } }) => data as IMyPoint)
    .catch((err) => {
      console.log(err);
      throw err;
    });
};
