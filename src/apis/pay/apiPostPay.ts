import axios from "axios";
import { IPay } from "./types";

export const apiPostPay = (accessToken: string, salePostId: number) => {
  return axios
    .post(
      `${process.env.REACT_APP_SERVER_DOMAIN}/orders`,
      {
        salePostId: salePostId,
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    )
    .then(({ data: { data } }) => data as IPay)
    .catch((err) => {
      console.log(err);
      throw err;
    });
};
