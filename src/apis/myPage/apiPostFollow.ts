import axios from "axios";

export const apiPostFollow = (accessToken: string, email: string) => {
  return axios
    .post(
      `${process.env.REACT_APP_SERVER_DOMAIN}/follows`,
      { email: email },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    )
    .then(({ data: { data } }) => data)
    .catch((err) => {
      console.log(err);
      throw err;
    });
};
