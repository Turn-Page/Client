import axios from "axios";
import { ISellDetail } from "./types";
import { splitTitle } from "../../../utils/splitTitle";

export const apiGetSellDetail = (sellId: number, accessToken: string) => {
  return axios
    .get(`${process.env.REACT_APP_SERVER_DOMAIN}/salePosts/${sellId}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    .then(({ data: { data } }) => {
      let titleWrap = splitTitle(data.bookInfo.title);
      data.bookInfo.subTitle = titleWrap?.subTitle;
      data.bookInfo.title = titleWrap?.title;

      return data as ISellDetail;
    })
    .catch((error) => {
      console.log(error);
      throw error;
    });
};
