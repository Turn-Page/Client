import axios from "axios";
import { IBestSeller } from "./types";

export const apiGetBestSeller = ({
  pageParam,
  size,
}: {
  pageParam: number;
  size?: number;
}) => {
  // size를 Home에서 preview로 부를때는 인자로 입력받고
  // 무한스크롤에서 부를때는 인자 안 넣어주고 10개로 고정
  const params = { page: pageParam, size: size || 10 };

  return axios
    .get(`${process.env.REACT_APP_SERVER_DOMAIN}/books/bestSeller`, { params })
    .then(
      ({
        data: {
          data: { bookInfoList },
        },
      }) => {
        bookInfoList.map((it: any) => {
          let _title = it.title.match(/^[^-]*/)[0];
          let match = it.title.match(/-(.*)/);
          if (match !== null && match[1] !== undefined) {
            it.subTitle = match[1];
          } else it.subTitle = "";
          it.title = _title;

          // 별점이 0이면 5로 바꿔주기
          if (it.star === 0) it.star = 5;

          return it;
        });
        return bookInfoList as IBestSeller[];
      }
    )
    .catch((error) => {
      console.log(error);
      throw error;
    });
};
