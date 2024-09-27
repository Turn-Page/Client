import axios from "axios";
import { IPointCharge } from "./types";

export const apiPatchPointCharge = (accessToken: string, point: number) => {
  return axios
    .patch(
      `${process.env.REACT_APP_SERVER_DOMAIN}/members/myPoint?point=${point}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    )
    .then(({ data: { data } }) => data as IPointCharge)
    .catch((err) => {
      console.log(err);
      throw err;
    });
};
