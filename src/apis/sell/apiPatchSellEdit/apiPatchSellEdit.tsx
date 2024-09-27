import axios from "axios";
import { IPatchSellEdit } from "./types";

export const apiPatchSellEdit = (
  sellId: number,
  data: IPatchSellEdit,
  accessToken: string
) => {
  return axios
    .patch(`${process.env.REACT_APP_SERVER_DOMAIN}/salePosts/${sellId}`, data, {
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
