export const apiGetGoogleLoginToken = (oauthCode: string, oauthState: string) =>
  fetch(
    `${process.env.REACT_APP_SERVER_DOMAIN}/auth/login/google?code=${oauthCode}&state=${oauthState}`,
    {
      method: "POST",
    }
  )
    .then((response) => response.json())
    .then((res) => {
      if (res.status === 200) return res.data;
      else throw new Error("Failed to login");
    })
    .catch((error) => {
      console.log(error);
    });
