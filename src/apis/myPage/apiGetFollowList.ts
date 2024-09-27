import axios from "axios";
import { IFollowList } from "./types";

export const apiGetFollowList = (accessToken: string) => {
  return axios
    .get(`${process.env.REACT_APP_SERVER_DOMAIN}/follows`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    .then(({ data: { data } }) => data as IFollowList)
    .catch((err) => {
      console.log(err);
      throw err;
    });
};
