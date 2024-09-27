import axios from "axios";
import { IUserInfo } from "./types";

export const apiGetUserInfo = (accessToken: string) => {
  return axios
    .get(`${process.env.REACT_APP_SERVER_DOMAIN}/members/myPage`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    .then(({ data: { data } }) => data)
    .catch((err) => console.log(err));
};
