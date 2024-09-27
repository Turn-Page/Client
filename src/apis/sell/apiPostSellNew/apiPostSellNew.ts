import axios from "axios";
import { IPostSellNew } from "./types";

export const apiPostSellNew = (data: IPostSellNew, accessToken: string) => {
  return axios
    .post(`${process.env.REACT_APP_SERVER_DOMAIN}/salePosts`, data, {
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
