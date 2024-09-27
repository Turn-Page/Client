import axios from "axios";
import { IBookDetail } from "./types";

export const apiGetBookDetail = (bookId: number) => {
  return axios
    .get(`${process.env.REACT_APP_SERVER_DOMAIN}/books/${bookId}`)
    .then(({ data: { data } }) => {
      let _title = data.title.match(/^[^-]*/)[0];
      let match = data.title.match(/-(.*)/);
      if (match !== null && match[1] !== undefined) {
        data.subTitle = match[1];
      } else data.subTitle = "";
      data.title = _title;

      // 별점이 0이면 5로 바꿔주기
      if (data.star === 0) data.star = 5;

      return data as IBookDetail;
    })
    .catch((error) => {
      console.log(error);
      throw error;
    });
};
