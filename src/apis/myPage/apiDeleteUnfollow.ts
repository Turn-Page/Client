import axios from "axios";
import { IFollowList } from "./types";

export const apiDeleteUnfollow = (accessToken: string, followId: number) => {
  return axios
    .delete(`${process.env.REACT_APP_SERVER_DOMAIN}/follows/${followId}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    .then()
    .catch((err) => {
      console.log(err);
      throw err;
    });
};
