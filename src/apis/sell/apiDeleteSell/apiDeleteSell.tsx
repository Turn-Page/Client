import axios from "axios";

export const apiDeleteSell = (sellId: number, accessToken: string) => {
  return axios
    .delete(`${process.env.REACT_APP_SERVER_DOMAIN}/salePosts/${sellId}`, {
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
