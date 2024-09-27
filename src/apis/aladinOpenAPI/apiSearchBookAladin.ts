import axios from "axios";
import { ISearchBookAladin } from "./types";

export const apiSearchBookAladin = (query: string) => {
  return axios
    .get(
      `${process.env.REACT_APP_SERVER_DOMAIN}/books/openAPI/search?keyword=${query}`
    )
    .then(({ data: { data } }) => {
      return data as ISearchBookAladin[];
    })
    .catch((error) => {
      console.log(error);
      throw error;
    });
};
