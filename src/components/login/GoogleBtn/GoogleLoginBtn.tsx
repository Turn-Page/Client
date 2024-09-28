const GoogleLoginBtn = () => {
  const handleLogin = () => {
    const queryString = new URLSearchParams({
      response_type: "code",
      scope: "email profile",
      client_id: `${process.env.REACT_APP_GOOGLE_API_KEY}`,
      redirect_uri: `${process.env.REACT_APP_CLIENT_DOMAIN}/callback/oauth2/code/google`,
      state: generateRandomString(20),
    });
    window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?${queryString}`;
  };

  return (
    <>
      <img
        src={`${process.env.PUBLIC_URL}/assets/googleBtn.png`}
        onClick={handleLogin}
        style={{ cursor: "pointer" }}
      />
    </>
  );
};

export default GoogleLoginBtn;

// 랜덤문자열 생성
function generateRandomString(length: number) {
  const charset =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let randomString = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    randomString += charset[randomIndex];
  }
  return randomString;
}
