import axios from "axios";
import { IFollowList, IMyOrder } from "./types";

export const apiGetMyOrderList = ({
  pageParam,
  accessToken,
}: {
  pageParam: number;
  accessToken: string;
}) => {
  const params = {
    page: pageParam,
    size: 10,
  };

  return axios
    .get(`${process.env.REACT_APP_SERVER_DOMAIN}/orders/my`, {
      params,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    .then(
      ({
        data: {
          data: { orderInfoList },
        },
      }) => orderInfoList as IMyOrder[]
    )
    .catch((err) => {
      console.log(err);
      throw err;
    });
};
